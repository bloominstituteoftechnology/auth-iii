import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
  }
  
  sumbitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:5000/api/login', this.state)
      .then(response => {
        localStorage.setItem('token', response.data.token);

        this.props.history.push('/users');
      })
      .catch(err => {
        localStorage.removeItem('token');
      });
      this.setState({
        username: '',
        password: '',
    });
  };
  
  inputHandler = (event) => {
    const { name, value } = event.target;
    
    this.setState({ [name]: value });
  };
  
  render() {
    
    return (
      <form onSubmit={this.sumbitHandler}> 
        <div>
          <input name='username' value={this.state.username} onChange={this.inputHandler}
          type='text' />
        </div>

        <div>
          <input name='password' value={this.state.password} onChange={this.inputHandler}
          type='password' />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    );
  };
};

export default SignIn;