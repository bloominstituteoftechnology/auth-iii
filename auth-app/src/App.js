import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Signin from './Components/Signin';
import Users from './Components/Users';
import SignUp from './Components/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Authentication</h1>
          {localStorage.getItem('token') && (
            <button onClick={this.signout}>Sign out</button>
          )}
        </header>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Signin} />
        <Route path="/users" component={Users} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };
}

export default withRouter(App);
