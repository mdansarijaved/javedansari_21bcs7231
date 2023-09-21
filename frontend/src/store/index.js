import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './posts'
import userReducer from './user'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})