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

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.formAttributes.action(this.state);
  }

  render() {
    return (
      <Row>
        <Col>
          <div style={{ width: "500px"}}>
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input name="username" onChange={this.inputHandler} value={this.state.username} />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" onChange={this.inputHandler} name="password" value={this.state.password} />
            </FormGroup>
          </Form>
          </div>
        </Col>
      </Row>
    );
  }

}

