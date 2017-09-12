import validate from '../lib/validation.js';

let profileReqs = ['avatar', 'email', 'bio', '_id', 'owner', 'username'];

module.exports = (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'PROFILE_CREATE':
      validate(payload, profileReqs);
      return payload;
    case 'PROFILE_UPDATE':
      validate(payload, profileReqs);
      return {...state, ...payload};
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}
