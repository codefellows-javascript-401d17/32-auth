import superagent from 'superagent';


export const setToken = (token) => ({
  type: 'TOKEN_SET',
  payload: token
});

export const deleteToken = () => ({
  type: 'TOKEN_DELETE'
})

export const signupRequest => user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
  .withCredentials()
  .send(user)
  .then(res => {
    dispatch(setToken(res.text));
    try {
      localStorage.token = res.text;
    } catch (err) {
      console.log(err);
    }
    return res;
  })
}

export const loginRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
  .auth(uers.username, user.password)
  .withCredentials()
  .then(res => {
    dispatch(setToken(res.text));
    return res;
  })
}
