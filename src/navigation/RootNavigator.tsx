// RootNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthNavigator';
import AppStack from './DashboardNavigator';

import {RootStackParamList} from '../navigation/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const isLoggedIn = false; // Replace with actual login state

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={isLoggedIn ? 'App' : 'Auth'}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
