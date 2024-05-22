import { configureStore } from '@reduxjs/toolkit';

import { todosAPI, usersAPI } from '../redux';

export const store = configureStore({
  reducer: {
    [todosAPI.reducerPath]: todosAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosAPI.middleware, usersAPI.middleware),
});
