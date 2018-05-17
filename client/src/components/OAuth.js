import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
import { clientID, clientSecret, oAuthState } from '../secrets'

export default class OAuth extends Component {
  state = {
    response: 'Nothing yet',
    token: ''
  }
  componentDidMount() {
    const code = qs.parse(this.props.location.search).code
    axios.get(`http://localhost:5000/api/github/login`, { params: { code }})
      .then(({ data }) => {
        localStorage.setItem('token', data)
        this.props.history.push('/users')
      })
      .catch(err => console.log(err))
  }

  render = () => null
}