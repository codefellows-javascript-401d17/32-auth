//gives us the ability to create an action creater that deals with async ajax requests
export default store => next => action =>
  typeof action === 'function' //functions are async actions
  ? action(store.dispatch, store.getState)
  : next(action)
