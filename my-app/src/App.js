import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Signup from "./Components/Signup/Signup"

class App extends Component {
  render() {
    return (
      <Route exact path="/signup" component={Signup}/>
    );
  }
}

export default App;
