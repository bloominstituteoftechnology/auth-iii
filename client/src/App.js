import React, { Component } from 'react';
import{Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignIn from './Auth/SignIn'
import Users from './users/users'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        routes go here
        <Route path='/users' component={Users}/>
        <Route path='/signin' component={SignIn}/>
      </div>
    );
  }
}

export default App;
