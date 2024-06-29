import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, LocalImagesPath} from '../../constants';

interface IProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTabbar: React.FC<IProps> = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: moderateScale(64),
        paddingBottom: Platform.OS === 'ios' ? moderateScale(8) : 0,
      }}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name={LocalImagesPath.bottomTabsImages[index]}
                size={moderateScale(24)}
                color={isFocused ? Colors.TAB_COLOR : Colors.BLACK}
              />
              <Text
                style={{
                  color: isFocused ? Colors.TAB_COLOR : Colors.BLACK,
                  fontWeight: 'bold',
                  fontSize: moderateScale(14),
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabbar;
