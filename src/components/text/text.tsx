import React from 'react';
import {Text, TextStyle} from 'react-native';
import {fontPixel} from '@utility/pxToDpConvert';
import {PropsWithChildren} from 'react';
import colors from '@utility/colors';

interface TextProps extends PropsWithChildren {
  style?: TextStyle;
  color?: string;
  fontSize?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
  fontWeight?: TextStyle['fontWeight'];
  mt?: TextStyle['marginTop'];
  mr?: TextStyle['marginRight'];
}

export const Paragraph = ({
  children,
  color = colors.black,
  fontSize = fontPixel(14),
  lineHeight,
  fontWeight,
  mr = fontPixel(5),
  mt,
  style,
}: TextProps) => {
  return (
    <Text
      style={[
        {
          color,
          fontSize,
          lineHeight,
          fontWeight,
          marginTop: mt,
          marginRight: mr,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};