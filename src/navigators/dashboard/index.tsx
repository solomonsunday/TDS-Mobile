/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import {HomeScreenParam} from './screens';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/dashboard/dashboard';
const {Screen: StackScreen, Navigator: StackNav} =
  createStackNavigator<HomeScreenParam>();

const DashboardNavigator = () => {
  return (
    <StackNav
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <StackScreen component={HomeScreen} name="Dashboard" />
    </StackNav>
  );
};

export default DashboardNavigator;
