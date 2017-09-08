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
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onComplete(this.state);
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
        <input
          name='password'
          type='password'
          placeholder='Enter a password'
          value={this.state.password}
          onChange={this.onChange}
        />
        {util.renderIf(this.props.auth === 'signup', emailInput)}
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default AuthForm;
