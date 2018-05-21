import React, { Component } from 'react';
import{Route, withRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignIn from './Auth/SignIn'
import Users from './users/users'
class App extends Component {
  signout =()=>{
    localStorage.removeItem('token')
    this.props.history.push('/signin')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.signout}>sign out</button>
        </header>
     
        <Route path='/users' component={Users}/>
        <Route path='/signin' component={SignIn}/>
      </div>
    );
  }
}

export default withRouter(App);
