import React from 'react';
import {connect} from 'react-redux';

import AuthFrom from '../auth-form';
import * as authReqs from '../../action/auth-action.js'

class Dashboard extends React.Component {
  render() {

    let {params} = this.props.match;

    let onComplete = params.auth === 'login'?
    this.props.login:
    this.props.signup;

    return(
      <AuthFrom
        onComplete={onComplete}
        auth={params.auth}
        buttonText={params.auth}
      />
    )
  }
};

let mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(authReqs.signupRequest(user)),
    login: user => dispatch(authReqs.loginRequest(user))
  }
}

export default connect(undefined, mapDispatchToProps)(Dashboard);
