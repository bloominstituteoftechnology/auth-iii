import React, { Component } from 'react'

export default class UserForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <input name='username' onChange={this.handleChange} />
      <input name='password' type='password' onChange={this.handleChange} />
      <button type='submit'>{this.props.buttonText}</button>
    </form>
  )
}