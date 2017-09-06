import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store.js';
import LandingContainer from '../landing-container';

let store = appCreateStore();

class App extends react.Component {
  render() {
    return(
      <div className='breweryBeers'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>breweries and their beers</h1>
                <nav>
                  <ul>
                    <li><link to='welcome/signup'>signup</link></li>
                    <li><link to='welcome/login'>login</link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' Component={LandingContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
