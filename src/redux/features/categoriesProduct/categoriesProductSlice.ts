import {createSlice} from '@reduxjs/toolkit';
import {fetchCategoriesProductAsync} from './categoriesProductThunks';

interface CategoryProductsState {
  categoryProducts: string[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryProductsState = {
  categoryProducts: [],
  loading: false,
  error: null,
};

const categoriesProductSlice = createSlice({
  name: 'categoryProducts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategoriesProductAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesProductAsync.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategoriesProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default categoriesProductSlice.reducer;
