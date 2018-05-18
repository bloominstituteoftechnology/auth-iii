import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// Components
import Login from './components/Login';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.storage = window.localStorage;
  }

  logout = () => {
    this.storage.removeItem("I do NOT know what I'm doing...");
    this.setState({ users: [] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.logout}>Sign Out</button>
        </header>
        <div>
          <Route exact path='/' component={Login} />
          <Route path="/userlist" component={ UserList } />
          {/* <Route path="/" component={} /> */}
        </div>
      </div>
    );
  };
};

export default App;
