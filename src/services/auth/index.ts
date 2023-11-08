import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '@utility/axiosQuery/axiosBaseQuery';
import {LoginRequest} from './interface';
import {Response} from '@store/interfaces';
import {baseUrl} from '@utility/baseUrl';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({baseUrl: `${baseUrl}`}),
  endpoints: builder => ({
    login: builder.mutation<Response, LoginRequest>({
      query: credentials => ({
        url: '/auth/customer/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation<Response, void>({
      query: credentials => ({
        url: '/v2/auth/customer/register/otp',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});
export const {useLoginMutation, useSignUpMutation} = authApi;
