import { createSlice } from "@reduxjs/toolkit";
import Post from "../../types/Post";
import postsApi from "../postsApi";

interface PostsSlice {
    posts: Post[];
}

const initialState: PostsSlice = {
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
            state.posts = action.payload;
        });
    }
})

export default postsSlice