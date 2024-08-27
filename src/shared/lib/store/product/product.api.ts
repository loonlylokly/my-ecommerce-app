import { API_ROUTES } from "@/shared/lib/constants/common";
import { Filter, Product } from "@/shared/lib/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({baseUrl: API_ROUTES.products}),
  endpoints: (build) => ({
    getProducts: build.query<Product[], Filter>({
      query: ({limit='10', page='1', sort, search}) => {
        const params = new URLSearchParams({limit, page, sort, search}).toString();
        return `?${params}`;
      },
    })
  })
})

export const { useGetProductsQuery } = productApi;