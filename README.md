# simplified-redux

## Principles
- Immutable state
- Read only state, modified only by `actions`
- An `action` is a minimal object which states the intent of changing state.
 - the only mandatory key is `type`
- Reducer function - previous state + action => new state

## Store
 - It gives 3 main methods
  - *getState*
  - *dispatch*
  - *subscribe*
 - The following snippet shows the contract
 ```js
   const { createStore } = Redux;

   const store = createStore(reducerFunction);
   store.subscribe(callbackFunction);
   store.dispatch({action})
 ```
