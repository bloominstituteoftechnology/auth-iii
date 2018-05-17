import React, { Component } from 'react';
import { Route } from 'react-router'
import Register from './Register'
import UsersList from './UsersList'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/users' component={UsersList} />
      </div>
    );
  }
}

export default App;
