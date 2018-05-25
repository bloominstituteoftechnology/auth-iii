// /src/App.js
import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

import "./App.css";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() =>
            !localStorage.getItem("token") ? <Redirect to="/register" /> : null
          }
        />
        {localStorage.getItem("token") && (
          <button onClick={this.signout}>Sign out</button>
        )}
        <Route path="/register" component={Register} />
        <Route path="/signin" component={Signin} />
        <Route path="/users" component={Users} />
      </div>
    );
  }

  register = () => {
    this.props.history.push("/register");
  };
  signout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/register");
  };
}

export default withRouter(App);
