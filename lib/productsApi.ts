import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import IProduct from '../interfaces/Product/IProduct';
export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_HOST}api/v1/products`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getProductById: builder.query<IProduct, string>({
      query: (id) => `/${id}`,
    }),
    getProductList: builder.query<Array<IProduct>, null>({ query: () => `/` }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductListQuery,
  util: { getRunningOperationPromises },
} = productsApi;

export const { getProductById, getProductList } = productsApi.endpoints;
