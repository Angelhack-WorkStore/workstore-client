import {http} from '.';
import {useHistory} from 'react-router-dom';
const ACCESS_TOKEN = 'accessToken';


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
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  if(localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  }

  const defaults = {headers: headers};
  const options = Object.assign({}, defaults, loginRequest);
  console.log(options);
  return http.post('/auth/login', {options})
}

export const signupAPI = async(signupRequest:SignupProps) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  if(localStorage.getItem(ACCESS_TOKEN)) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  }
  const defaults = {headers: headers};
  const options = Object.assign({}, defaults, signupRequest);
  console.log(options);
  console.log(signupRequest);
  return http.post('/auth/signup', {
    email:signupRequest.email,
    password:signupRequest.password,
    name:signupRequest.name,
  })
}

export const logoutAPI = () => {

}



export const getCurrentUserAPI = async() => {
  const userInfo = await http.get('/user/me')
  console.log(userInfo);
}