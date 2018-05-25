import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  register = event => {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("http://localhost:5000/api/register", newUser)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      username: "",
      password: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Register">
        <form onSubmit={this.register}>
          <input
            onChange={this.handleInputChange}
            placeholder="username"
            value={this.state.username}
            name="username"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="password"
            value={this.state.password}
            name="password"
          />
          <button type="submit">Register this user</button>
        </form>
      </div>
    );
  }
}

export default Register;
