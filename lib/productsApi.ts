import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import IProduct from '../interfaces/Product/IProduct';

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_HOST}api/v1/products`,
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getProductList: builder.query<{ data: Array<IProduct> }, null>({
      query: () => `/`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Post' as const,
                _id,
              })),
              'Post',
            ]
          : ['Post'],
    }),
    getProductById: builder.query<{ data: IProduct }, string>({
      query: (id) => `/${id}`,
      providesTags: ['Post'],
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductListQuery,
  util: { getRunningOperationPromises },
} = productsApi;

export const { getProductById, getProductList } = productsApi.endpoints;
