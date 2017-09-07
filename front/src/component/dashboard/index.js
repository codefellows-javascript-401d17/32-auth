import React from 'react';
import {connect} from 'react-redux';
import {signupRequest, loginRequest} from '../../action/auth-action.js';
import * as util from '../../lib/util.js'
import AuthForm from '../auth-form';

class Dashboard extends React.Component {
  render() {
    let {params} = this.props.match;
    console.log(params);

    let onComplete = params.auth === 'login'
    ? this.props.login
    : this.props.signup
    return (
      <div>
        <AuthForm
          onComplete={onComplete}
          buttonText={'Sign Up'}
        />
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user))
  }
}

export default connect(undefined, mapDispatchToProps)(Dashboard);
