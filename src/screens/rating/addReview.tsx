/* eslint-disable react-native/no-inline-styles */
import {AppTextInput} from '@components/TextInput';
import {AppButton} from '@components/button';
import Header from '@components/header';
import {Paragraph} from '@components/text/text';
import {BaseView, Spacer, ViewContainer} from '@components/view';
import colors from '@utility/colors';
import {heightPixel} from '@utility/pxToDpConvert';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-rating-element';
import star from '@assets/img/star.png';
import starYellow from '@assets/img/Star-yellow.png';

export const AddReview = () => {
  const [rated, setRated] = useState(0);

  return (
    <BaseView>
      <Header title="Leave a review" hasBorder={false} hasRightItems={false} />
      <Spacer height={25} />
      <ViewContainer style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            padding: 10,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
          }}>
          <Rating
            rated={rated}
            totalCount={5}
            type="custom"
            size={25}
            selectedIconImage={starYellow}
            emptyIconImage={star}
            ratingColor={colors.white}
            direction="row"
            onIconTap={(pos: number) => setRated(pos)}
          />
        </View>

        <Spacer />

        <Paragraph fontSize={14} color={colors['black-shade']}>
          Leave a feedback about our service
        </Paragraph>
        <Spacer />

        <AppTextInput
          placeholder="Describe your expectation"
          multiline
          containerStyle={{
            borderColor: colors.primary,
          }}
          inputStyle={{
            height: heightPixel(150),
          }}
        />

        <Spacer />
        <View style={{flex: 1}}>
          <AppButton text="Submit" variant="primary" />
        </View>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
