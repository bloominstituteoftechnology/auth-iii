import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Signin from './auth/Signin';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>

          {localStorage.getItem('token') && (
            <button onClick={this.signout}>Sign out</button>
          )}
        </header>

        <Route path="/signin" component={Signin} />
        <Route path="/users" component={Users} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  };
}

export default withRouter(App);
