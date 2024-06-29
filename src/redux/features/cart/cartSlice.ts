import {createSlice} from '@reduxjs/toolkit';
import {fetchCartAsync} from './cartThunks';

interface CartState {
  cartItemsList: string[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartItemsList: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCartAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.cartItemsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default cartSlice.reducer;
