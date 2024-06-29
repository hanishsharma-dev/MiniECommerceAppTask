import {Alert} from 'react-native';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCartAsync = createAsyncThunk(
  'cart/fetchCart',
  async (data: any) => {
    console.log('Received data:', data);

    if (!data.cart || !data.productDetail) {
      console.error('Invalid data structure:', data);
      throw new Error('Invalid data structure');
    }

    console.log('Initial cart:', data.cart);
    console.log('Product detail to add:', data.productDetail);

    let tempCart: any = [...data.cart];
    const existingItemIndex = tempCart.findIndex(
      (item: any) => item.id === data.productDetail.id,
    );

    if (data.action === 'add') {
      if (existingItemIndex !== -1) {
        Alert.alert('Item already in the cart');
      } else {
        tempCart.push(data.productDetail);
        console.log('Added new item to the cart');
      }
    } else if (data.action === 'delete') {
      if (existingItemIndex !== -1) {
        tempCart = tempCart.filter(
          (item: any) => item.id !== data.productDetail.id,
        );
        console.log('Deleted item from the cart');
      } else {
        Alert.alert('Item not found in the cart');
      }
    } else {
      console.error('Unsupported action:', data.action);
      throw new Error('Unsupported action');
    }

    console.log('Updated tempCart:', tempCart);
    return tempCart;
  },
);
