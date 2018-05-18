import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authenticated: false,
    };
    this.storage = window.localStorage;
  }

  userLogin = event => {
    const user = { username: this.state.username, password: this.state.password };
    axios.post('http://localhost:5000/api/login', user)
      .then(res => {
        console.log(res.data);
        this.setState({ message: 'Successfully logged in', username: '', password: '' });
        this.storage.setItem("I do NOT know what I'm doing...", res.data.token);
        this.props.listUsers(res.data.token);
      })
      .catch(err => {
        console.Error(err);
        this.setState({errorMessage: 'Please try again' });
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Login">
      <h1>LOGIN</h1>
      <form onSubmit={this.userLogin}>
        <div>
          <input
            onChange={this.handleInputChange}
            type='text'
            placeholder='username'
            value={this.state.username}
            name='username'
          />
          <input
            onChange={this.handleInputChange}
            type='password'
            placeholder='password'
            value={this.state.password}
            name='password'
          />
        </div>
        <div>
          <button>Sign Up</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    );
  };
}

export default Login;