import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };
    inputChangeHandler = event => {
        event.preventDefault();
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
    sendCredentials = e => {
        console.log("Fired the sendcredentials")
        e.preventDefault();

        axios
            .post('http://localhost:5000/api/login', this.state)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                console.log('This is insde the submit, this.props:', this.props)
                this.props.history.push('/users');
            })
            .catch(err => {
                localStorage.removeItem('token');
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.sendCredentials}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            name="username"
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input
                            name="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                            type="password"
                        />
                    </div>
                    <div>
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
};
export default Signin;