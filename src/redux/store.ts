import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer from '../redux/features/categories/categoriesSlice';
import productsReducer from '../redux/features/products/productsSlice';
import categoryProductsReducer from '../redux/features/categoriesProduct/categoriesProductSlice';
import cartReducer from '../redux/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    categoryProducts: categoryProductsReducer,
    cartItemsList: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
