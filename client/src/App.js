import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ClientPage from './pages/ClientPage/ClientPage';
import ProviderPage from './pages/ProviderPage/ProviderPage';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import RestorePage from './pages/RestorePage/RestorPage';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

import './css/App.css';
import './css/Normalize.css';


export default function App() {
  
  const [token, setToken] = useState(null);

  const saveToken = (token) => {
    console.log(`saveToken activated`,token);
    setToken(token);
  };



  useEffect(()=>{console.log(`App token: ${token}`)},[token]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LogInPage} />
          <Route path="/signup" exact component={() => <SignUpPage setToken={saveToken}/>} />
          <Route path="/restore" exact component={RestorePage} />
          <Route path="/client" exact component={ClientPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/provider" exact component={ProviderPage} />
          <Route path="/main" exact component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
