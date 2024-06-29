import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../../constants';

interface IProps {
  placeHolder: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  errorMessage?: string;
  leftIcon?: string;
  rightIcon?: string;
  onPressRightIcon?: (event: GestureResponderEvent) => void;
  rightIconClickDisabled?: boolean;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  value: string;
}

const CommonInput: React.FC<IProps> = ({
  placeHolder,
  keyboardType = 'default',
  secureTextEntry = false,
  errorMessage = '',
  leftIcon = '',
  rightIcon = '',
  rightIconClickDisabled = false,
  onPressRightIcon,
  onChangeText,
  onBlur,
  value,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Icon name={leftIcon} size={moderateScale(30)} color={Colors.BLACK} />
        <TextInput
          placeholder={placeHolder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          style={styles.input}
        />
        {rightIcon !== '' && (
          <TouchableOpacity
            onPress={onPressRightIcon}
            disabled={rightIconClickDisabled}>
            <Icon
              name={rightIcon}
              size={moderateScale(30)}
              color={Colors.BLACK}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CommonInput;
