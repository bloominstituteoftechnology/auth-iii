import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../styles/styles.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post(`http://localhost:5000/api/register`, user)
      .then(newUser => {
        console.log(newUser);
        localStorage.setItem('token', newUser.data.token);
        this.props.history.push('/signin');
        // this.setState({ username: '', password: '' });
      })
      .catch(err => {
        console.log(err);
        localStorage.removeItem('token');
      });
  };

  render() {
    return (
      <Form onSubmit={this.addUser} className="LoginForm">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="username" className="mr-sm-2">
            UserName:
          </Label>
          <Input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
            name="username"
            value={this.state.username}
            required
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="password" className="mr-sm-2">
            Password:
          </Label>
          <Input
            type="password"
            id="password"
            onChange={this.handleInputChange}
            placeholder="password"
            name="password"
            value={this.state.password}
            required
          />
        </FormGroup>
          <Button>Register</Button>
      </Form>
    );
  }
}

export default Register;
