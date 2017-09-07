import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from './thunk.js';
import reporter from './reporter.js';

let appCreateStore = () => {
  return createStore(reducer, applyMiddleware(reporter, thunk));
}

export default appCreateStore;
