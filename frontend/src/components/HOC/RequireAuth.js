import React, { Component } from 'react';
import { connect } from 'react-redux';
const auth = localStorage.getItem('authorization') ? true : false;

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {

      if (!auth) {
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <div>
          {auth ? (
            <ComposedComponent users={this.props.users} />
          ) : null}
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
