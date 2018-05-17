import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import Users from './auth/users';
import Register from './auth/register';
import Login from './auth/signin';

class App extends Component {
  render() {
    return (
      <div className="App">
     <Route exact path='/register' component={Register} />
     <Route exact path='/' component={Login} />
     <Route exact path='/users' component={Users}/>
      </div>
    );
  }
}

export default App;
