/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { AxiosRequestHeaders } from 'axios';

export declare namespace API {
  export type BaseResponse = {
    httpStatus: 200;
    created_at: string;
  };
  export type TResponse = { value: string };
}

export interface AxiosBaseQueryArgs<Meta, Response = API.BaseResponse> {
  meta?: Meta;
  prepareHeaders?: (headers: AxiosRequestHeaders, api: BaseQueryApi) => AxiosRequestHeaders;
  transformResponse?: (response: Response) => unknown;
}

export interface ServiceExtraOptions {
  authRequired?: boolean;
}

export interface ErrorFormObject {
  [key: string | number]: string | ErrorFormObject | ErrorFormObject[];
}

export interface EntityError {
  status: 422;
  data: {
    error: ErrorFormObject;
  };
}
