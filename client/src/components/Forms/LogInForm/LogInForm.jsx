import React, { useState} from 'react';
import './logInForm.css';
import ReactTooltip from 'react-tooltip';
import User from '../../../assets/svg/user.svg';
import Lock from '../../../assets/svg/lock.svg';
import { FaFacebookSquare, FaSteamSymbol, FaGoogle, FaApple } from 'react-icons/fa';

const axios = require('axios');

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  
  let data;
  let token;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login',{email,password});
      data = res.data;
      token = data.token;
      setStatus(true);
      
      console.log(token)
      console.log(status)
    
    }catch(err) {
      setStatus(false);
    }
  }

  return (
    <div className="react-view">
      <div className="content content--with-space">
        <div className="wrapper" style={{"height": "428px"}}>
          <div className="app-block block-home">
            <div className="primary-socials primary-socials--default app-block__item">
              <button type="button" className="form-button with-icon button-facebook social-button--primary">
                <FaFacebookSquare size={35}/>
                <span className="label">Log in with Facebook</span>
              </button>
            </div>
            <div className="central-form app-block__item">
              <form>
                
                <div className="form-group">
                  <div className="input-container">
                    <div className="input-icon icon-user">
                      <img src={User} alt="user icon" />
                    </div>
                    <input name="email" 
                      label="Email" 
                      lang="en" 
                      placeholder="Email" 
                      autoComplete="email" 
                      type="text" 
                      className="form-input"
                      onChange={e=>setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <div className="input-icon icon-password">
                      <img src={Lock} alt="lock icon" />
                    </div>
                    <input 
                      name="password" 
                      label="Password" 
                      placeholder="Password" 
                      autoComplete="password" 
                      type="password" 
                      className="form-input"
                      onChange={e=>setPassword(e.target.value)}/>
                  </div>
                </div>
                
                <div className="form-group group-checkbox">
                  <input type="checkbox" id="remember-me" name="remember-me" style={{"opacity":"0"}}/>
                  <label htmlFor="remember-me">
                    Remember
                  </label>
                </div>
                <button 
                  type="submit" 
                  className="form-button button-with-bg" 
                  onClick={ e =>{submitHandler(e)}}>
                  Log in
                </button>
              </form>
            </div>
            <div className="app-block__item bottom-area">
              <div className="secondary-socials">
                <ul>
                  <li data-tip data-for='steam-tt'>
                    <FaSteamSymbol size={30} style={{"color":"#ccc"}} 
                    onMouseOver={({target})=>target.style.color='#333'} 
                    onMouseOut={({target})=>target.style.color='#ccc'}/>
                  </li>
                  <ReactTooltip id='steam-tt' effect='solid' >
                    <span className="tooltip">Log in with Steam</span>
                  </ReactTooltip>
                  <li data-tip data-for='google-tt'>
                    <FaGoogle size={30} style={{"color":"#ccc"}} 
                    onMouseOver={({target})=>target.style.color='red'} 
                    onMouseOut={({target})=>target.style.color='#ccc'}/>
                  </li>
                  <ReactTooltip id='google-tt' effect='solid' >
                    <span className="tooltip">Log in with Google</span>
                  </ReactTooltip>
                  <li data-tip data-for='apple-tt' >
                    <FaApple size={30} style={{"color":"#ccc"}} 
                    onMouseOver={({target})=>target.style.color='#333'} 
                    onMouseOut={({target})=>target.style.color='#ccc'}/>
                  </li>
                  <ReactTooltip id='apple-tt' effect='solid' >
                    <span className="tooltip">
                      Log in with Apple
                    </span>
                  </ReactTooltip>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer--bottom">
            <ul className="form-footer-links">
              <li>
                <a id="footer_forgot-password" href="/restore">
                  Forgot your password?
                </a>
              </li>
              <li>
                <a id="footer_create-account" href="/signup">
                  Create an account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

