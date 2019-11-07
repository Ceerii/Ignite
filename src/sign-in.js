import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";




class SignIn extends React.Component{
  render(){
    return (
      <div className="signin-container container">
          <form autocomplete="off">
            <div className="top-form">
            <h2>Login</h2>
          <div className="input-box">
          <input type="text" placeholder="Email Address"></input>
          </div>
          <div className="input-box">
          <input type="password" placeholder="Password"></input>
          </div>
          
          <h5>Forgot your password? <a>Recover</a></h5>
            </div>
            <div className="bottom-form">
          <h6 className="register-text" >Haven't registered?</h6>
          <h6 className="register-link">Click here to register</h6>
          <Link className="button" to="/profile">Login</Link>
          </div>
          </form>
      </div>
        );
    }
  }
  
  
  export default SignIn;