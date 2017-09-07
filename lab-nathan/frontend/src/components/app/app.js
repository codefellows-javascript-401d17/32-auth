import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createStore from '../../lib/create-store.js';
import Landing from '../landing/landing.js';

let store = createStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cfgram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <ul>
                <li><Link to='/welcome/signup'>Sign Up</Link></li>
                <li><Link to='/welcome/login'>Log In</Link></li>
              </ul>
              <Route exact path='/welcome/:auth' component={Landing} />
            </section>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
