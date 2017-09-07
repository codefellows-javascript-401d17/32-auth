import React from 'react';
import * as util from '../../lib/util.js';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onChange.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;

    let errorCheck = (errorName) => {
      let errorCondition = (name === errorName && !value);
      return errorCondition ? `${errorName} required`:null;
    }

    this.setState({
      [name]: value,
      usernameError: errorCheck('username'),
      emailError: errorCheck('email'),
      password: errorCheck('password')
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
    .then(() => {
      this.setState({
        username: '',
        email: '',
        password: ''
      })
    })
    .catch(error => {
      console.error(error);
      this.setState({error})
    })
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default AuthForm;
