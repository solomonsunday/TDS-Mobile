/* eslint-disable react-native/no-inline-styles */
import Header from '@components/header';
import {Paragraph} from '@components/text/text';
import {BaseView, FlexedView, Spacer, ViewContainer} from '@components/view';
import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Switch,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import ProfileIcon from '@assets/svgs/profile.svg';
import colors from '@utility/colors';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import Noti from '@assets/svgs/noti.svg';
import LocaIcon from '@assets/svgs/location.svg';
import PencilIcon from '@assets/svgs/pencil.svg';
import KeyIcon from '@assets/svgs/key.svg';
import ForwardIcon from '@assets/svgs/forward.svg';
import StarIcon from '@assets/svgs/star-line.svg';
import InfoIcon from '@assets/svgs/info-circle.svg';
import ChatIcon from '@assets/svgs/chat.svg';
import Modal from 'react-native-modal';
import CancelIcon from '@assets/svgs/cancel.svg';
import {AppTextInput} from '@components/TextInput';
import {AppButton} from '@components/button';
import {useNavigation} from '@react-navigation/native';
import {nav} from 'src/types';
import {HomeScreenParam} from 'src/navigators/dashboard/screens';

export const Account = () => {
  const [notify, setNotify] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const {navigate} = useNavigation<nav<HomeScreenParam>>();

  const closeModal = () => setShowModal(false);

  return (
    <BaseView>
      <Header hasBorder={false} hasRightItems={false} title="My Account" />
      <ViewContainer style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: heightPixel(35),
            paddingTop: heightPixel(60),
          }}>
          <FlexedView style={styles.item}>
            <ProfileIcon />
            <View style={{flex: 1, marginLeft: 20}}>
              <Paragraph fontSize={18} lineHeight={21}>
                Faith Ajibola
              </Paragraph>
              <Paragraph fontSize={16}>+234 810 123 4567</Paragraph>
            </View>
          </FlexedView>
          <FlexedView style={styles.item} justifyContent="space-between">
            <Noti />
            <View style={{flex: 1, marginLeft: 20}}>
              <Paragraph fontSize={16} lineHeight={21}>
                Enable notifications
              </Paragraph>
            </View>
            <View>
              <Switch
                value={notify}
                thumbColor={notify ? colors.black : colors.black}
                trackColor={{false: colors.white, true: colors.white}}
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                }}
                onValueChange={setNotify}
              />
            </View>
          </FlexedView>
          <Pressable
            onPress={() => {
              setModalContent('address');
              setShowModal(true);
            }}>
            <FlexedView style={styles.item} justifyContent="space-between">
              <LocaIcon />
              <View style={{flex: 1, marginLeft: 20}}>
                <Paragraph fontSize={16} lineHeight={21}>
                  21, Ondo Street, Oke-ira, Ojodu, Lagos
                </Paragraph>
              </View>
              <View>
                <PencilIcon />
              </View>
            </FlexedView>
          </Pressable>
          <Pressable
            onPress={() => {
              setModalContent('password');
              setShowModal(true);
            }}>
            <FlexedView style={styles.item} justifyContent="space-between">
              <KeyIcon />
              <View style={{flex: 1, marginLeft: 20}}>
                <Paragraph fontSize={16} lineHeight={21}>
                  Change login password
                </Paragraph>
              </View>
              <View>
                <PencilIcon />
              </View>
            </FlexedView>
          </Pressable>
          <Pressable onPress={() => navigate('Review')}>
            <FlexedView style={styles.item} justifyContent="space-between">
              <StarIcon />
              <View style={{flex: 1, marginLeft: 20}}>
                <Paragraph fontSize={16} lineHeight={21}>
                  Ratings and reviews
                </Paragraph>
              </View>
              <View>
                <ForwardIcon />
              </View>
            </FlexedView>
          </Pressable>
          <Pressable onPress={() => navigate('Faq')}>
            <FlexedView style={styles.item} justifyContent="space-between">
              <InfoIcon />
              <View style={{flex: 1, marginLeft: 20}}>
                <Paragraph fontSize={16} lineHeight={21}>
                  FAQs
                </Paragraph>
              </View>
              <View>
                <ForwardIcon />
              </View>
            </FlexedView>
          </Pressable>
          <Spacer height={40} />
          <FlexedView justifyContent="center">
            <Paragraph>Have any issues? Chat with our operator...</Paragraph>
            <Pressable onPress={() => navigate('Support')}>
              <ChatIcon />
            </Pressable>
          </FlexedView>
          <Spacer height={40} />
          <TouchableOpacity>
            <Paragraph textAlign="center">
              Click{' '}
              <Paragraph fontWeight="700" color={colors.red}>
                HERE
              </Paragraph>{' '}
              if you wish to delete your account
            </Paragraph>
          </TouchableOpacity>
        </ScrollView>
      </ViewContainer>
      <Modal
        onBackdropPress={closeModal}
        hasBackdrop
        style={{margin: 0, justifyContent: 'flex-end'}}
        isVisible={showModal}>
        <ViewContainer style={styles.modalContent}>
          <Spacer />
          <View style={{alignItems: 'flex-end'}}>
            <Pressable onPress={closeModal}>
              <CancelIcon />
            </Pressable>
          </View>

          <Paragraph
            fontSize={18}
            lineHeight={23}
            fontWeight="700"
            textAlign="center">
            {modalContent === 'address' ? 'Update Address' : 'Change Password'}
          </Paragraph>
          <Spacer />
          <Paragraph fontSize={15} lineHeight={21} textAlign="center">
            {modalContent === 'address'
              ? 'Add an address for your laundry pickup/delivery'
              : 'Create a new password that is at least 8 characters long'}
          </Paragraph>
          <Spacer height={50} />
          <View>
            <AppTextInput
              placeholder={
                modalContent === 'address'
                  ? ' Enter address'
                  : ' Enter new password'
              }
            />
          </View>
          <Spacer height={100} />
          <View>
            <AppButton
              variant="primary"
              text={
                modalContent === 'address' ? 'Add address' : 'Change password'
              }
            />
          </View>
        </ViewContainer>
      </Modal>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: widthPixel(20),
    marginBottom: heightPixel(25),
  },
  modalContent: {
    // flex: 1,
    width: '90%',
    backgroundColor: colors.white,
    minHeight: heightPixel(650),
    alignSelf: 'center',
    borderRadius: 15,
    paddingTop: heightPixel(20),
  },
});
