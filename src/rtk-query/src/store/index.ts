import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import postsApi from "./postsApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
