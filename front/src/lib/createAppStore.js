import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from './thunk.js';
import reporter from './reporter.js';

let createAppStore = () => {
  return createStore(reducer, applyMiddleware(thunk, reporter));
};

module.exports = createAppStore;
