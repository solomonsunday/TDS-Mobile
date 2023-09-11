/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Slide} from './data';

interface Iprops {
  slides: Slide[];
  index: number;
}

const Dots: React.FC<Iprops> = ({slides, index}) => {
  return (
    <View style={styles.container}>
      {slides.map((ob, i) => {
        return (
          <View
            style={{
              width: 20,
              height: 5,
              marginRight: 5,
              backgroundColor: i === index ? 'red' : 'blkue',
            }}
            key={ob.id}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'grey',
    marginLeft: 10,
  },
});
export default Dots;
