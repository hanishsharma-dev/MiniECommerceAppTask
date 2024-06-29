import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../constants';
import HomeStackNavigator from './HomeStack';
import {Favorites, Profile, Settings} from '../screens';
import CustomTabbar from '../components/CustomTabbar';
import {Dimensions, Platform} from 'react-native';
import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {RootStackParamList} from './navigationTypes';

const Tab = createBottomTabNavigator<RootStackParamList>();

const DashboardNavigator: React.FC = () => {
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;

  const headerHeight =
    aspectRatio < 1.9 || Platform.OS === 'android'
      ? moderateScale(56)
      : moderateScale(96);

  const getTabBarVisibility = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    if (routeName === 'ProductDetail') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
        headerTitleAlign: 'center',
        headerTintColor: Colors.WHITE,
        headerTitleStyle: {
          fontSize: moderateScale(18),
        },
        headerStyle: {
          backgroundColor: Colors.BLACK,
          height: headerHeight,
        },
      })}
      tabBar={props => <CustomTabbar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
