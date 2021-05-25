import React from 'react';
import './header.css';
import Title from '../../assets/images/logo.png';
import Toilet from '../Toilet/Toilet';
import Login from '../Login/Login';

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <Toilet/>
        <img className="title" src={Title} alt="Logo title" />
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
