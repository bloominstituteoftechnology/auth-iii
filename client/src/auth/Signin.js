import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
state = {};

render() {
    return (
        <form onSubmit={this.submitHandler}>
        <div>
            <label htmlFor="username" />
            <input name="username" value={this.state.username} onChange={this.inputChangeHandler} type="text" />
        </div>
        <div>
            <label htmlFor="password" />
            <input name="password" value={this.state.password} onChange={this.inputChangeHandler} type="text" />
        </div>
        <div>
            <button> Sign In </button>
        </div>
        </form>
    )
}
inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    // const o = { name: 'kyle' }
    // o.name || o['name']
    this.setState( { [name]: value })
}

submitHandler = (e) => {
    e.preventDefault();

    axios
    .post('http://localhost:5500/login', this.state)
    .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
    })
    .catch(err => console.log(err))

    console.log(this.state);

}
}

export default Signin;