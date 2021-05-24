import React from 'react';
import './header.css';
import Toilet from '../Toilet/Toilet';
import Login from '../Login/Login';

export default function Header() {
  return (
    <header className="header">
      <Toilet/>
      <a href="/" className="logo">
        <span>to <span className="primery">pee</span></span>
        <span>or </span>
        <span>not to <span className="primery">pee</span></span>
        
      </a>
      <div className="spacer"></div>
      
      <div className="header-menu">
        <a href="/rules" className="menu-item-about">About Us</a>
        <a href="/" className="menu-item-home">Home</a>
        <a href="/signup" className="menu-item-home">Sign up</a>
      </div>
      <Login/>
    </header>
  )
}
