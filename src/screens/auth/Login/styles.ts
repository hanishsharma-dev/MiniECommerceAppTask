import {StyleSheet} from 'react-native';

//Third party libraries
import {moderateScale} from 'react-native-size-matters';

//Custom imports
import {Colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
  },
  consent: {
    bottom: moderateScale(80),
  },
  mainLogo: {
    height: moderateScale(300),
    width: moderateScale(300),
    alignSelf: 'center',
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: moderateScale(26),
    textAlign: 'center',
    color: Colors.BLACK,
  },
  forgotPassword: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: Colors.BLACK,
    marginHorizontal: moderateScale(24),
  },
  doNotHaveAccount: {
    fontWeight: 'normal',
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: Colors.BLACK,
    marginHorizontal: moderateScale(24),
  },
  createNew: {
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: Colors.BLACK,
    textDecorationLine: 'underline',
  },
});
