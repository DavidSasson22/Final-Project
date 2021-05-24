import React from 'react';
import './signUpForm.css';
import { FaChevronLeft } from "react-icons/fa";
import User from '../../../assets/svg/user.svg';
import Lock from '../../../assets/svg/lock.svg';

export default function SignUpForm() {
  return (
    <div className="react-view">
      <div className="content content--with-space">
        
        <div className="sign-in-link">
          <FaChevronLeft size={20} style={{"cursor":"pointer"}}/>
          <div className="create-account-title">
            <p>Create account</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="app-block block-home">
            <div className="central-form">
              <form>
                <div className="first-form-group">
                  <div className="input-container">
                    <div className="input-icon">
                      <img src={User} alt="user icon"/>
                    </div>
                    <input 
                      name="email" 
                      label="Email" 
                      placeholder="Email" 
                      autoComplete="email" 
                      type="text" 
                      className="form-input"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <div className="input-icon">
                      <img src={Lock} alt="lock icon" />
                    </div>
                    <input 
                      name="password" 
                      label="Password" 
                      placeholder="Password" 
                      autoComplete="password" 
                      type="password" 
                      className="form-input"/>
                  </div>
                </div>
                <div className="cookies-policy-consent">
                  <div className="cookies">
                    <p>
                      We use <a href="/cookies">cookies</a> that are necessary to operate our website.
                    </p>
                  </div>
                  <div className="policy">
                    <p>
                      By continuing, you agree to be bound by our <a href="/privecy">Privacy Policy</a>.
                    </p>
                  </div>
                  <div className="consent">
                    <p>
                      Please choose whether or not to give us your <a href="/consent">consent</a> to carry out profiling and use your data for marketing purposes.
                    </p>
                  </div>
                </div>
                <button type="submit" className="form-button button-with-bg">
                  Accept and create
                </button>
                <button type="submit" className="form-button button-outline">
                  Skip and create
                </button>
              </form>
            </div>
          </div>
          <div className="footer--bottom">
            <ul className="form-footer-links">
              <li>
                <a id="footer_forgot-password" href="/my-account">
                  I already have an account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
