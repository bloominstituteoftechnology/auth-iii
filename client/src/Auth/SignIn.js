import React, { Component } from "react";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <form>
        <div>
          <label htmlFor="username">
            <input
              onChange={this.Change}
              value={this.state.username}
              type="text"
            />
          </label>
        </div>
        <div>
          <label htmFor="password">
            <input
              onChange={this.Change}
              value={this.state.password}
              type="text"
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
