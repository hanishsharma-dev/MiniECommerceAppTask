import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {
  LocalImagesPath,
  PlaceholderConstants,
  TitleConstants,
} from '../../../constants';
import {styles} from './styles';
import CommonButton from '../../../components/CommonButton';
import CommonInput from '../../../components/CommonInput';
import {RootStackParamList} from '../../../navigation/navigationTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({navigation}) => {
  const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);

  const togglePasswordInputRightIcon = () => {
    setIsPasswordHide(!isPasswordHide);
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const handleLogin = (values: {email: string; password: string}) => {
    // Handle login logic here
    console.log(values);
    // Navigate to the App stack after successful login
    navigation.navigate('App');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      contentInset={styles.consent}>
      <View>
        <Image style={styles.mainLogo} source={LocalImagesPath.mainLogo} />
        <Text style={styles.welcome}>{TitleConstants.WELCOME}</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <CommonInput
                placeHolder={PlaceholderConstants.ENTER_EMAIL}
                keyboardType="email-address"
                leftIcon="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                errorMessage={touched.email && errors.email ? errors.email : ''}
              />
              <CommonInput
                placeHolder={PlaceholderConstants.ENTER_PASSWORD}
                secureTextEntry={isPasswordHide}
                leftIcon="lock"
                rightIcon={isPasswordHide ? 'eye-off' : 'eye'}
                rightIconClickDisabled={false}
                onPressRightIcon={togglePasswordInputRightIcon}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errorMessage={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <Text style={styles.forgotPassword}>
                {TitleConstants.FORGOT_PASSWORD}
              </Text>
              <CommonButton
                label={TitleConstants.LOGIN}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
        <Text style={styles.doNotHaveAccount}>
          {TitleConstants.DO_NOT_HAVE_AN_ACCOUNT}
          <Text
            style={styles.createNew}
            onPress={() => navigation.navigate('Register')}>
            {TitleConstants.CREATE_NEW}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
