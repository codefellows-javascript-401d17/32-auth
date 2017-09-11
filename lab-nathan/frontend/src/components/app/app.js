import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from '../landing/landing.js';
import Dashboard from '../dashboard/dashboard.js';
import Settings from '../settings/settings.js';
import * as util from '../../lib/utilities.js';
import {tokenSet} from '../../actions/token-actions.js';
import {connect} from 'react-redux';  


class App extends React.Component {
  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if (token) {
      this.props.tokenSet(token);
    }
  }

  render() {
    return (
      <div className='cfgram'>
        <BrowserRouter>
          <section>
            <ul>
              <li><Link to='/welcome/signup'>Sign Up</Link></li>
              <li><Link to='/welcome/login'>Log In</Link></li>
              <li><Link to='/settings'>Settings</Link></li>
            </ul>
            <Route exact path='/welcome/:auth' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/settings' component={Settings} />
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);