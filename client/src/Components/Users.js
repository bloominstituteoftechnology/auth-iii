import React, { Component } from 'react';
import axios from 'axios';

import '../styles/styles.css';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        const token = localStorage.getItem('token');
        const authToken = `${token}`;
        const requestOptions = {
            headers: {
                Authorization: authToken
            }
        }

        axios.get(`http://localhost:5000/api/users`, requestOptions)
            .then(users => {
                this.setState({ users: users.data })
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/signin');
            })
    }

    render() {
        return (
            <div>
                {this.state.users.map(users => {
                    return (
                        <h3 className="users" key={users._id}>{users.username}</h3>
                    )
                })}
            </div>
        )
    }
}

export default Users;