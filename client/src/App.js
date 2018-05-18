import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Link } from 'react-router-dom';
import Signin from './signin/Signin';
import Users from './users/Users';
import Signup from './signup/Signup';

const logSty = {
  backgroundColor: 'yellow'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false,
      introSty: {
        backgroundColor: 'gold',
        color: 'white',
        height: 1200,
        textDecoration: 'underline red',
        // border:'2px solid blue',
        // marginBottom: 300,
        // paddingBottom: 300

      },
      introHeader: {
        // color: 'aqua',
        border:'2px solid blue',
        padding: 10,
        display: 'inline-flex',
        marginLeft: '25%',
        marginRight: '25%'
      }
    }
  }
  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  };
  handleSelect = () => {
    if (this.state.select === false) {
      this.setState({introSty: {backgroundColor: 'beige', height: 1200, color: 'red',textDecoration: 'underline wavy black', border:'2px solid white' }})
    } else {
      this.setState({introSty: {backgroundColor: 'gold', height: 1200, color: 'white',textDecoration: 'underline red', border:'2px solid white' }})
    }

    this.setState({ select: !this.state.select});
    

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
      <div className="App" style={this.state.introSty}>
        {this.state.select ?
          <div style={logSty}>
            {/* <h1>Select is TRUE</h1> */}
            {localStorage.getItem('token') && (
              <button onClick={this.signout}>Sign out</button>
            )}
            <Route exact path="/signin" component={this.passProps} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signup" component={this.passProps2} />
          </div> :
          <div  >
            <h1 style={this.state.introHeader}>Welcome to Auth III </h1>
            <h3 style={this.state.introHeader}>Please Choose the options of Login or Create New User</h3>
            <Link to="/signin" > <button onClick={this.handleSelect} >Log In</button> </Link>
            <Link to="signup"><button onClick={this.handleSelect}>Create New User</button></Link>


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
