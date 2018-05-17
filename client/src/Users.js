import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    state = {
        users: [],
    };

    render() {
        return (
            <ul>
                {this.state.users.map(user => <li key={user._id}>{user.username}</li>)}
            </ul>
        );
    }

    componentDidMount = e => {
        const token = localStorage.getItem('token');
        const authToken = `Bearer ${token}`;

        const requestOptions = {
            headers: {
                Authorization: authToken,
            },
        };
        axios
        .get('http://localhost:5500/users', requestOptions)
        .then(response => {
            this.setState({ users: response.data })
            console.log(response.data);
        })
        .catch(err => {
            this.props.history.push('/signin');
            console.log(err)
        })
    }
}

export default Users;