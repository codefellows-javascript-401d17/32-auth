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
            <Route path='/' component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </span>
    )
  }
}

export default App;
