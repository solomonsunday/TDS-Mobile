import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import support from '@assets/img/assistant.png';
import {BaseView, Spacer, ViewContainer} from '@components/view';
import Header from '@components/header';
import {Paragraph} from '@components/text/text';

export const Support = () => {
  return (
    <BaseView>
      <Header
        title="Contacts and support"
        hasBorder={false}
        hasRightItems={false}
      />
      <ViewContainer style={styles.container}>
        <Spacer />
        <View style={styles.imgView}>
          <Image source={support} />
          <Paragraph>Have any issues? Chat with our operator</Paragraph>
        </View>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgView: {
    alignItems: 'center',
  },
});
