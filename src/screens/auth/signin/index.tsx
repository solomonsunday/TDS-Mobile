/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {AuthScreenList} from '../../../navigators/auth/authParamList';
import {Text, View} from 'react-native';

type AuthScreenProps = StackNavigationProp<AuthScreenList>;

const SignIn: React.FC = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default SignIn;
