import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {globalTheme} from './styles/GlobalTheme';
import Header from './containers/Header/HeaderContainer';
import {MainPage} from './pages';
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
        <Route path="/" component={MainPage}></Route>
      </Switch>
    </>
  )
}

export default App;
