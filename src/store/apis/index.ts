import axios from 'axios';

const baseURL = (() => {
    return "http://localhost:8082/api"
})

export const http = axios.create({
    baseURL: baseURL(),
})

