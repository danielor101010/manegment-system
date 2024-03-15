import User from "../types/userType";
import axios, {AxiosInstance} from "axios";



const API: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
});


export const getUsers = async (): Promise<User[]> => {
  const {data} = await API.get("/users")
  return data
}

