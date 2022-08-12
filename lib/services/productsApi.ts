import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import {
  IAllProductsResponse,
  IProduct,
  IProductResponse,
} from '../../interfaces/Product/IProduct';
import {
  IAllReviewsResponse,
  IReview,
} from '../../interfaces/Reviews/IReviews';

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_HOST}api/v1/products`,
    // baseUrl: `http://localhost:5000/api/v1/products`,
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Product', 'Reviews'],
  endpoints: (builder) => ({
    getProductList: builder.query<IProduct[], null>({
      query: () => `/`,
      transformResponse: (response, meta, arg) =>
        (response as IAllProductsResponse).data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Product' as const,
                _id,
              })),
              'Product',
            ]
          : ['Product'],
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => `/${id}`,
      transformResponse: (response, meta, error) =>
        (response as IProductResponse).data,
      providesTags: ['Product'],
    }),
    getProductReviews: builder.query<IReview[], string>({
      query: (productId) => `/${productId}/reviews`,
      transformResponse: (response, meta, arg) =>
        (response as IAllReviewsResponse).data,
      providesTags: ['Reviews'],
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductListQuery,
  useGetProductReviewsQuery,
  util: { getRunningOperationPromises },
} = productsApi;

export const { getProductById, getProductList } = productsApi.endpoints;
