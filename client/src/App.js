import React, { Component } from "react";
import "./App.css";

import Register from "./components/Register";
import UserList from "./components/UserList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
        <UserList />
      </div>
    );
  }
}

export default App;
