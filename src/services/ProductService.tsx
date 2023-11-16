import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {ProductResponse} from './types';

export const productService = createApi({
  reducerPath: 'productService',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: builder => ({
    getProductsByCategory: builder.query<ProductResponse, number>({
      query: categoryId => ({
        url: `/sf/product/category_products?Id=${categoryId}`,
        method: 'GET',
        headers: {
          GUID: Config.GUID,
        },
      }),
    }),
  }),
});

export const {useGetProductsByCategoryQuery} = productService;
