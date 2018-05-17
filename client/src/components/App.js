import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Register from './Register'
import UsersList from './UsersList'
import Login from './Login'
import OAuth from './OAuth'
import { clientID, oAuthState} from '../secrets'

class App extends Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  controls = () => {
    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&state=${oAuthState}`
    if (localStorage.getItem('token')) {
      return <button onClick={this.logout}>Logout</button>
    } else {
      return (
        <div>
          <Link to='/register'><button>Create User</button></Link>
          <Link to='/login'><button>Log in</button></Link>
          <a href={githubOAuthUrl}><button>Login with github</button></a>
        </div>  
      )
    }
  }

  render = () => (
    <div>
      {this.controls()}
      <span style={{ fontSize: '70%' }}>{localStorage.getItem('token')}</span>
      <Route path='/register' exact component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/users' component={UsersList} />
      <Route path='/callback' component={OAuth} />
    </div>
  )
}

export default withRouter(App)
