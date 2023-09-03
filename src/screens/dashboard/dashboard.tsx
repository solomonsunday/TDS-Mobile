/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreenParam} from '../../navigators/dashboard/screens';

type nav = StackNavigationProp<HomeScreenParam>;

const HomeScreen: React.FC = ({}) => {
  return (
    <View>
      <Text>hgdh</Text>
    </View>
  );
};

export default HomeScreen;
