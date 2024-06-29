import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const fetchFromApi = async <T>(endpoint: string): Promise<T> => {
  const response = await apiClient.get<T>(endpoint);
  return response.data;
};
