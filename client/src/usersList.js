import React, { Component } from "react";
import axios from "axios";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  fetchingUsers = () => {
    const token = localStorage.getItem("token");
    const authToken = `${token}`;
    const requestOptions = {
      headers: { Authorization: authToken }
    };

    const promise = axios.get(
      "http://localhost:5000/api/users",
      requestOptions
    );
    promise
      .then(response => {
        console.log("response3", response);
        this.setState({ users: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    this.fetchingUsers();
  };

  render() {
    console.log(this.state.users);
    return (
      <div>
        List of Users
        {this.state.users.map(user => {
          return <div key={user._id}>{user.username}</div>;
        })}
      </div>
    );
  }
}
export default UsersList;
