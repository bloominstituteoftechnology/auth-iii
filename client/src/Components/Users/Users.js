import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  state = {
    users: [],
  };
  render() {
    return (
      <ul>
        {this.state.users.map(user => <li key={user._id}> {user.username}</li>)}
      </ul>
    );
  }
  componentDidMount = event => {
    const token = localStorage.getItem('token');
    const authToken = 'Bearer ${token}';
    const requestOptions = {
      header: {
        Authorization: authToken,
      },
    };
    axios
      .get('http://localhost:5500/user', requestOptions)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        this.props.history.push('/signin');
      });
  };
}

export default Users;