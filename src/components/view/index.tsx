/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {heightPixel, widthPixel} from '../../utility/pxToDpConvert';

interface ViewProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const ViewContainer = ({children, style}: ViewProps) => {
  return (
    <View style={[{paddingHorizontal: widthPixel(20)}, style]}>{children}</View>
  );
};

export const Spacer = ({height}: {height?: number}) => {
  return <View style={{height: heightPixel(height ?? 20)}} />;
};

interface FlexProps extends PropsWithChildren {
  justifyContent?: ViewStyle['justifyContent'];
  style?: StyleProp<ViewStyle>;
}

export const FlexedView = ({children, justifyContent, style}: FlexProps) => {
  return (
    <View
      style={[
        {flexDirection: 'row', alignItems: 'center', justifyContent},
        style,
      ]}>
      {children}
    </View>
  );
};

export const Center = ({children}: PropsWithChildren) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </View>
  );
};
