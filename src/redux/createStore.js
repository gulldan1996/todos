import { createStore } from 'redux';
import { getNextState } from './reducer';

export const store = createStore(
  getNextState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
