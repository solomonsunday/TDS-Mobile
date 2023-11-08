import Header from '@components/header';
import {Paragraph} from '@components/text/text';
import {BaseView, Spacer, ViewContainer} from '@components/view';
import React from 'react';
import {ScrollView} from 'react-native';

const PriceList = () => {
  return (
    <BaseView>
      <Header title="Price list" />

      <ViewContainer style={{flex: 1}}>
        <Spacer />
        <ScrollView>
          <Paragraph>Kindly select one of these.</Paragraph>
        </ScrollView>
      </ViewContainer>
    </BaseView>
  );
};

export default PriceList;
