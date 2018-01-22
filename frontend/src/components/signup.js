// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';

class SignUp extends Component {
  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };
  handleFormSubmit = ({ username, password, confirmPassword }) => {
    const { history } = this.props;
    this.props.register(username, password, confirmPassword, history);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Email:</label>
          <Field name="username" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="confirmPassword" component="input" type="password" />
        </fieldset>
        <button action="submit">Sign In</button>
        {this.renderAlert()}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

// Make sure to correctly fill in this `connect` call
SignUp = connect(mapStateToProps, { register })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'confirmPassword']
})(SignUp);
