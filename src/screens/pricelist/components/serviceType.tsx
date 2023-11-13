/* eslint-disable react-native/no-inline-styles */
import {Paragraph} from '@components/text/text';
import colors from '@utility/colors';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface Props {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const ServiceType = ({label, isSelected, onSelect}: Props) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      activeOpacity={0.4}
      style={{
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: isSelected ? colors.accent : colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        marginRight: 5,
      }}>
      <Paragraph>{label}</Paragraph>
    </TouchableOpacity>
  );
};
