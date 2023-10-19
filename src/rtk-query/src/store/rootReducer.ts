import { combineReducers } from "@reduxjs/toolkit";
import postsApi from "./postsApi";

const rootReducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
});

export default rootReducer;