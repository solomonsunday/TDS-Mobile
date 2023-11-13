/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreenParam} from './screens';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/dashboard/index';
import PriceList from '@screens/pricelist';
import {Basket} from '@screens/basket';
import {Account} from '@screens/account';
import {Faq} from '@screens/faq';
import {Ratings} from '@screens/rating';
const {Screen: StackScreen, Navigator: StackNav} =
  createStackNavigator<HomeScreenParam>();

const DashboardNavigator = () => {
  return (
    <SafeAreaProvider>
      <StackNav
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Dashboard">
        <StackScreen component={HomeScreen} name="Dashboard" />
        <StackScreen component={PriceList} name="Pricelist" />
        <StackScreen component={Basket} name="Basket" />
        <StackScreen component={Account} name="Account" />
        <StackScreen component={Faq} name="Faq" />
        <StackScreen component={Ratings} name="Review" />
      </StackNav>
    </SafeAreaProvider>
  );
};

export default DashboardNavigator;
