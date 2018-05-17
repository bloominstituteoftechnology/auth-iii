import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router";
// components
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Users from "./components/Users";
// styles
import logo from "./logo.svg";
import "./styles/App.css";

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
        {/* Application Routes */}
        <Switch>
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/users" component={Users} />
          <Route
            component={() => {
              return (
                <div>
                  <h3>404 - Page Not Found</h3>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
