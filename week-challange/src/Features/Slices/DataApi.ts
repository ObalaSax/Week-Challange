import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductData {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  price: number;
  rating: number;
  discountPercentage: number;
}

export const myBaseUrl = "https://dummyjson.com/";
export const DataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: myBaseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getOneProduct: builder.query({
      query: () => `/products/id`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetOneProductQuery } = DataApi;
