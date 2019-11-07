import React from 'react';
import './App.css';
import Home from './home';
import Profile from './profile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './sign-in';

class App extends React.Component{
  render(){
    return (
      <Router> 
        <Switch>
       <Route exact path="/" component={SignIn}/>
       <Route path="/home/" component={Home}/>
      <Route path="/profile/" component={Profile}/>
      <Route path="/sign-in/" component={SignIn}/>
     </Switch>
      </Router>
    
    );
  }
}


export default App;
