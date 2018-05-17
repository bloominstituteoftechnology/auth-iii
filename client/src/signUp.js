import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/register', this.state)
      .then(response => {
        console.log("!!!!!!!");
        localStorage.setItem('token', response.data.token);

        this.props.history.push('/users');
      })
      .catch(err => {
        localStorage.removeItem('token');
      });
  };

  render() {
    return (
      <Row>
        <Col>
          <div style={{ width: "500px"}}>
          <Form onSubmit={this.submitHandler}>
            <FormGroup>
              <Label>Username</Label>
              <Input name="username" onChange={this.inputHandler} value={this.state.username} />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" onChange={this.inputHandler} name="password" value={this.state.password} />
            </FormGroup>
            <div>
              <button>Sign up</button>
            </div>
          </Form>
          </div>
        </Col>
      </Row>
    );
  }

}

