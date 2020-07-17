import React, { useEffect } from 'react';
import { ACCESS_TOKEN } from '../store/Contants';
import { Redirect, useLocation } from 'react-router-dom';


const OAuth2RedirectPage = () => {
  
  const location = useLocation();


  useEffect(() => {
    tokenCheck();
  },[])

  const tokenCheck = () => {
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');
    if(token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Redirect to={{
            pathname: "/profile",
            state: { from: location }
        }}/>; 
    } else {
        return <Redirect to={{
            pathname: "/auth/login",
            state: { 
                from: location,
                error: error 
            }
        }}/>; 
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