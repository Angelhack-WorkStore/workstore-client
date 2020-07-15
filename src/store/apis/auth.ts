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
// const request = (options:OptionType) => {
//   const headers = new Headers({
//       'Content-Type': 'application/json',
//   })
  
//   if(localStorage.getItem(ACCESS_TOKEN)) {
//       headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
//   }

//   const defaults = {headers: headers};
//   options = Object.assign({}, defaults, options);

//   console.log(options);
//   return http({
//     method:'post',
//     url:options.url,
//     body:options.body
//   })
//   .then(response => {
//     response.data
//   })
//   .catch((error:Error) => {
//     console.log(error);
//   })
// };

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
  return http.post('/auth/signup', {options})
}

export const logoutAPI = () => {

}



export const getCurrentUserAPI = async() => {
  const userInfo = await http.get('/user/me')
  console.log(userInfo);
}