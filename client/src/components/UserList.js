import React, { Component } from "react";
import axios from "axios";

import User from "./User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    console.log(requestOptions);
    axios
      .get("http://localhost:5000/api/users", requestOptions)
      .then(response => {
        console.log(response.data);
        this.setState(() => ({ users: response.data }));
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/signin");
      });
  };

  render() {
    return (
      <div className="UserList">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            this.props.history.push("/signin");
          }}
        >
          Logout
        </button>
        <h1>User List</h1>
        {this.state.users.map(user => {
          return <User username={user.username} key={user._id} />;
        })}
      </div>
    );
  }
}

export default UserList;
