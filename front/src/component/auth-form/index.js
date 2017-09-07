import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    let {name, value} = e.target;

    let errorCheck = (errorName) => {
      let errorCondition = (name === errorName && !value);
      return errorCondition ? `${errorName} required`: null;
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
}
