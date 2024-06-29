import React from 'react';
import {Dimensions, Platform} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {Login, Register} from '../screens';
import {RootStackParamList} from './navigationTypes';
import {Colors} from '../constants';
import {moderateScale} from 'react-native-size-matters';

const Stack = createStackNavigator<RootStackParamList>();

const AuthNavigator: React.FC = () => {
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;

  const headerHeight =
    aspectRatio < 1.6 || Platform.OS === 'android'
      ? moderateScale(56)
      : moderateScale(96);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.WHITE, // Change to your desired color
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: moderateScale(18),
        },
        headerStyle: {
          backgroundColor: Colors.BLACK,
          height: headerHeight,
        },
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
