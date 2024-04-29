import React from 'react'
import './CSS/login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="login-login">
          Already have an account?  
           <a href="/login">login</a>
        </p>
        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p>
            By continuing, you agree to accept our Privacy Policy & Terms of Service.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login