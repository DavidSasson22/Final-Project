import React, { useState } from 'react';
import axios from 'axios';
import './signUpForm.css';
import { FaChevronLeft } from "react-icons/fa";
import User from '../../../assets/svg/user.svg';
import Lock from '../../../assets/svg/lock.svg';
import { AiOutlineMail } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';

export default function SignUpForm(props) {

  const style = { color: "#ccc", fontSize: "0.85em" }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState(2);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users', {
        email, password, firstName, lastName, userType
      });
      console.log(res.data.token);
      props.saveToken(res.data.token);
    } catch (e) {
    };
  };

  return (
    <div className="react-view">
      <div className="content content--with-space">

        <div className="sign-in-link">
          <a href="/">
            <FaChevronLeft size={20} style={{ "cursor": "pointer" }} />
          </a>
          <div className="create-account-title">
            <p>Create account</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="app-block block-home sign-up-from">
            <div className="central-form">
              <form>
                <div className="first-form-group">
                  <div className="input-container">
                    <div className="input-icon">
                      <AiOutlineMail style={style} />
                    </div>
                    <input
                      name="email"
                      label="Email"
                      placeholder="Email"
                      autoComplete="email"
                      type="text"
                      className="form-input"
                      onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <div className="input-icon">
                      <img src={User} alt="user icon" />
                    </div>
                    <input
                      name="Fname"
                      label="Fname"
                      placeholder="First Name"
                      autoComplete="first name"
                      type="text"
                      className="form-input"
                      onChange={e => setFirstName(e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <div className="input-icon">
                      <img src={User} alt="user icon" />
                    </div>
                    <input
                      name="Lname"
                      label="Lname"
                      placeholder="last Name"
                      autoComplete="last name"
                      type="text"
                      className="form-input"
                      onChange={e => setLastName(e.target.value)} />
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
                      className="form-input"
                      onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>

                <div className="form-group group-checkbox"
                  onClick={e => setUserType(e.target.value ? 1 : 2)}>
                  <input type="checkbox" id="remember-me" name="remember-me" style={{ "opacity": "0" }} />
                  <label htmlFor="remember-me" data-tip data-for='provider'>
                    Provider
                  </label>
                  <ReactTooltip id='provider' effect='solid' >
                    <span className="tooltip">Check if you provide the service</span>
                  </ReactTooltip>
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
                <button type="submit" className="form-button button-with-bg"
                  onClick={e => { submitHandler(e) }}>
                  Accept and create
                </button>

              </form>
            </div>
          </div>
          <div className="footer--bottom">
            <ul className="form-footer-links">
              <li>
                <a id="footer_forgot-password" href="/login">
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
