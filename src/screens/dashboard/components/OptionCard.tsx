import {Paragraph} from '@components/text/text';
import {useNavigation} from '@react-navigation/native';
import colors from '@utility/colors';
import {fontPixel, heightPixel} from '@utility/pxToDpConvert';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {HomeScreenParam} from 'src/navigators/dashboard/screens';
import {DashboardOption, nav} from 'src/types';

interface IProp {
  item: DashboardOption;
}

export const OptionCard = ({item: {title, icon, url}}: IProp) => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  return (
    <Pressable onPress={() => navigate(url)} style={styles.card}>
      <View style={styles.iconView}>{icon}</View>
      <Paragraph style={styles.title}>{title}</Paragraph>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPixel(15),
    width: '48%',
    marginBottom: 20,
    height: heightPixel(150),
    borderColor: colors.border,
  },
  title: {
    fontSize: fontPixel(16),
    marginTop: 10,
  },
  iconView: {
    height: '70%',
  },
});
