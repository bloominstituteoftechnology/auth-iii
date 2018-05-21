import React, { Component } from "react";
import axios from 'axios'

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };
  change = event => {
      const{name,value} = event.target

this.setState({[name]:value})
  };
  submit = event => {
      event.preventDefault()
      console.log(this.state)
axios
.post('http://localhost:5000/api/login',this.state)
.then(response=>{
console.log(response.data)
localStorage.setItem('token', response.data.token);
this.props.history.push('/users')
})
.catch(err=>{
    localStorage.removeItem('token');
})
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label htmlFor="username">
            <input
              onChange={this.change}
              value={this.state.username}
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              onChange={this.change}
              value={this.state.password}
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </form>
    );
  }
}
export default SignIn;
