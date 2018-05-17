import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          {localStorage.getItem('token') && (
            <button onClick={this.signout}>Sign Out</button>
          )}
        </header>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default withRouter(App);
