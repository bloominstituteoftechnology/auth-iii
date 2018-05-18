import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Link } from 'react-router-dom';
import Signin from './signin/Signin';
import Users from './users/Users';
import Signup from './signup/Signup';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false
    }
  }
  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  };
  handleSelect = () => {
    this.setState({ select: !this.state.select })
    console.log('Fired the handle Select')
    this.passProps();
  };
  passProps = (props) => {
    console.log("Fired pass props")
    return (
      <Signin
        handleSelect={this.handleSelect.bind(this)}
        {...props}
      />
    )
  };
  passProps2 = (props) => {
    return (
      <Signup
        handleSelect={this.handleSelect.bind(this)}
        {...props}
      />
    )
  }
  render() {
    return (
      <div className="App">
        {this.state.select ?
          <div>
            {/* <h1>Select is TRUE</h1> */}
            {localStorage.getItem('token') && (
              <button onClick={this.signout}>Sign out</button>
            )}
            <Route exact path="/signin" component={this.passProps} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signup" component={this.passProps2} />
          </div> :
          <div>
            <h1>Welcome to Auth III </h1>
            <h3>Please Choose the options of Login or Create New User</h3>
            <Link to="/signin" > <button onClick={this.handleSelect} >Go to Log In</button> </Link>
            <Link to="signup"><button onClick={this.handleSelect}>Go to Create New User</button></Link>


          </div>}
        {/* <h1>Welcome to Auth III </h1>
       <h3>Please Choose the options of Login or Create New User</h3> */}
        {/* {localStorage.getItem('token') && (
          <button onClick={this.signout}>Sign out</button>
        )}
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/signup" component={Signup} /> */}
        <hr />
        {/* <Link to="/signin" > <button>Go to Log In</button> </Link>
        <Link to="signup"><button>Go to Create New User</button></Link> */}

      </div>
    );
  }
}

export default withRouter(App);
