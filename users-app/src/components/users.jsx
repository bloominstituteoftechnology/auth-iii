//IMPORTS
import React, { Component } from 'react';
import axios from 'axios';

//Users Component
class Users extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = { headers: { authorization: token } };

        axios
            .get("http://localhost:5000/api/users", requestOptions)
            .then(res => this.setState({ users: res.data }))
            .catch(err => this.props.history.push('/signin'))
    }
    //LOGOUT
    handleLogout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/signin');
    }

render() {
    return (
        <div>
            <button onClick={() => this.handleLogout()}>Sign Out Here</button>
            {this.state.users.map(user => <div key={user._id}>{user.username}</div>)}
        </div>
        )
    }
}

export default Users;