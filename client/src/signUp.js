import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  addUserHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  sendingLogins = event => {
    event.preventDefault();
    const obj = {
      username: this.state.username,
      password: this.state.password
    };

    const promise = axios.post("http://localhost:5000/api/login", obj);
    promise

      .then(response => {
        console.log("response2", response);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        localStorage.removeItem("token");
        this.props.history.push("/");
      });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        Log-in Here
        <form onSubmit={this.sendingLogins}>
          <div>
            <input
              type="text"
              name="username"
              placeholder=" enter username"
              value={this.state.username}
              onChange={this.addUserHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder=" enter password"
              value={this.state.password}
              onChange={this.addUserHandler}
            />
          </div>
          <div>
            <button>Log-in</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
