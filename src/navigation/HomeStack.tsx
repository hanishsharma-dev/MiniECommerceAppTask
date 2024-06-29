import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigationTypes';
import {Cart, Home, ProductDetail} from '../screens';
import {Colors} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Dimensions, Platform} from 'react-native';

const HomeStack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC = () => {
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;

  const headerHeight =
    aspectRatio < 1.9 || Platform.OS === 'android'
      ? moderateScale(56)
      : moderateScale(96);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: Colors.WHITE,
        headerTitleStyle: {
          fontSize: moderateScale(18),
        },
        headerStyle: {
          backgroundColor: Colors.BLACK,
          height: headerHeight,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerLeft: null}}
      />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerBackTitleVisible: false}}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={{headerBackTitleVisible: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
