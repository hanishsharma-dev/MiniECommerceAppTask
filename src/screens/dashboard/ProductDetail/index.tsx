import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {RootStackParamList} from '../../../navigation/navigationTypes';
import {styles} from './styles';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {Colors} from '../../../constants';
import {RootState, AppDispatch} from '../../../redux/store';
import {CommonButton} from '../../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCartAsync} from '../../../redux/features/cart/cartThunks';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetail: React.FC<Props> = ({route, navigation}) => {
  const {data} = route.params;
  const [productDetail] = useState(data);
  const dispatch: AppDispatch = useDispatch();
  const {cartItemsList, loading, error} = useSelector(
    (state: RootState) => state.cartItemsList,
  );

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = cartItemsList.some(
      (item: any) => item.id === productDetail.id,
    );
    setIsInCart(isProductInCart);
  }, [cartItemsList, productDetail.id]);

  const addToCart = () => {
    if (!isInCart) {
      dispatch(
        fetchCartAsync({
          cart: cartItemsList,
          productDetail: productDetail,
          action: 'add',
        }),
      );
    } else {
      navigation.navigate('Cart');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.fashionCategoryImage}
          imageStyle={styles.imageStyle}
          source={{
            uri: productDetail.image,
          }}
          resizeMode="contain"
        />
        <View style={styles.productDetailContainer}>
          <Text
            style={styles.fashionCategoryLabel}
            numberOfLines={1}
            ellipsizeMode="tail">
            {`₹${productDetail.price}`}
          </Text>
          <Text
            style={styles.fashionCategoryLabel}
            numberOfLines={2}
            ellipsizeMode="tail">
            {productDetail.title}
          </Text>
          <View style={styles.ratingContainer}>
            <StarRatingDisplay
              rating={productDetail.rating.rate}
              starSize={20}
              color={Colors.TAB_COLOR}
            />
            <Text style={[styles.fashionCategoryLabel, { marginTop: 0 }]}>
              {`(${productDetail.rating.count})`}
            </Text>
          </View>
          <CommonButton
            label={isInCart ? 'Go to cart' : 'Add to cart'}
            onPress={addToCart}
          />
          <Text
            style={[styles.fashionCategoryDescription, { fontWeight: 'bold' }]}>
            {'Product Description:'}
          </Text>
          <Text style={styles.fashionCategoryDescription}>
            {productDetail.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
