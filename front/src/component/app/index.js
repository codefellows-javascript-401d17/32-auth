import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Dashboard from '../dashboard';
import createAppStore from '../../lib/createAppStore.js';

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
                </ul>
              </nav>
              <Route path='/welcome/:auth' component={Dashboard} />
            </section>
          </BrowserRouter>
        </Provider>
      </span>
    )
  }
}

export default App;
