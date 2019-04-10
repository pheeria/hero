import { load, save } from './localStorage';
import { createStore } from 'redux';
import reducer from './reducers';

const persistedState = load();

const store = createStore(reducer, persistedState);

store.subscribe(() => save(store.getState()));

export default store;
