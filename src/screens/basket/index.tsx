/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '@components/header';
import {Paragraph} from '@components/text/text';
import {
  BaseView,
  BottomViewContainer,
  Center,
  FlexedView,
  Spacer,
  ViewContainer,
} from '@components/view';
import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import basket from '@assets/img/basketbig.png';
import {clothes} from '../../data';
import {ClotheItem} from '@screens/pricelist/components/ClotheItem';
import {AppButton} from '@components/button';
import {NAIRA} from '@utility/naira';
import colors from '@utility/colors';
import {heightPixel} from '@utility/pxToDpConvert';

export const Basket = () => {
  const [data, setData] = useState([...clothes]);

  return (
    <BaseView>
      <Header hasRightItems={false} hasBorder={false} title="Laundry basket" />
      <ViewContainer style={styles.container}>
        {!data.length ? (
          <Center>
            <Image source={basket} />
            <Spacer />
            <Paragraph fontSize={16} lineHeight={20} textAlign="center">
              There are no items in your laundry basket...
            </Paragraph>
          </Center>
        ) : (
          <View style={{flex: 1}}>
            <ScrollView>
              <Spacer height={20} />
              {data.map(dt => (
                <ClotheItem key={dt.id} item={dt} type="basket" />
              ))}
            </ScrollView>
          </View>
        )}
      </ViewContainer>
      {data.length && (
        <BottomViewContainer style={{height: heightPixel(170)}}>
          <FlexedView style={styles.totalView} justifyContent="space-between">
            <Paragraph fontSize={16} lineHeight={21}>
              Total:{' '}
            </Paragraph>
            <Paragraph
              fontSize={16}
              lineHeight={21}>{`${NAIRA}200,00`}</Paragraph>
          </FlexedView>
          <FlexedView justifyContent="space-around">
            <AppButton
              style={{width: '45%'}}
              variant="secondary"
              text="Add more items"
            />
            <AppButton
              style={{width: '45%'}}
              variant="primary"
              text="Proceed"
            />
          </FlexedView>
        </BottomViewContainer>
      )}
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalView: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: heightPixel(50),
  },
});
