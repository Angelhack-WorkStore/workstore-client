import axios from 'axios';
import {ACCESS_TOKEN,API_BASE_URL} from '../Contants';

const baseURL = (() => {
    return "http://localhost:8082/api"
})

export const request = (options:any) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }
  
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
  
    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
  };

export const http = axios.create({
    baseURL: baseURL(),
})

