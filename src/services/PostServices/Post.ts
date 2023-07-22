// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface IPost {
    "userId": number;
    "id": number;
    "title": string;
    "body" : string;
}


// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], void>({
      query: () => `/`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPostQuery } = postApi
