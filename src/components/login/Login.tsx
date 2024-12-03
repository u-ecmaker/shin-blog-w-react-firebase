import React from 'react'
import './Login.scss';
import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <div className="login">
      <div className="loginLogo">
        <img src='./discord-icon.png' alt="logo" />
      </div>
      
      <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login