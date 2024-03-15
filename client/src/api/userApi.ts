import { LoginData } from "../pages/login/types";
import User from "../types/userType";
import axios, {AxiosInstance} from "axios";



const API: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
});


export const getUsers = async (): Promise<User[]> => {
  const {data} = await API.get("/users")
  return data
}

export const register = async (user: User): Promise<User> => {
    const {data} = await API.post("/user", user)
    return data
  }

  export const login = async (user: LoginData): Promise<User> => {
    const {data} = await API.post("/login", user)
    return data
  }


