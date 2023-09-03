import {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {AxiosRequestConfig, AxiosError} from 'axios';
import {store} from '../../store';
import {setCredential} from '../../store/auth';

export const axiosBaseQuery =
  ({
    baseUrl = '',
    baseHeaders = {},
  }: {
    baseUrl: string;
    baseHeaders?: AxiosRequestConfig['headers'];
  }): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      body?: AxiosRequestConfig['data'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({url, method = 'GET', body, headers = {}}) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data: body,
        headers: {...baseHeaders, ...headers},
      });

      return {data: result.data};
    } catch (axiosError) {
      console.log(axiosError, 'this is the axios erro ooooo');
      let err = axiosError as AxiosError;

      if (err) {
        // console.log(err.response, 'another errorr');
        if (err.response?.status === 401) {
          store.dispatch(setCredential({}));
        }
        return {
          error: {data: err.response?.data},
        };
      }
    }
  };
