import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
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