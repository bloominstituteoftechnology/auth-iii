import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.storage = window.localStorage;
  };

  componentDidMount() {
    const token = this.storage.getItem("I do NOT know what I'm doing...");
    if(token) this.listUsers(token);
  };

  listUsers = token => {
    const config = { headers: { "Authorization": `${token}` } };
    axios
      .get('http://localhost:5000/api/users', config)
      .then(response => {
        this.setState(() => ({ users: response.data }))
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  logout = () => {
    this.storage.removeItem("I do NOT know what I'm doing...");
    this.setState({ users: [] });
  }

  render() {
    return (
      <div className="UserList">
        <h1>USER LIST</h1>
        {this.state.users.map(user => (
          <UserDetails key={user._id} user={user} />
        ))}
      </div>
    );
  };
};

function UserDetails({ user }) {
  console.log(user)
  const { username, password } = user;
  return (
    <div>
      <h2>{username}</h2>
      <p>{password}</p>
    </div>
  );
};

export default UserList;