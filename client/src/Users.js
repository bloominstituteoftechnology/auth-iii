import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  state = {
    users: [],
  };

  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  };

  render() {
    return (
      <div>
      <ul>
        {this.state.users.map(user => <li key={user._id}>{user.username}</li>)}
      </ul>
          {localStorage.getItem('token') && (
            <button onClick={this.signout}>Sign out</button>
          )}
    </div>
    );
  }

  componentDidMount = event => {
    const token = localStorage.getItem('token');

    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken,
      },
    };

    axios
      .get('http://localhost:5000/api/users', requestOptions)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => {
        this.props.history.push('/signin');
      });
  };
}

export default Users;
