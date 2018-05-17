import React from 'react';
import axios from 'axios';

const nuser = {
    backgroundColor: 'blue'
}

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleTextInput = e => {
        e.preventDefault();
        let name = e.target.name
        name = e.target.value;
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    };
    newCredentials = () => {
        let username = this.state.username;
        let password = this.state.password;
        const newObject = {
            username: username,
            password: password
        };
        let userObject = {
            username: username,
            loggedIn: true
        }
        console.log('This is the Authentication Credentials', newObject);
        axios.post('http://localhost:5000/api/users', newObject)

            .then(res => {
                console.log('this is the response for log in', res);
                this.setState({ credentials: {}, username: '', password: '' });
                if (res) {
                    // this.setState({ loggedIn: true })
                    // this.props.LogInAction(userObject);
                }
                // this.props.fetchData;

            })
    }
    render() {
        return (
            <div style={nuser} >
            <h3>Create New User </h3>
                <input
                    type="text"
                    onChange={this.handleTextInput}
                    placeholder="Enter username"
                    name="username"
                    value={this.state.username}
                />
                <input
                    type="text"
                    onChange={this.handleTextInput}
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                />
                <button onClick={() => this.newCredentials()}>
                    Send Credentials
                    </button>
            </div>
        )
    }
}

export default Signup;
