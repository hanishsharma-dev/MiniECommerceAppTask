import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {RootState, AppDispatch} from '../../../redux/store';
import {fetchCategoriesAsync} from '../../../redux/features/categories/categoriesThunks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/navigationTypes';
import {fetchProductsAsync} from '../../../redux/features/products/productsThunks';
import {fetchCategoriesProductAsync} from '../../../redux/features/categoriesProduct/categoriesProductThunks';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<Props> = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();
  const {categories, loading, error} = useSelector(
    (state: RootState) => state.categories,
  );
  const {categoryProducts} = useSelector(
    (state: RootState) => state.categoryProducts,
  );
  const {products} = useSelector((state: RootState) => state.products);
  const [productsListing, setProductsListing] = useState(products);
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    setProductsListing(products);
  }, [products]);

  useEffect(() => {
    if (categoryProducts) {
      setProductsListing(categoryProducts);
    }
  }, [categoryProducts]);

  const selectFetchCategotyProducts = (categoryName: string) => {
    dispatch(fetchCategoriesProductAsync(categoryName));
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const renderCategoryListItem = ({item, index}) => (
    <Pressable
      style={styles.column}
      onPress={() => selectFetchCategotyProducts(item)}>
      <View key={index} style={styles.item}>
        <Text style={styles.categoryLabel}>{item}</Text>
      </View>
    </Pressable>
  );

  const renderFationCategoryListItem = ({item, index}) => (
    <Pressable
      style={styles.fashionColumn}
      onPress={() => navigation.navigate('ProductDetail', {data: item})}>
      <View key={index} style={styles.fashionItem}>
        <ImageBackground
          style={styles.fashionCategoryImage}
          imageStyle={styles.imageStyle}
          source={{uri: item.image}}
          resizeMode="contain"
        />
        <View style={styles.productDetailContainer}>
          <Text
            style={styles.fashionCategoryLabel}
            numberOfLines={1}
            ellipsizeMode="tail">
            {`₹${item.price}`}
          </Text>
          <Text
            style={styles.fashionCategoryLabel}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.title}
          </Text>
          <View style={styles.ratingContainer}>
            <StarRatingDisplay
              rating={item.rating.rate}
              starSize={20}
              color={Colors.TAB_COLOR}
            />
            <Text style={[styles.fashionCategoryLabel, {marginTop: 0}]}>
              {`(${item.rating.count})`}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryMainHeading}>{'Categories'}</Text>
      <FlatList
        style={{flexGrow: 0, marginHorizontal: moderateScale(8)}}
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderCategoryListItem}
      />
      <FlatList
        style={{
          marginTop: moderateScale(0),
          marginHorizontal: moderateScale(16),
        }}
        data={productsListing}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderFationCategoryListItem}
      />
    </View>
  );
};

export default Home;
