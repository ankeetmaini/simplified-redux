export function createStore (reducer) {
  var state;
  var subscribers = [];

  function getState () {
    return state;
  }

  function dispatch (action) {
    state = reducer(state, action);
    subscribers.forEach(s => s());
  }

  function subscribe (callback) {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter(s => s !== callback);
    };
  }

  // call dispatch once to get the initial state with a dummy action
  dispatch({});

  return {
    dispatch,
    getState,
    subscribe
  };
}

export function combineReducers (reducers) {
  // reducers -> an object with key as state field name and value as its reducer function
  // e.g. {todos: todosReducer, visiblity: visiblityReducer}
  // managing the state subset for it.
  return (state, action) => {
    return Object.keys(reducers).reduce((prev, curr) => {
      prev[curr] = reducers[curr](state[curr], action);
      return prev;
    }, {});
  };
}
