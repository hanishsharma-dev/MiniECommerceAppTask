import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchFromApi} from '../../../config/api/apiClient';

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchFromApi<string[]>('/products');
    return response;
  },
);

// You can add more thunks for other endpoints here
