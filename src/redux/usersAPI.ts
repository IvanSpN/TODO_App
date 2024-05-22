import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://9659ac4aba907941.mokky.dev' }),
  endpoints: (builder) => ({
    registrationUser: builder.mutation({
      query: (newUser) => ({
        url: `/register`,
        method: 'POST',
        body: newUser,
      }),
    }),
    authUser: builder.mutation({
      query: (userData) => ({
        url: `/auth`,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegistrationUserMutation, useAuthUserMutation } = usersAPI;
