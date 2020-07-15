import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {globalTheme} from './styles/GlobalTheme';
import Header from './containers/Header/HeaderContainer';
import {MainPage,LoginPage,SignupPage,SpaceInfoPage,RegistrationPage} from './pages';
import './App.css';

function App() {
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
      </Switch>
      
    </>
  )
}

export default App;
