// import {SerializedError} from '@reduxjs/toolkit';
// import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {AxiosError} from 'axios';

export type LoginResponse = {
  data?: UserData;
  error?: AxiosError;
};

export type UserData = {
  status: boolean;
  data: {
    token: string;
    refreshToken: string;
    expiration: string;
    status: boolean;
  };
};

export type LoginDto = {
  username: string;
  password: string;
};
