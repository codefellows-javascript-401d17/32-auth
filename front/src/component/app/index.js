import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createStore from '../../lib/createStore';

let store = createStore();

class App extends React.Component {
  render() {
    return(
      <span className='auth-lab'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
            <nav>
              <ul>
                <li><Link to='/welcome/signup'>signup</Link></li>
                <li><Link to='/welcome/login'>login</Link></li>
              </ul>
            </nav>
            <Route path='/welcome/:auth' component={Dashboard}/>
            </div>
          </BrowserRouter>
        </Provider>
      </span>
    )
  }
}

export default App;
