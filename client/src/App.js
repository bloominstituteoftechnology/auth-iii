import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from './signUp';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/signup" component={SignUp} />
      </Router>
    );
  }
}

export default App;
