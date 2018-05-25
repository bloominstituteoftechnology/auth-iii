import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import UserList from "./components/UserList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => {
            return (
              <div>
                <br />
                Routes are /signup /signin and /users<br />
                <br />
              </div>
            );
          }}
        />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/users" component={UserList} />
      </div>
    );
  }
}

export default App;
