import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchFromApi} from '../../../config/api/apiClient';

export const fetchCategoriesProductAsync = createAsyncThunk(
  'categoryProducts/fetchCategoriesproducts',
  async (categoryName?: string) => {
    const endpoint = `/products/category/${categoryName}`;
    const response = await fetchFromApi<string[]>(endpoint);
    console.log('response: ', response);
    return response;
  },
);
