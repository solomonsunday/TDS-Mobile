/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './auth';
import {RootScreenList} from './RootStackSceenList';
import {useAuth} from '../store/auth/hook';
import Onboarding from '../screens/onboarding';
import messaging from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {setCredential, setDidOnboard} from '../store/auth';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import DashboardNavigator from './dashboard';

const {Screen, Navigator} = createNativeStackNavigator<RootScreenList>();

const RootNavigator: React.FC = () => {
  const {user, didOnboard, appLoading} = useAuth();
  const {getItem} = useAsyncStorage('@user');
  const {getItem: getOnboard} = useAsyncStorage('onboard');
  const dispatch = useDispatch();

  // console.log(user, 'the user 00000');

  const retrieveStoredToken = async () => {
    const json = await getItem();
    const user_da = JSON.parse(json as string);
    // console.log(user_da, 'the user data');
    dispatch(setCredential(user_da));
  };

  const getOnboardStatus = async () => {
    const onboardStatus = await getOnboard();
    // const status = onboardStatus !== null ? JSON.parse(onboardStatus) : false;
    if (onboardStatus) {
      dispatch(setDidOnboard(JSON.parse(onboardStatus)));
    }
  };

  useEffect(() => {
    if (!appLoading) {
      SplashScreen.hide();
    }
  }, [appLoading]);

  useEffect(() => {
    retrieveStoredToken();
    getOnboardStatus();
  }, []);

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async message => {
      PushNotificationIOS.addNotificationRequest({
        id: 'notificationWithSound',
        title: message?.notification?.title,
        body: message?.notification?.body,
        sound: 'customSound.wav',
        badge: 1,
      });
    });

    return unsubscribe;
  }, []);

  return (
    <Navigator initialRouteName="DashboardNavigator">
      {/* when checking if user has signed in  render splash screen*/}

      {user && (
        <Screen
          name="DashboardNavigator"
          component={DashboardNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}

      {!didOnboard && (
        <Screen
          name="onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
            animationTypeForReplace: 'push',
          }}
        />
      )}

      {!user && (
        <Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{
            headerShown: false,
            animationTypeForReplace: !user ? 'pop' : 'push',
          }}
        />
      )}
    </Navigator>
  );
};

export default RootNavigator;
