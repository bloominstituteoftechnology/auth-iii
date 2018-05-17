import React, { Component } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';

import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome User!</h1>
          {localStorage.getItem('token') && (
            <button onClick={this.signout}>Sign Out</button>
          )}
        </header>
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/users' component={Users} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  }
}

export default withRouter(App);
