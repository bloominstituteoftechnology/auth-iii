import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SignIn from "./signIn.js";
import SignUp from "./signUp.js";
import UsersList from "./usersList.js";
import { withRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Sing-Up page</h1>
        <Route path="/" exact component={SignIn} />
        <Route path="/login" exact component={SignUp} />
        <Route path="/users" exact component={UsersList} />
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }

  signOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };
}

export default withRouter(App);
