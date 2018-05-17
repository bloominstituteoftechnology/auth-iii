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
    axios
      .get("http://localhost:5000/api/users")
      .then(response => {
        this.setState(() => ({ users: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="UserList">
        <h1>User List</h1>
        <ul>
          {this.state.users.map(user => {
            return <User username={user.username} id={user._id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
