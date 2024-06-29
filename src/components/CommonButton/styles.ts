import {StyleSheet} from 'react-native';

//Third party libraries
import {moderateScale} from 'react-native-size-matters';

//Custom imports
import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: moderateScale(24),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(32),
    backgroundColor: Colors.BLACK,
    borderRadius: moderateScale(8),
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    textAlign: 'center',
    color: Colors.WHITE,
  },
});
