/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet, Image} from 'react-native';
import {Slide} from './data';

interface Iprops {
  data: Slide;
  index: number;
}

const Slider: React.FC<Iprops> = ({
  data: {image, id, text, title, redTitle, thirdText},
  index,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[{width, marginTop: -100}]}>
      <Image source={image} />

      <View style={styles.texts_view}>
        <Text>"hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skipView: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  image_view: {
    // flex:0.9,
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts_view: {
    // flex: 0.4,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 20,
  },
});

export default Slider;
