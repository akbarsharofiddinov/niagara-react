import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

interface getAllCategoriesResponse {
  status: boolean;
  message: string;
  data: ICategory[];
}

export const storeAPI = createApi({
  reducerPath: "storeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qrmenu.niagara-restaurant.uz/api",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => `/products`,
    }),

    getAllCategories: builder.query<getAllCategoriesResponse, void>({
      query: () => `/categories`,
    }),

    getCategory: builder.query<{ data: ICategory }, number>({
      query: (category_id) => `/categories/${category_id}`,
    }),

    getProductsByCategoryId: builder.query<{ data: IProduct[] }, number>({
      query: (category_id) => `/products/?category_id=${category_id}`,
    }),

    // Post Feedback

    postFeedback: builder.mutation<any, Feedback>({
      query: ({ rate, message }) => ({
        url: `/feedback/?rate=${rate}&message=${message}`,
        method: "POST"
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetCategoryQuery,
  useGetProductsByCategoryIdQuery,
  usePostFeedbackMutation,
} = storeAPI;
