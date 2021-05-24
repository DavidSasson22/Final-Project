import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className="menu-account">
        <a className="my-account-link" href="/login">
          <span>My account</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="17.25" viewBox="0 0 15.5 17.25">
            <g transform="translate(-5.25 -3.75)">
              <path className="icon-user-a" d="M20,27.75V26a3.5,3.5,0,0,0-3.5-3.5h-7A3.5,3.5,0,0,0,6,26v1.75" transform="translate(0 -7.5)"/>
              <path className="icon-user-a" d="M19,8a3.5,3.5,0,1,1-3.5-3.5A3.5,3.5,0,0,1,19,8Z" transform="translate(-2.5)"/>
            </g>
          </svg>
        </a>

        <div className="language-switcher">
          <div>
            <a href="/" className="lang lang-active">EN</a>
            <a href="/" className="lang ">RU</a>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="15.19" height="15.19" viewBox="0 0 15.19 15.19">
            <path className="icon-language-a" d="M10.587,3a7.6,7.6,0,1,0,7.6,7.595A7.591,7.591,0,0,0,10.587,3Zm5.263,4.557H13.61a11.886,11.886,0,0,0-1.048-2.7A6.1,6.1,0,0,1,15.851,7.557ZM10.595,4.549a10.7,10.7,0,0,1,1.451,3.008h-2.9A10.7,10.7,0,0,1,10.595,4.549ZM4.716,12.114a5.941,5.941,0,0,1,0-3.038H7.284a12.543,12.543,0,0,0-.106,1.519,12.543,12.543,0,0,0,.106,1.519Zm.623,1.519H7.58a11.885,11.885,0,0,0,1.048,2.7A6.066,6.066,0,0,1,5.339,13.633ZM7.58,7.557H5.339a6.066,6.066,0,0,1,3.289-2.7A11.885,11.885,0,0,0,7.58,7.557Zm3.015,9.084a10.7,10.7,0,0,1-1.451-3.008h2.9A10.7,10.7,0,0,1,10.595,16.641Zm1.777-4.527H8.818A11.175,11.175,0,0,1,8.7,10.595a11.078,11.078,0,0,1,.122-1.519h3.554a11.077,11.077,0,0,1,.122,1.519A11.174,11.174,0,0,1,12.372,12.114Zm.19,4.223a11.885,11.885,0,0,0,1.048-2.7h2.241a6.1,6.1,0,0,1-3.289,2.7Zm1.344-4.223a12.543,12.543,0,0,0,.106-1.519,12.543,12.543,0,0,0-.106-1.519h2.567a5.941,5.941,0,0,1,0,3.038Z" transform="translate(-3 -3)"/>  
          </svg>
        </div>
  </div>
  )
}

