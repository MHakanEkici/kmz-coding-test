import {LoginDto, LoginResponse} from './types';
import axios from 'axios';
import Config from 'react-native-config';

function login(loginData: LoginDto) {
  return axios.post<LoginDto, LoginResponse>(
    `${Config.API_URL}/sf/auth/login`,
    loginData,
    {
      headers: {
        GUID: Config.GUID,
        'Content-Type': 'application/json',
      },
    },
  );
}

export const authService = {
  login,
};
export default authService;
