import React, { useEffect } from 'react';
import { ACCESS_TOKEN } from '../store/Contants';
import { Redirect, useLocation,useHistory } from 'react-router-dom';


const OAuth2RedirectPage = () => {
  
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  },[])

  const tokenCheck = () => {
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');
    if(token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return history.push('/'); 
    } else {
        return history.push('/auth/login');
    }
  }

  const getUrlParameter = (name:string) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

    
  return (
    <>
    </>
  )
}

export default OAuth2RedirectPage;