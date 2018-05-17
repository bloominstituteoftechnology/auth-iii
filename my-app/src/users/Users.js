import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        Authorization: token,
      },

    };

    axios.get('http://localhost:5000/api/users', options)
    .then(res => {
      this.setState({users: res.data})

    }).catch(err => this.props.history.push('/signin'))
  }

  render(){
    return (

      <div>
        {this.state.users.map((user,i) => <li>{user.username}</li>)}
      </div>
    )
  }
}

export default Users;
