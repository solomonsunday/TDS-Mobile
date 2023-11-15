import Header from '@components/header';
import {BaseView, Spacer, ViewContainer} from '@components/view';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {RatingItem} from './components/ratingItem';
import {Paragraph} from '@components/text/text';

export const Ratings = () => {
  return (
    <BaseView>
      <Header
        title="Ratings  and reviews"
        hasBorder={false}
        hasRightItems={false}
      />
      <ViewContainer style={styles.container}>
        <Spacer />
        <Paragraph fontSize={16} lineHeight={21} fontWeight="600">
          What our customers think
        </Paragraph>
        <ScrollView contentContainerStyle={{paddingTop: 30}}>
          {revies.map((rv, ind) => (
            <RatingItem key={ind} item={rv} />
          ))}
        </ScrollView>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const revies = [
  {
    rating: 3,
    name: 'Jeremiah',
    date: Date.now(),
    review:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    rating: 1,
    name: 'Jeremiah',
    date: Date.now(),
    review:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    rating: 0,
    name: 'Jeremiah',
    date: Date.now(),
    review:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    rating: 4,
    name: 'Jeremiah',
    date: Date.now(),
    review:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
];
