import {http, request} from '.';
import {ACCESS_TOKEN,API_BASE_URL} from '../Contants';

type LoginProps = {
  email:string,
  password: string
}

type SignupProps = {
  email:string,
  password:string,
  name:string,
}

type OptionType = {
  url:string,
  body:any,
}



export const loginAPI = async(loginRequest:LoginProps) => {
  return request({
    url: API_BASE_URL + "/auth/login",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}

export const signupAPI = async(signupRequest:SignupProps) => {
  return request({
    url: API_BASE_URL + "/auth/signup",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
}

export const logoutAPI = () => {

}



export const getCurrentUserAPI = async():Promise<any> => {
  if(!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url:API_BASE_URL + "/admin/accounts",
    method:'GET'
  })
}