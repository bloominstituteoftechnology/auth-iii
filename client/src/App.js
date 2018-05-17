import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Signin from './auth/Signin';
import logo from './logo.svg';
import './App.css';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {localStorage.getItem('token') && 
          (<button onClick={this.signout}> Sign Out </button> )}
          
        </header>
        <Route path="/signin" component={Signin}> </Route>
        <Route path="/users" component={Users}> </Route>

      </div>
    );
  }
  signout = () => {
    localStorage.remover('token');
    this.props.history.push('/signin');
  }
}

export default withRouter(App);
