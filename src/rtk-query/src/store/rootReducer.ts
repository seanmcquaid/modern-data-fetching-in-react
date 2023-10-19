import { combineReducers } from "@reduxjs/toolkit";
import postsApi from "./postsApi";
import postsSlice from "./posts/slice";

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  [postsSlice.name]: postsSlice.reducer,
});

export default rootReducer;
