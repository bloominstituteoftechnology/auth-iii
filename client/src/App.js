import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login.js";
import Users from "./Components/Users/Users.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path="/" component={Login} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
