import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <ul>
        {this.state.users.map(user => <li key={user._id}>{user.username}</li>)}
      </ul>
    );
  }

  componentDidMount = event => {
    const token = localStorage.getItem("token");

    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    };

    axios
      .get("http://localhost:5000/api/users", requestOptions)
      .then(response => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/signin");
      });
  };
}

export default Users;