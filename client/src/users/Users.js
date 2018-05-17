import React from 'react';
import axios from 'axios';
import './styles.css';

class Users extends React.Component {
    state= {
        users: [],
    };
    render() {
        return (
        <div>
        <ul>
            {this.state.users.map(user => (
              <li className="user" key={user._id}>
                {user.username}
              </li>
            ))}
          </ul>
          </div>
        );
    }

    componentDidMount = event => {
        const token = localStorage.getItem('token');
        const authToken = `${token}`;
        const requestOptions= {
            headers: {
                Authorization: authToken,
            },
        };
        axios 
            .get('http://localhost:5500/api/users', requestOptions)
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(err => {
                this.props.history.push('/login');
            })
    }
};

export default Users;