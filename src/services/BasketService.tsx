import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {AddBasketDto, AddBasketResponse, GetBasketResponse} from './types';

export const basketService = createApi({
  reducerPath: 'basketService',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: builder => ({
    addToBasket: builder.mutation<AddBasketResponse, AddBasketDto>({
      query: basketItem => ({
        url: '/sf/cart/cart',
        method: 'POST',
        headers: {
          GUID: Config.GUID,
        },
        body: basketItem,
      }),
      invalidatesTags: () => ['Basket'],
    }),
    getBasket: builder.query<GetBasketResponse, number>({
      query: userId => ({
        url: `/sf/cart/cart?userId=${userId}`,
        method: 'GET',
        headers: {
          GUID: Config.GUID,
        },
      }),
      providesTags: () => ['Basket'],
    }),
  }),
  tagTypes: ['Basket'],
});

export const {useAddToBasketMutation, useGetBasketQuery} = basketService;
