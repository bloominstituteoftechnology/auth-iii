import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Register from './Register'
import UsersList from './UsersList'
import Login from './Login'

class App extends Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  controls = () => {
    if (localStorage.getItem('token')) {
      return <button onClick={this.logout}>Logout</button>
    } else {
      return [
        <Link to='/register'><button>Create User</button></Link>,
        <Link to='/login'><button>Log in</button></Link>
      ]
    }
  }

  render = () => (
    <div>
      {this.controls()}
      <Route path='/register' exact component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/users' component={UsersList} />
    </div>
  )
}

export default withRouter(App)
