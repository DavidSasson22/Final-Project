import React, {useState} from 'react';
import './restoreForm.css';
import { FaChevronLeft } from "react-icons/fa";
import User from '../../../assets/svg/user.svg';
import Lock from '../../../assets/svg/lock.svg';
import ReactTooltip from 'react-tooltip';

const axios = require('axios');

export default function RestoreForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  
  let data;
  let token;

  const submitHandler = async (e) => {
    
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login',{email});
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
        <div className="sign-in-link">
          <a href="/signup">
            <FaChevronLeft size={20} style={{ "cursor": "pointer" }} />
          </a>
          <div className="create-account-title">
            <p>Create account</p>
          </div>
        </div>
        <div className="wrapper" style={{"height": "428px"}}>
        
          <div className="app-block block-home restore">
            <div className="cookies-policy-consent">
              <p>
                Please enter your username or password.
              </p>
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
                      placeholder="Username or Email" 
                      autoComplete="email" 
                      type="text" 
                      className="form-input"
                      onChange={e=>setEmail(e.target.value)}/>
                  </div>
                </div>
                
                <button 
                  data-tip data-for='provider'
                  type="submit" 
                  className="form-button button-with-bg" 
                  onClick={ e =>{submitHandler(e)}}>
                  Reset Password
                </button>
                <ReactTooltip id='provider' effect='solid' >
                  <span className="tooltip">The new password will be sent to your registered email</span>
                </ReactTooltip>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
