import { useNavigate } from "react-router-dom";
import { config } from "../api";
import { ICustomer } from "../models/ICustomer";

// login
export const login = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<ICustomer>('auth/login', sendObj)
}

// login
export const useLogin = () => {
    const navigate = useNavigate()
    const login = (username: string, password: string) => {
        const sendObj = {
            username: username,
            password: password
        }
        return config.post<ICustomer>('auth/login', sendObj).catch(err => {
            navigate('/dashboard')
        })
    }
    return {
        login
    }
}