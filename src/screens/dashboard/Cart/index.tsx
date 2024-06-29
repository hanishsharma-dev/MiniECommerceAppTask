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
import { CommonButton } from '../../../components';
import { fetchCartAsync } from '../../../redux/features/cart/cartThunks';

type Props = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const Cart: React.FC<Props> = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();
  const {cartItemsList, loading, error} = useSelector(
    (state: RootState) => state.cartItemsList,
  );

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [productsListing, setProductsListing] = useState(cartItemsList);

  useEffect(() => {
    calculateTotalPrice();
  });

  useEffect(() => {
    if (cartItemsList) {
      setProductsListing(cartItemsList);
    }
  }, [cartItemsList]);

  const calculateTotalPrice = () => {
    let finalPrice: number = 0;

    // Iterate through each product and sum up the prices
    cartItemsList.forEach(product => {
      finalPrice += product?.price;
    });
    setTotalPrice(finalPrice);
  };

  const deleteCartItem = (item: any) => {
    dispatch(
      fetchCartAsync({
        cart: cartItemsList,
        productDetail: item,
        action: 'delete',
      }),
    );
  }

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable onPress={()=>deleteCartItem(item)}>
          <Icon
            name={'delete'}
            size={moderateScale(24)}
            color={Colors.TAB_COLOR}
          />
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          marginTop: moderateScale(0),
          marginHorizontal: moderateScale(16),
          flex: 0.8,
        }}
        data={cartItemsList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderFationCategoryListItem}
      />
      <View style={{flex: 0.2}}>
        <CommonButton
          label={
            cartItemsList.length === 0 ? 'Back' : `Checkout ₹${totalPrice}`
          }
          onPress={() =>
            cartItemsList.length === 0
              ? navigation.goBack()
              : console.log('Coming Soon')
          }
        />
      </View>
    </View>
  );
};

export default Cart;
