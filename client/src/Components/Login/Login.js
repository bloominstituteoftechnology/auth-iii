import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  submitLoginHandler = event => {
    // console.log("Login clicked")
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        // console.log("Token removed")
        localStorage.removeItem("token");
      });
  };

  submitRegisterHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/register", this.state)
      .then(res => {
        response: "Welcome!";
      })
      .catch(err => {
        error: "There was an error during registration.";
      });
  };

  inputHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <div>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.inputHandler}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.inputHandler}
            placeholder="Password"
          />
        </div>
        <div>
          <Link to='/users'>
            <button onClick={this.submitLoginHandler}>Login</button>
          </Link>
        </div>
        <div>
          <button onClick={this.submitRegisterHandler}>Register</button>
        </div>
      </form>
    );
  }
}

class Register extends React.Component {
  state = {
    username: "lambda",
    password: "class"
  };
}

export default Login;
