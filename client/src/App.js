import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ClientPage from './pages/ClientPage/ClientPage';
import ProviderPage from './pages/ProviderPage/ProviderPage';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MainPage from './pages/MainPage/MainPage';

import './css/App.css';
import './css/Normalize.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/login" exact component={LogInPage}/>
          <Route path="/signup" exact component={SignUpPage}/>
          <Route path="/client" exact component={ClientPage}/>
          <Route path="/provider" exact component={ProviderPage}/>
          <Route path="/main" exact component={MainPage}/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
