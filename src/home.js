import React from 'react';
import './App.css';
import infinity from './img/infinity.png';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";




class Home extends React.Component{
  render(){
    return (
      <div className=" container">
          <img className="container-logo" src={infinity} />
          <p className="container-text">Powered by unidots.asia</p>
         
         
      </div>
        );
    }
  }
  
  
  export default Home;