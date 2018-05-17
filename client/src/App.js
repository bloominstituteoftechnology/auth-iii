import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap';

import SignUp from './signUp';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <div className="container">
            <Route path="/signup" component={SignUp} />
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
