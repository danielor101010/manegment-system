import {useMutation, UseMutationResult, useQuery, UseQueryResult} from 'react-query';
import {AxiosError} from "axios";
import * as userAPI from "../../api/userApi"
import User from '../../types/userType';
import { LoginData } from '../../pages/login/types';


export const useGetUsers = (): UseQueryResult<User[], AxiosError> => {
    return useQuery(['users'], userAPI.getUsers);
  }

export const useRegister = (): UseMutationResult<User, AxiosError, User> => {
    return useMutation(['register'], userAPI.register);
  }

  export const useLogin = (): UseMutationResult<User, AxiosError, LoginData> => {
    return useMutation(['login'], userAPI.login);
  };