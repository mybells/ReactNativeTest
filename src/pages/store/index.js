import {createStore} from 'redux';

function reducer(state = {num: 0}, action) {
  let newState = {...state};
  switch (action.type) {
    case 'INCREMENT':
      newState.num++;
      return newState;
    case 'DECREMENT':
      newState.num--;
      return newState;
    default:
      return newState;
  }
}

let store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

export {store};
