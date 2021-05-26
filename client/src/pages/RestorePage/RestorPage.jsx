import React from 'react';
import './restorePage.css';
import RestoreForm from '../../components/Forms/RestoreForm/RestoreForm';

export default function RestorPage() {
  return (
    <div className="restore-page page">
      <div className="login-massage">
        restore password
      </div>
      <RestoreForm/>
    </div>
  )
}
