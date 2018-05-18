import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const nuser = {
    backgroundColor: 'blue'
};
const homeSt = {
    backgroundColor: 'beige'
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
        this.setState({ [e.target.name]: e.target.value })
    };
    newCredentials = () => {
        let username = this.state.username;
        let password = this.state.password;
        const newObject = {
            username: username,
            password: password
        };
   
        console.log('This is the Authentication Credentials', newObject);
        axios.post('http://localhost:5000/api/users', newObject)

            .then(res => {
                console.log('this is the response for creatin a new user', res);
                this.setState({ credentials: {}, username: '', password: '' });
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/users');
            })
            .catch(err => {
                console.log(err);
            })
    };
    handleSelect = () => {
        console.log('Fired in signin, the handleSelect', this.props)
        this.props.handleSelect();

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
                    type="password"
                    onChange={this.handleTextInput}
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                />
                <button onClick={() => this.newCredentials()}>
                    Send Credentials
                    </button>
                    <div style={homeSt} >
                        <h3>Go Back To Home</h3>
                        <Link to="/" >
                        <button onClick={this.handleSelect} >Home</button>
                        </Link>
                        </div>
            </div>
        )
    }
}

export default Signup;
