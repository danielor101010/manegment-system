import {useMutation, UseMutationResult, useQuery, UseQueryResult} from 'react-query';
import {AxiosError} from "axios";
import * as userAPI from "../../api/userApi"
import User from '../../types/userType';


export const useGetUsers = (): UseQueryResult<User[], AxiosError> => {
    return useQuery(['users'], userAPI.getUsers);
  }