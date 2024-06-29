import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchFromApi} from '../../../config/api/apiClient';

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetchFromApi<string[]>('/products/categories');
    return response;
  },
);

// You can add more thunks for other endpoints here
