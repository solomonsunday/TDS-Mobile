/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {ReactElement, ReactNode} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenParam} from '../../navigators/dashboard/screens';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import Basket from '@assets/svgs/laundryBasket.svg';
import NotBell from '@assets/svgs/noti.svg';
import Checklist from '@assets/svgs/checklist.svg';
import Account from '@assets/svgs/person.svg';
import BigBell from '@assets/svgs/bigbell.svg';
import colors from '@utility/colors';
import {DashboardOption, nav} from 'src/types';
import {OptionCard} from './components/OptionCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = ({}) => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();

  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        paddingHorizontal: widthPixel(20),
      }}>
      <Spacer />
      <FlexedView justifyContent="space-between">
        <FlexedView>
          <Paragraph fontSize={25}>Hello Faith {'👋'}</Paragraph>
        </FlexedView>
        <FlexedView>
          <Pressable>
            <NotBell />
          </Pressable>
          <Pressable
            onPress={() => navigate('Basket')}
            style={{marginLeft: 20}}>
            <Basket />
          </Pressable>
        </FlexedView>
      </FlexedView>
      <Spacer />
      <ViewContainer style={styles.card} />
      <Spacer height={50} />
      <ViewContainer>
        <Paragraph fontSize={17} lineHeight={21} fontWeight="400">
          Dashboard
        </Paragraph>
        <Spacer height={10} />
        <View style={styles.optionView}>
          {dashboardOption.map((op, ind) => (
            <OptionCard item={op} key={ind} />
          ))}
        </View>
      </ViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    minHeight: heightPixel(150),
  },
  optionView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const dashboardOption: DashboardOption[] = [
  {
    title: 'Price List',
    icon: <Checklist />,
    url: 'Pricelist',
  },
  {
    title: 'My Account',
    icon: <Account height={80} />,
    url: 'Account',
  },
  {
    title: 'Active Order',
    icon: <BigBell />,
    url: 'ActiveOrder',
  },
];

export default HomeScreen;
