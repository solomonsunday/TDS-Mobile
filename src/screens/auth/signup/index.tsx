/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthScreenList} from '../../../navigators/auth/authParamList';
import {BaseView, FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import {AppTextInput} from '@components/TextInput';
import {AppButton} from '@components/button';
import {heightPixel} from '@utility/pxToDpConvert';
import colors from '@utility/colors';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {nav} from 'src/types';
import logo from '@assets/img/dcs.png';
import {setIsGuest} from '@store/auth';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<nav<AuthScreenList>>();
  return (
    <BaseView>
      <ScrollView style={{flex: 1}}>
        <ViewContainer style={{flex: 1}}>
          <Image
            style={styles.logo}
            source={logo}
            tintColor={'#000'}
            resizeMode="contain"
          />
          <Spacer height={25} />
          <ViewContainer style={styles.box}>
            <Paragraph>
              Kindly provide the following details to continue with your order
            </Paragraph>
            <Spacer />
            <AppTextInput placeholder="* Phone number" />
            <AppTextInput placeholder="* First name" />
            <AppTextInput placeholder="* Last name" />
            <AppTextInput placeholder="* Enter pickup/delivery address" />
            <AppTextInput placeholder="*Password" />
            <Paragraph>
              By confirming your order, you are agreeing to our
              <Paragraph color={colors.primary} fontWeight="700">
                {' '}
                Terms and Conditions
              </Paragraph>
            </Paragraph>
            <Spacer />
            <AppButton text="Confirm" variant="primary" />
          </ViewContainer>
        </ViewContainer>
      </ScrollView>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: heightPixel(70),
    height: heightPixel(70),
    alignSelf: 'center',
  },
  box: {
    paddingVertical: heightPixel(50),
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default SignUp;
