import React from 'React';
import {Provider} from 'react-redux';
import {BroswerRouter, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <span id="app">
        <Provider>
          <BroswerRouter>
            <Route exact path='/' component={null}/>
          </BroswerRouter>
        </Provider>
      </span>
    )
  }
}

export default App;
