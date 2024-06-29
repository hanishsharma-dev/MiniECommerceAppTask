import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

import {PlaceholderConstants, TitleConstants} from '../../../constants';
import {styles} from './styles';
import {CommonButton, CommonInput} from '../../../components';
import {AuthStackParamList} from '../../../navigation/navigationTypes';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const Register: React.FC<Props> = ({navigation}) => {
  const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);

  const togglePasswordInputRightIcon = () => {
    setIsPasswordHide(!isPasswordHide);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      contentInset={styles.consent}>
      <View>
        <View>
          <CommonInput
            placeHolder={PlaceholderConstants.ENTER_FULL_NAME}
            keyboardType={'default'}
            leftIcon="account"
          />
          <CommonInput
            placeHolder={PlaceholderConstants.ENTER_EMAIL}
            keyboardType={'email-address'}
            leftIcon="email"
          />
          <CommonInput
            placeHolder={PlaceholderConstants.CHOOSE_PASSWORD}
            secureTextEntry={isPasswordHide}
            leftIcon="lock"
            rightIcon={isPasswordHide ? 'eye-off' : 'eye'}
            rightIconClickDisabled={false}
            onPressRightIcon={() => togglePasswordInputRightIcon()}
          />
          <CommonInput
            placeHolder={PlaceholderConstants.CONFIRM_PASSWORD}
            secureTextEntry={isPasswordHide}
            leftIcon="lock"
            rightIcon={isPasswordHide ? 'eye-off' : 'eye'}
            rightIconClickDisabled={false}
            onPressRightIcon={() => togglePasswordInputRightIcon()}
          />
          <CommonButton label={TitleConstants.REGISTER} />
        </View>
        <Text style={styles.doNotHaveAccount}>
          {TitleConstants.ALREADY_HAVE_AN_ACCOUNT}
          <Text
            style={styles.createNew}
            onPress={() => navigation.navigate('Login')}>
            {TitleConstants.LOGIN_HERE}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;
