import React, { Component } from "react";
import { Route, withRouter, NavLink } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Users from "./Users";
import Register from "./Register";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <NavLink className="home" to="/">
              Home
            </NavLink>
          </h1>

          {localStorage.getItem("token") && (
            <button className="logout" onClick={this.signout}>
              Sign out
            </button>
          )}
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/users" component={Users} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/signin");
  };
}

export default withRouter(App);