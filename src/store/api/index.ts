import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductsModel, IReviewModel } from '../../../src/utils/index'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '' 
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsModel[], void>({
        query: () => 'https://fakestoreapi.com/products',
    }),
    getReviews: builder.query<IReviewModel, void>({
        query: () => 'https://dummyjson.com/comments?limit=6',
    }),
    }),
})

export const { useLazyGetProductsQuery, useLazyGetReviewsQuery } = productsApi