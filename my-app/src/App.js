
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import Signin from './signin/Signin';
import Users from './users/Users';
import Signup from './signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          {localStorage.getItem('token') && (
            <button onClick={this.signout}>Sign out</button>
          )}
        </header>

        <Route path="/signin" component={Signin} />
        <Route path="/users" component={Users} />
        <Route path='/signup' component={Signup} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  };
}

export default withRouter(App);
