/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {BoldText, MediumText, RegularText} from '../../../components/text/text';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PrimaryButton} from '../../../components/button';
import {
  BaseViewContainer,
  FlexedView,
  Spacer,
  ViewContainer,
} from '../../../components/view';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthScreenList} from '../../../navigators/auth/authParamList';
import {heightPixel} from '../../../utility/pxToDpConvert';
import {useTheme} from '@emotion/react';
import {TopHeader} from '../../../components/headers/topHeader';
import {Loader} from '../../../components/Loader';
import {
  useResetPasswordOtpMutation,
  useVerifyOtpMutation,
} from '../../../services/auth';
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
  CodeField,
  Cursor,
} from 'react-native-confirmation-code-field';

type navProps = StackNavigationProp<AuthScreenList>;
type routeProp = RouteProp<AuthScreenList, 'VerifyPhonenumber'>;

const CELL_COUNT = 6;

const VerifyOtp: React.FC = () => {
  const [verifyOtp, {isLoading}] = useVerifyOtpMutation();
  const [requestOtp, {isLoading: resending}] = useResetPasswordOtpMutation();
  const {navigate} = useNavigation<navProps>();
  const route = useRoute<routeProp>();
  const [seconds, setSeconds] = useState<number>(30);
  const [otp, setOtp] = useState('');
  const {colors} = useTheme();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const ref = useBlurOnFulfill({value: otp, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const startTimer = () => {
    const timer = setTimeout(() => {
      if (seconds <= 0) {
        clearTimeout(timer);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, [seconds]);

  const submit = () => {
    verifyOtp({phone_number: route.params?.phone, otp})
      .unwrap()
      .then(res => {
        navigate('CreatePassword', {phone: route.params?.phone, otp});
      })
      .catch(err => {
        setHasError(true);
        // console.log(err, 'erorro');
      });
  };

  const resend = async () => {
    requestOtp({phone_number: route.params?.phone})
      .unwrap()
      .then(res => {
        setSeconds(30);
        setHasError(false);
        startTimer();
      })
      .catch(err => {
        // console.log(err);
      });
  };

  return (
    <BaseViewContainer>
      {isLoading && <Loader />}
      <ViewContainer>
        <TopHeader />
        <Spacer />
        <BoldText color={colors.blackPrimary} fontSize={24} lineHeight={30}>
          Enter verification code
        </BoldText>
        <RegularText
          color={colors.textNormal}
          marginTop={10}
          fontSize={16}
          lineHeight={24}>
          {`A 6-digit verification code has been sent to ${route.params.phone}.`}
        </RegularText>
        <Spacer height={40} />

        {/* <SmoothPinCodeInput
          containerStyle={[styles.otpView]}
          cellSpacing={12}
          autoFocus
          codeLength={6}
          value={otp}
          onTextChange={(password: string) => setOtp(password)}
          cellStyle={[
            styles.otpBox,
            {
              backgroundColor: hasError ? '#FFEFEB' : '',
              borderColor: hasError ? '#EF8476' : colors.border,
            },
          ]}
          cellStyleFocused={[styles.otpBox, styles.otpFocus]}
        /> */}
        <CodeField
          ref={ref}
          {...props}
          value={otp}
          onChangeText={setOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.otpView}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          showSoftInputOnFocus={true}
          renderCell={({index, symbol, isFocused}) => {
            let textChild = null;
            if (symbol) {
              textChild = symbol;
            } else if (isFocused) {
              textChild = null;
            }
            return (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[
                  {
                    ...styles.otpBox,
                    backgroundColor: hasError ? '#FFEFEB' : '',
                    borderColor: hasError ? '#EF8476' : colors.border,
                  },
                  isFocused && styles.otpFocus,
                ]}>
                <MediumText fontSize={24} lineHeight={26}>
                  {textChild || (isFocused ? <Cursor /> : null)}
                </MediumText>
              </View>
            );
          }}
        />
        {hasError && (
          <RegularText fontSize={14} color="#E11900">
            Invalid OTP entered
          </RegularText>
        )}

        {seconds > 0 ? (
          <FlexedView style={{marginTop: hasError ? 0 : 10}}>
            <MediumText fontSize={14}>Didn't get code?</MediumText>
            <MediumText marginLeft={5} color={colors.primary}>
              {`Resend in 0${Math.floor(seconds / 60)} : ${
                seconds < 10 ? 0 : ''
              }${seconds % 60}`}
            </MediumText>
          </FlexedView>
        ) : (
          <FlexedView style={{marginTop: hasError ? 0 : 10}}>
            <MediumText fontSize={14}>Didn't get code?</MediumText>
            <TouchableOpacity onPress={resend}>
              <MediumText marginLeft={5} color={colors.primary}>
                Resend
              </MediumText>
            </TouchableOpacity>
          </FlexedView>
        )}
        <Spacer />
        <PrimaryButton
          onPress={submit}
          text="Verify"
          disabled={otp.length !== 6}
        />
      </ViewContainer>
    </BaseViewContainer>
  );
};

const styles = StyleSheet.create({
  otpView: {
    marginBottom: 5,
    width: '100%',
  },
  otpBox: {
    width: heightPixel(50),
    height: heightPixel(50),
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#D0D5DD',
    justifyContent: 'center',
  },
  otpFocus: {
    borderColor: '#DE183D',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default VerifyOtp;
