/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store';
import RootNavigator from './navigators';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <RootNavigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
