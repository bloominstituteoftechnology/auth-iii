import React from 'react';
import axios from 'axios';
import './styles.css';

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
    };

    render() {
        return (
            <div className="Sign">
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor='username' />
                    <input 
                        className="userName"
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
                        className="passWord"
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
            </div>
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