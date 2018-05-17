import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor='username' />
                    <input 
                        name='username' 
                        value={this.state.username} 
                        onChange={this.inputChangeHandler} 
                        type='text' 
                        placeholder='username'
                    />
                </div>
                <div>
                    <label htmlFor='password' />
                    <input 
                        name='password'
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        type='password'
                        placeholder='password'
                    />
                </div>
                <div>
                    <button>Sign Up</button>
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
            .post('http://localhost:5500/api/register', this.state)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                this.props.history.push('/users');
            })
            .catch(err => {
                localStorage.removeItem('token');
            });
    };
};

export default Signup;