import { ADD_PLACE, REMOVE_PLACE } from './constants';
import { combineReducers } from 'redux';

export const places = (state = [], action) => {
  switch (action.type) {
    case ADD_PLACE:
      return [...state, action.place];
    case REMOVE_PLACE:
      return state.filter(p => p.id !== action.place.id);
    default:
      return state;
  }
};

const reducer = combineReducers({
  places
});

export default reducer;
