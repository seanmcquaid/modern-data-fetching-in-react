import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Post from "../../types/Post";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: result =>
        result
          ? result.map(({ id }) => ({ type: 'Posts', id }))
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postsApi;

export default postsApi;
