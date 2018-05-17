import { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
    state ={
        username: '',
        password: '',
    };
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor='username' />
                    <input 
                        name= 'username'
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        type='text'
                    />
                </div>
                <div>
                    <label htmlFor='password' />
                    <input 
                        name='password'
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        type='password'
                    />
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </form>
        );
    }

    inputChangeHandler = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    submitHandler = event => {
        event.preventDefault();
        axios 
            .post('http://localhost:5000/login', this.state)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                this.props.history.push('/users');
            })
            .catch(err => {
                localStorage.removeItem('token');
            });
    };
};

export default Signin;