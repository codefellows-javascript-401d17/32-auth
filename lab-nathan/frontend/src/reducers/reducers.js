import {combineReducers} from 'redux';
import tokenReducer from './token-reducer.js';

export default combineReducers({
  token: tokenReducer
});