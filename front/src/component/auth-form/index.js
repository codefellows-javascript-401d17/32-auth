import React from 'react';
import * as util from '../../lib/util.js';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;

    function errorCheck(errorName) {
      return name === errorName && !value ? `${errorName} required`: null;
    }

    this.setState({
      [name]: value,
      usernameError: errorCheck('username'),
      emailError: errorCheck('email'),
      passwordError: errorCheck('password')
    })
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onComplete(this.state)
    .then(() => {
      this.setState({ username: '', email: '', password: ''})
    })
    .catch(error => {
      console.error(error);
      this.setState({error});
    })
  }




  render() {

    let emailInput = (
      <input
        name='email'
        type='text'
        placeholder='Enter a valid email address'
        value={this.state.email}
        onChange={this.onChange}
      />
    )

    return(
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          type='text'
          placeholder='Enter a username'
          value={this.state.username}
          onChange={this.onChange}
        />
        {util.renderIf(this.state.usernameError,
          <span className='tooltip'>
            {this.state.usernameError}
          </span>
        )}
        <input
          name='password'
          type='password'
          placeholder='Enter a password'
          value={this.state.password}
          onChange={this.onChange}
        />
        {util.renderIf(this.state.passwordError,
          <span className='tooltip'>
            {this.state.passwordError}
          </span>
        )}
        {util.renderIf(this.props.auth === 'signup', emailInput)}
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default AuthForm;
