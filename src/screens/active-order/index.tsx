/* eslint-disable react/no-unstable-nested-components */
import Header from '@components/header';
import {BaseView, FlexedView, Spacer, ViewContainer} from '@components/view';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import laundImg from '@assets/img/laundry.png';
import colors from '@utility/colors';
import {heightPixel} from '@utility/pxToDpConvert';
import {Paragraph} from '@components/text/text';
import TickIcon from '@assets/svgs/tick-circle.svg';
import UncheckIcon from '@assets/svgs/uncheck.svg';
import {AppButton} from '@components/button';
import {useNavigation} from '@react-navigation/native';
import {nav} from 'src/types';
import {HomeScreenParam} from 'src/navigators/dashboard/screens';

export const ActiveOrder = () => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  const Progress = ({
    title,
    completed,
    hasDot,
  }: ProgressItem & {hasDot: boolean}) => {
    return (
      <FlexedView style={{alignItems: 'flex-start', marginBottom: 5}}>
        <View style={{marginRight: 15}}>
          {completed ? (
            <TickIcon height={23} width={23} />
          ) : (
            <UncheckIcon height={20} width={20} />
          )}
          {hasDot && (
            <View style={styles.dots}>
              <View style={styles.circle} />
              <View style={styles.circle} />
              <View style={styles.circle} />
            </View>
          )}
        </View>
        <Paragraph fontSize={18} lineHeight={21} fontWeight="400">
          {title}
        </Paragraph>
      </FlexedView>
    );
  };

  return (
    <BaseView>
      <Header
        title="Laundry progress"
        hasBorder={false}
        hasRightItems={false}
      />
      <ViewContainer style={styles.container}>
        <Spacer height={30} />
        <Image source={laundImg} />
        <ViewContainer style={styles.box}>
          {progress.map((pg, ind) => (
            <Progress {...pg} key={ind} hasDot={ind + 1 !== progress.length} />
          ))}
        </ViewContainer>
        <Spacer height={30} />
        <AppButton
          variant="secondary"
          text="Leave a review"
          onPress={() => navigate('AddReview')}
          style={{width: '80%'}}
        />
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    borderWidth: 1,
    borderColor: colors.border,
    width: '100%',
    minHeight: heightPixel(150),
    borderRadius: 15,
    paddingVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.border,
    marginBottom: 3,
  },
  dots: {
    alignItems: 'center',
    marginTop: 3,
  },
});

const progress: ProgressItem[] = [
  {
    completed: true,
    title: 'Received',
  },
  {
    completed: false,
    title: 'Washed',
  },
  {
    completed: false,
    title: 'Ironed',
  },
  {
    completed: false,
    title: 'Ready for pickup',
  },
  {
    completed: false,
    title: 'Laundry delivered',
  },
];

type ProgressItem = {
  completed: boolean;
  title: string;
};
