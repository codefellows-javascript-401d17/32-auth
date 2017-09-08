import React from 'React';
import {Provider} from 'react-redux';
import {BroswerRouter, Route, Link} from 'react-router-dom';
import createStore from '../../lib/createStore.js';

let store = createStore()

class App extends React.Component {
  render() {
    return(
      <span id="app">
        <Provider store={store}>
          <BroswerRouter>
            <Route exact path='/' component={null}/>
          </BroswerRouter>
        </Provider>
      </span>
    )
  }
}

export default App;
