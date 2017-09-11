import {combineReducers} from 'redux';
import tokenReducer from './token-reducer.js';
import profileReducer from './profile-reducer.js';

export default combineReducers({
  token: tokenReducer,
  profile: profileReducer
});