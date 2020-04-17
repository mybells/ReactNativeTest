import {createStore} from 'redux';

function counter(state = {num: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      state.num++;
      return state;
    case 'DECREMENT':
      state.num--;
      return state;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

export {store};
