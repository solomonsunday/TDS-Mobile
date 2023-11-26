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
import {Checkout} from '@screens/basket/Checkout';
import {ActiveOrder} from '@screens/active-order';
import {AddReview} from '@screens/rating/addReview';
import {Support} from '@screens/contact-support';
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
        <StackScreen component={Checkout} name="Checkout" />
        <StackScreen component={ActiveOrder} name="ActiveOrder" />
        <StackScreen component={AddReview} name="AddReview" />
        <StackScreen component={Support} name="Support" />
      </StackNav>
    </SafeAreaProvider>
  );
};

export default DashboardNavigator;
