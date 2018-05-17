import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SignIn from "./signIn.js";
import SignUp from "./signUp.js";
import UsersList from "./usersList.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Sing-Up page</h1>
        <Route path="/" exact component={SignIn} />
        <Route path="/login" exact component={SignUp} />
        <Route path="/users" exact component={UsersList} />
      </div>
    );
  }
}

export default App;
