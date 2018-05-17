import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  submitHandler = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/login', this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        localStorage.removeItem('token');
      });
    }

  inputHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input 
            name='username'
            type='text'
            value={this.state.username}
            onChange={this.inputHandler}
            placeholder='Username'
          />
        </div>
        <div>
          <input 
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.inputHandler}
            placeholder='Password'
          />
        </div>
      </form>
    )
  }
}

export default Login;