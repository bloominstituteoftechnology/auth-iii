import React, { Component } from 'react'
import axios from 'axios'

export default class UsersListContainer extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      axios.request({
        url: 'http://localhost:5000/api/users',
        headers: { 'Authorization': token }
      })
        .then(response => this.setState({ users: response.data }))
        .catch(err => console.log(err))
    } else {
      this.props.history.push('/login')
    }
  }

  render = () => (
    <UsersList users={this.state.users} />
  )
}

const UsersList = ({ users }) => (
  <div>
    {users == null
      ? null
      : users.map((user, key) => <User key={key} {...user} />)}
  </div>
)

const User = (props) => <h1>{props.username}</h1>