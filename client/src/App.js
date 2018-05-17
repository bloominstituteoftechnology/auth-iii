import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap';

import SignUp from './signUp';
import SignIn from './signIn';
import Users from './Users';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <div className="container">
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/users" component={Users} />
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
