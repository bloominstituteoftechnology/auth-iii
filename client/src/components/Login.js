import React, { Component } from 'react'
import UserForm from './UserForm'
import axios from 'axios'

export default class Register extends Component {

  handleSubmit = (user) => {
    console.log('submitting')
    axios.post('http://localhost:5000/api/login/', user)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        console.log('token', localStorage.getItem('token'))
        this.props.history.push('/users')
      })
      .catch(err => console.log(err))
  }

  render = () => (
    <UserForm
      buttonText='Login'  
      handleSubmit={this.handleSubmit} />
  )
}