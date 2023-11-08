/* eslint-disable @typescript-eslint/no-unused-vars */
import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {axiosBaseQuery} from '@utility/axiosQuery/axiosBaseQuery';
import {Response} from '@store/interfaces';
import {RequestEstimate} from './interfaces';
import {baseUrl} from '@utility/baseUrl';

export const washListApi = createApi({
  reducerPath: 'washListApi',
  baseQuery: axiosBaseQuery({baseUrl: `${baseUrl}/orders`}),
  endpoints: builder => ({
    getOngoingOrder: builder.query<Response, void>({
      query: () => ({
        url: '/?status=ongoing',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetOngoingOrderQuery} = washListApi;
