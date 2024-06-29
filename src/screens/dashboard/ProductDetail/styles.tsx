import {Dimensions, StyleSheet} from 'react-native';

//Third party libraries
import {moderateScale} from 'react-native-size-matters';

//Custom imports
import {Colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarContainer: {
    height: moderateScale(48),
    marginTop: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    width: Dimensions.get('window').width - moderateScale(24),
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    backgroundColor: Colors.EXTRA_LIGHT_GRAY,
  },
  searchBarSubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    marginHorizontal: moderateScale(4), // Adjust as needed for spacing between columns
    paddingVertical: moderateScale(8),
  },
  item: {
    height: moderateScale(24),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
    borderColor: Colors.GRAY,
    borderWidth: moderateScale(0.5),
    marginVertical: moderateScale(4), // Adjust as needed for spacing between items
    borderRadius: moderateScale(8),
  },
  fashionColumn: {
    width: '100%',
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 1,
  },
  fashionItem: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: moderateScale(8),
    marginVertical: moderateScale(4), // Adjust as needed for spacing between items
  },
  ratingContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(16),
  },
  productDetailContainer: {
    width: '100%',
    //marginHorizontal: moderateScale(16),
    marginTop: moderateScale(8),
    marginBottom: moderateScale(100),
  },
  imageStyle: {
    height: moderateScale(250),
    width: '100%',
  },
  categoryImage: {
    height: moderateScale(72),
    width: moderateScale(72),
    borderRadius: moderateScale(8),
  },
  categoryImageContainer: {
    height: moderateScale(96),
    width: moderateScale(96),
    backgroundColor: Colors.LIGHT_MAROON,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
  categoryLabel: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.BLACK,
  },
  fashionCategoryImage: {
    borderRadius: moderateScale(8),
    height: moderateScale(250),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Colors.GRAY,
    paddingBottom: moderateScale(260),
    marginTop: moderateScale(24),
  },
  fashionCategoryImageContainer: {
    // height: moderateScale(128),
    // width: moderateScale(128),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
  fashionCategoryLabel: {
    fontSize: moderateScale(14),
    width: '90%',
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.BLACK,
    marginTop: moderateScale(4),
    marginHorizontal: moderateScale(16),
  },
  fashionCategoryDescription: {
    fontSize: moderateScale(14),
    width: '90%',
    fontWeight: 'normal',
    textAlign: 'left',
    color: Colors.BLACK,
    marginTop: moderateScale(4),
    marginHorizontal: moderateScale(16),
  },
  categoryMainHeading: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginStart: moderateScale(12),
    textAlign: 'left',
    color: Colors.GRAY,
    marginTop: moderateScale(8),
  },
  placeholder: {
    fontSize: moderateScale(16),
    fontWeight: 'normal',
    marginStart: moderateScale(12),
    textAlign: 'left',
    color: Colors.GRAY,
    marginTop: moderateScale(8),
  },
});