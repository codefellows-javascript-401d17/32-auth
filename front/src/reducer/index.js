import {combineReducers} from 'redux';
import auth from './auth.js';
import profile from './profile.js'

module.exports = combineReducers({
  auth,
  profile
});
