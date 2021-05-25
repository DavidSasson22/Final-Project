import React from 'react';
import LogInForm from '../../components/Forms/LogInForm/LogInForm';
import './logInPage.css'

export default function LoginPage() {
  return (
    <div className="log-in page">
      <div className="login-massage">
        My account 
      </div>
      <LogInForm/>
    </div>
  )
}
