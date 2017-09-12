import './_app.scss';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Logo from '../logo';
import Landing from '../landing';
import Dashboard from '../dashboard';
import Settings from '../settings';
import Header from '../header';
import Content from '../content';
import Menu from '../menu';
import MenuItem from '../menu-item';
import Footer from '../footer';
import Avatar from '../avatar';
import * as util from '../../lib/utilities.js';
import {tokenSet, logout} from '../../actions/token-actions.js';
import {connect} from 'react-redux';  


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if (token) {
      this.props.tokenSet(token);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='cfgram'>
            <Header>
              <Logo />           
                {util.renderIf(!this.props.loggedIn,
                  <Menu>
                    <MenuItem><Link to='/welcome/signup'>Sign Up</Link></MenuItem>
                    <MenuItem><Link to='/welcome/login'>Log In</Link></MenuItem>
                  </Menu>
                )}
                {util.renderIf(this.props.loggedIn,
                  <Menu>
                    <MenuItem><Link to='/dashboard'>Dashboard</Link></MenuItem>
                    <MenuItem><Link to='/settings'>Settings</Link></MenuItem>
                  </Menu>
                )}
              {util.renderIf(this.props.profile,
                <Avatar profile={this.props.profile} />
              )}
              {util.renderIf(this.props.loggedIn,
                <button onClick={() => {
                  this.props.logout();
                  return <Redirect to='/welcome/login' />
                }}>Logout</button>
              )}
            </Header>
            <Content>
              <Route exact path='/welcome/:auth' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/settings' component={Settings} />
            </Content>
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.token,
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);