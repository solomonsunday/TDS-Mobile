import {ReactElement} from 'react';
import {HomeScreenParam} from './navigators/dashboard/screens';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

export interface DashboardOption {
  title: string;
  icon: ReactElement;
  url: keyof HomeScreenParam;
}

export type nav<T extends ParamListBase> = StackNavigationProp<T>;
