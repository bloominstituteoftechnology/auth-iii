import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

class SingIn extends Component {
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
  sendingCredentials = event => {
    event.preventDefault();
    const obj = {
      username: this.state.username,
      password: this.state.password
    };
    const promise = axios.post("http://localhost:5000/api/register", obj);
    promise
      .then(response => {
        console.log("response1", response.data);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        Register Here
        <form onSubmit={this.sendingCredentials}>
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

export default SingIn;
