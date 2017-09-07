import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/reducers.js';
import thunk from './thunk.js';
import reporter from './reporter.js';

export default () => createStore(reducers, applyMiddleware(thunk, reporter));