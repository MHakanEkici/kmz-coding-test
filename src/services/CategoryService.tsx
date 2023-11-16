import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {CategoryResponse} from './types';

export const categoryService = createApi({
  reducerPath: 'categoryService',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: builder => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => ({
        url: '/ad/product/categories',
        method: 'GET',
        headers: {
          GUID: Config.GUID,
        },
      }),
    }),
    getSubCategories: builder.query<CategoryResponse, number>({
      query: categoryId => ({
        url: `/ad/product/categories?parentId=${categoryId}`,
        method: 'GET',
        headers: {
          GUID: Config.GUID,
        },
      }),
    }),
  }),
});

export const {useGetCategoriesQuery, useGetSubCategoriesQuery} =
  categoryService;
