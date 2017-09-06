import superagent from 'superagent';


export const setToken = (token) => ({
  type: 'TOKEN_SET',
  payload: 'token'
});

export const deleteToken = () => ({
  type: 'TOKEN_DELETE'
})
