import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Post from "../../types/Post";

// ADD KEYS LATER
const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postsApi;

export default postsApi;
