import { load, save } from './localStorage';
import { createStore } from 'redux';
import reducer from './reducers';

const persistedState = load();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

store.subscribe(() => save(store.getState()));

export default store;
