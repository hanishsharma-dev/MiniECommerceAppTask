import {StyleSheet} from 'react-native';

//Third party libraries
import {moderateScale} from 'react-native-size-matters';

//Custom imports
import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: moderateScale(8),
    marginHorizontal: moderateScale(24),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: moderateScale(1),
    borderColor: Colors.BLACK,
  },
  errorMessage: {
    fontWeight: 'normal',
    fontSize: moderateScale(12),
    textAlign: 'left',
    color: Colors.RED,
    width: '80%',
    marginTop: moderateScale(8),
  },
  input: {
    color: Colors.BLACK,
    fontSize: moderateScale(14),
    fontWeight: 'normal',
    textAlign: 'left',
    width: '80%',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(8),
  },
});
