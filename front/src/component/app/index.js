import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Landing from '../landing';
import SettingsContainer from '../settings-container';
import createAppStore from '../../lib/createAppStore.js';
import tokenSet from '../../action/profile-action';

let store = createAppStore()

class App extends React.Component {
  render() {
    return(
      <span id="app">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <nav>
                <ul>
                  <li><Link to='/welcome/signup'>signup</Link></li>
                  <li><Link to='/welcome/login'>login</Link></li>
                  <li><Link to='/settings'>settings</Link></li>
                </ul>
              </nav>
              <Route exact path='/welcome/:auth' component={Landing} />
              <Route exact path='/settings' component={SettingsContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </span>
    )
  }
}

let mapSateToProps = store => ({
  profile: store.profile
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token))
})

export default App;
