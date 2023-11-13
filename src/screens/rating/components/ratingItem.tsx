import {Paragraph} from '@components/text/text';
import {FlexedView, Spacer} from '@components/view';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-rating-element';
import dayjs from 'dayjs';
import colors from '@utility/colors';
import star from '@assets/img/star.png';
import starYellow from '@assets/img/Star-yellow.png';

interface IProps {
  item: {
    name: string;
    rating: number | string;
    date: number | string | Date;
    review: string;
  };
}

export const RatingItem = ({
  item: {name, rating = 0, date, review},
}: IProps) => {
  return (
    <View style={styles.container}>
      <FlexedView
        style={{alignItems: 'flex-start'}}
        justifyContent="space-between">
        <View>
          <Paragraph fontSize={14} fontWeight="500">
            {name}
          </Paragraph>
          <Rating
            rated={rating}
            totalCount={5}
            type="custom"
            imageSize={15}
            selectedIconImage={starYellow}
            emptyIconImage={star}
            ratingColor={colors.white}
            readonly
          />
        </View>
        <Paragraph fontWeight="600" color={colors.border}>
          {dayjs(date).format('DD MMM YYYY')}
        </Paragraph>
      </FlexedView>
      <Spacer />
      <Paragraph>{review}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    marginBottom: 20,
  },
});
