import axios from 'axios';

const baseURL = (() => {
    return "http://localhost:8080/api"
})

export const http = axios.create({
    baseURL: baseURL(),
})

