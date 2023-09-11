/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useRef, useState} from 'react';

import {View, FlatList, useWindowDimensions, ViewToken} from 'react-native';
import {ViewContainer} from '../../components/view';
import {Animated} from 'react-native';
import {Slides} from './data';
import Slider from './Slide';
import Dots from './Dots';
import {AppButton} from '../../components/button';
import {RootScreenList} from '../../navigators/RootStackSceenList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {setDidOnboard} from '../../store/auth';
import {useDispatch} from 'react-redux';
import colors from '../../utility/colors';

type nav = StackNavigationProp<RootScreenList>;

const Onboarding = () => {
  const {navigate} = useNavigation<nav>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width, height} = useWindowDimensions();
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slideRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };

  const onViewableItemsChanged = React.useRef(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      const newIndex = info.viewableItems[0].index;
      setCurrentIndex(newIndex as number);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <View>
        <FlatList
          // style={{flex:1}}
          pagingEnabled
          scrollEventThrottle={32}
          horizontal
          bounces={false}
          data={Slides}
          keyExtractor={ob => ob.id}
          renderItem={({item, index}) => <Slider index={index} data={item} />}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />

        <Dots slides={Slides} index={currentIndex} />
        <ViewContainer>
          {/* <Spacer /> */}
          <AppButton
            variant="primary"
            style={{marginTop: 5}}
            height={7}
            text="Sign in"
            textStyle={{
              fontSize: 14,
              lineHeight: 18,
              fontWeight: '800',
            }}
            onPress={() => {
              dispatch(setDidOnboard(true));
              navigate('AuthNavigator', {
                screen: 'SignIn',
              });
            }}
          />
        </ViewContainer>
      </View>
    </View>
  );
};

export default Onboarding;
