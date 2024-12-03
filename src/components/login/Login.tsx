import React from 'react'
import './Login.scss';
import { Button } from '@mui/material';

const Login = () => {
  return (
    <div className="login">
      <div className="loginLogo">
        <img src='./discord-icon.png' alt="logo" />
      </div>
      
      <Button>ログイン</Button>
    </div>
  )
}

export default Login