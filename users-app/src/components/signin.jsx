//IMPORTS
import React, { Component } from 'react';
import axios from 'axios';

//SignIn Component
class SignIn extends Component {
    state = {
        username: "",
        password: ""
    };

    handleLogin = event => {
        const { username, password } = this.state;
        axios
            .post("http://localhost:5000/api/login", { username, password })
            .then(user => {
                localStorage.setItem('token', user.data.token);
                this.props.history.push('/users');
            })
            .catch(err => console.log(err));
        this.setState({ username: "", password: "" });
    }

render() {
    return (
            <div>
                <input 
                    type = "text"
                    name = "username"
                    value = {this.state.username}
                    placeholder = "username"
                    onChange={event => this.setState({ [event.target.name]: event.target.value })}
                />
                <input
                    type = "password"
                    name = "password"
                    value = {this.state.password}
                    placeholder = "password"
                    onChange={event => this.setState({ [event.target.name]: event.target.value })}
                />
                <button onClick={() => this.handleLogin()}>Login Here</button>
            </div>
        )
    }
}

export default SignIn;