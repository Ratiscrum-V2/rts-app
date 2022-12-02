import axios from "axios";
import { LoginResponse } from "../models/login-response";
import { RegisterResponse } from "../models/register-response";

const TOKEN_KEY = "SEX_TOKEN";

export const loginRequest = (email: string, password: string) => axios.post<LoginResponse>('login', {
    email,
    password,
})

export const registerRequest = (email: string, password: string, nickname: string) => axios.post<RegisterResponse>('register', {
    email,
    password,
    nickname,
})

export const checkUser = () => axios.post

export const setLocalStorageToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
}
export const getLocalStorageToken = () => localStorage.getItem(TOKEN_KEY);
export const deleteLocalStorageToken = () => localStorage.removeItem(TOKEN_KEY);