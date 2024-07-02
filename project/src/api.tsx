import axios from "axios";

const baseUrl = 'https://dummyjson.com/'
export const config = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    data: {
        ip: '192.168.10.11'
    },
    headers: {
        apiKey: 'key123'
    },
    //auth: {username: '', password: ''}
})

