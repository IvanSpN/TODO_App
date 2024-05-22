import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosAPI = createApi({
  reducerPath: 'todosAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://9659ac4aba907941.mokky.dev' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/todos`,
    }),
    authMe: builder.query({
      query: (token) => ({
        url: `/todos`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAuthMeQuery } = todosAPI;
