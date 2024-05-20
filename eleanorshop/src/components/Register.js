import React, { Component } from 'react';
import { GoogleLogin } from '@react-oauth/google';

import Login from './Login';

export default class Register extends Component {
  render() {
    const responseMessage = (response) => {
      console.log(response);
  };
  const errorMessage = (error) => {
      console.log(error);
  };
    return (
      <div>
      <h2>React Google Login</h2>
      <br />
      <br />

      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
      
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

  </div>
    )
  }


}


