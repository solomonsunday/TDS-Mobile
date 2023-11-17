/* eslint-disable react-native/no-inline-styles */
import Header from '@components/header';
import {BaseView, FlexedView, Spacer, ViewContainer} from '@components/view';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import Truck from '@assets/svgs/truck.svg';
import {Paragraph} from '@components/text/text';
import colors from '@utility/colors';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import Uncheck from '@assets/svgs/uncheck.svg';
import Check from '@assets/svgs/check.svg';
import Card from '@assets/svgs/card.svg';
import File from '@assets/svgs/file.svg';
import {AppTextInput} from '@components/TextInput';
import {AppButton} from '@components/button';
import Modal from 'react-native-modal';
import girl from '@assets/img/girl.png';
import Smile from '@assets/svgs/Smile.svg';
import {useNavigation} from '@react-navigation/native';
import {nav} from 'src/types';
import {HomeScreenParam} from 'src/navigators/dashboard/screens';

export const Checkout = () => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  const [express, setExpress] = useState(true);
  const [delTime, setDelTime] = useState('');
  const [showmodal, setShowmodal] = useState(false);
  const [paymethod, setPaymethod] = useState('cash');

  const close = () => {
    setShowmodal(false);
    navigate('Dashboard');
  };

  return (
    <BaseView>
      <Header title="Checkout" hasBorder={false} hasRightItems={false} />
      <ViewContainer style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: heightPixel(30)}}>
          <FlexedView style={[{alignItems: 'flex-start'}, styles.box]}>
            <FlexedView style={{alignItems: 'flex-start', flex: 1}}>
              <Truck height={30} width={30} />
              <View style={{flex: 1, marginLeft: 10}}>
                <Paragraph fontSize={17}>Express order</Paragraph>
                <Paragraph color={colors['black-shade']} mt={5}>
                  Your laundry order can be made ready before the expected
                  return date. Note that this will attract extra charges.
                </Paragraph>
              </View>
            </FlexedView>
            <View style={{marginLeft: 20}}>
              <Switch
                value={express}
                thumbColor={express ? colors.black : colors.black}
                trackColor={{false: colors.white, true: colors.white}}
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  // height: 20,
                  transform: [{scaleX: 0.7}, {scaleY: 0.7}],
                }}
                onValueChange={setExpress}
              />
            </View>
          </FlexedView>
          <Spacer />
          <FlexedView style={styles.box}>
            <FlexedView>
              <Uncheck height={20} width={20} />
              <Paragraph style={{marginLeft: 20}}>
                Pickup and Delivery
              </Paragraph>
            </FlexedView>
          </FlexedView>
          <Spacer />
          <View style={styles.box}>
            <FlexedView>
              <Card />
              <Paragraph style={{marginLeft: 20}}>
                Select Payment Method
              </Paragraph>
            </FlexedView>
            <Spacer />
            <Pressable
              onPress={() => setPaymethod('cash')}
              style={styles.select}>
              {paymethod === 'cash' ? (
                <Check height={20} width={20} />
              ) : (
                <Uncheck height={20} width={20} />
              )}
              <Paragraph style={{marginLeft: 20}}>Cash</Paragraph>
            </Pressable>
            <Spacer height={10} />
            <Pressable
              onPress={() => setPaymethod('transfer')}
              style={styles.select}>
              {paymethod === 'transfer' ? (
                <Check height={20} width={20} />
              ) : (
                <Uncheck height={20} width={20} />
              )}
              <Paragraph style={{marginLeft: 20}}>Transfer</Paragraph>
            </Pressable>
            <Spacer height={30} />
            <FlexedView style={{flex: 1, alignItems: 'flex-start'}}>
              <Paragraph>Account No:</Paragraph>
              <View style={{flex: 1}}>
                <Paragraph>
                  <Paragraph fontWeight="600" color={colors.blue}>
                    0123456789{' '}
                  </Paragraph>
                  First First Bank The Dry-cleaner’s Son
                </Paragraph>
              </View>
            </FlexedView>
          </View>
          <Spacer />
          <View style={[styles.box]}>
            <FlexedView style={{alignItems: 'flex-start'}}>
              <File height={30} width={30} />
              <View style={{marginLeft: 20, flex: 1}}>
                <Paragraph>Add washing instructions</Paragraph>
                <Spacer />
                <AppTextInput
                  containerStyle={styles.input}
                  placeholder="Start typing here..."
                />
              </View>
            </FlexedView>
          </View>
          <Spacer />
          <View style={styles.box}>
            <Paragraph>Pickup Time</Paragraph>
            <Spacer />
            <FlexedView justifyContent="space-between">
              {deliveryTime.map(dl => (
                <Pressable
                  onPress={() => setDelTime(dl.id)}
                  key={dl.id}
                  style={[
                    styles.timeBox,
                    {
                      backgroundColor:
                        delTime === dl.id ? colors.accent : 'white',
                    },
                  ]}>
                  <Paragraph>{dl.time}</Paragraph>
                  <Paragraph>{dl.type}</Paragraph>
                </Pressable>
              ))}
            </FlexedView>
          </View>
          <Spacer />
          <View style={styles.box}>
            <FlexedView justifyContent="space-between">
              <Paragraph>Items :</Paragraph>
              <Paragraph>#2,700</Paragraph>
            </FlexedView>
            <Spacer height={10} />
            <FlexedView justifyContent="space-between">
              <Paragraph>Delivery :</Paragraph>
              <Paragraph>#2,700</Paragraph>
            </FlexedView>
            <Spacer height={10} />
            <FlexedView justifyContent="space-between">
              <Paragraph>Express :</Paragraph>
              <Paragraph>#2,700</Paragraph>
            </FlexedView>
            <View style={styles.divider} />
            <FlexedView justifyContent="space-between">
              <Paragraph fontWeight="700">Total :</Paragraph>
              <Paragraph fontWeight="700">#2,700</Paragraph>
            </FlexedView>
          </View>
          <Spacer height={30} />
          <AppButton variant="primary" text="Checkout" />
        </ScrollView>
      </ViewContainer>
      <Modal
        onBackButtonPress={close}
        onBackdropPress={close}
        isVisible={showmodal}>
        <ViewContainer style={styles.modal}>
          <Paragraph textAlign="center" fontSize={18}>
            Your laundry order has been registered!
          </Paragraph>
          <Spacer />
          <Image source={girl} />
          <Spacer />
          <FlexedView>
            <Paragraph fontSize={16}>In case you missed this. </Paragraph>
            <Smile />
          </FlexedView>
          <Spacer />
          <FlexedView style={{alignItems: 'flex-start'}}>
            <Paragraph fontSize={16}>Account No:</Paragraph>
            <View style={{flex: 1}}>
              <Paragraph fontSize={16}>
                <Paragraph fontSize={16} fontWeight="600" color={colors.blue}>
                  0123456789{' '}
                </Paragraph>
                First First Bank The Dry-cleaner’s Son
              </Paragraph>
            </View>
          </FlexedView>
          <Spacer />
          <AppButton
            onPress={close}
            style={{width: '80%'}}
            variant="primary"
            text="Done"
          />
        </ViewContainer>
      </Modal>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: widthPixel(20),
    borderRadius: 15,
  },
  input: {
    width: '100%',
    borderWidth: 0,
  },
  timeBox: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: colors.border,
    marginTop: 10,
    marginBottom: 15,
  },
  modal: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: heightPixel(20),
  },
  select: {
    flexDirection: 'row',
  },
});

const deliveryTime = [
  {
    time: '8:00',
    id: '8',
    type: 'AM',
  },
  {
    time: '18:00',
    id: '10',
    type: 'AM',
  },
  {
    time: '11:30',
    id: '11',
    type: 'AM',
  },
  {
    time: '1:00',
    id: '1',
    type: 'PM',
  },
  {
    time: '3:00',
    id: '3',
    type: 'PM',
  },
];
