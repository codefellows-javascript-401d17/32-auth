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
    this.onSubmit = this.onSubmit.bind(this);
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
      passwordError: errorCheck('password')
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

        {util.renderIf(this.props.auth === 'signup',
          <input
            type='text'
            name='email'
            value={this.state.email}
            placeholder='Please enter an email address'
            onChange={this.onChange}
          />
        )}
        {util.renderIf(this.state.username,
          <span>
            {this.state.usernameError}
          </span>
        )}
        <input
          type='text'
          name='username'
          value={this.state.username}
          placeholder='Please enter a username'
          onChange={this.onChange}
        />
        {util.renderIf(this.state.password,
          <span>
            {this.state.passwordError}
          </span>
        )}
        <input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Enter a assword'
          onChange={this.onChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default AuthForm;
