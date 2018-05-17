import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Users from "./components/Users";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          {localStorage.getItem("token") && (
            <button onClick={this.signout}>Sign out</button>
          )}
        </header>

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
