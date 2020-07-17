import React,{useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {globalTheme} from './styles/GlobalTheme';
import Header from './containers/Header/HeaderContainer';
import {MainPage,LoginPage,SignupPage,SpaceInfoPage,RegistrationPage,OAuth2RedirectPage} from './pages';
import {getCurrentUserAPI} from './store/apis/auth';
import {getCurrentUser} from './store/modules/authentication';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUserAPI()
    .then((res) => {
      const {email, nickname, imageUrl} = res;
      dispatch(getCurrentUser(email,nickname, imageUrl));
    })
    .catch((err:Error) => {
      console.log(err);
      localStorage.removeItem('accessToken');
    })
  },[])
  
  return (
    <div className="App">
      <ThemeProvider theme={globalTheme}>
        <BrowserRouter>
          <AppSwitch/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

function AppSwitch() {
  
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/auth/login" component={LoginPage}></Route>
        <Route path="/auth/signup" component={SignupPage}></Route>
        <Route path="/spaceinfo" component={SpaceInfoPage}></Route>
        <Route path="/registration" component={RegistrationPage}></Route>
        <Route path="/oauth2/redirect" component={OAuth2RedirectPage}></Route>  
      </Switch>
      
    </>
  )
}

export default App;
