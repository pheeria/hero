import { ADD_PLACE, REMOVE_PLACE, PRESET_LOCATION } from './constants';
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

export const preset = (state = null, action) => {
  switch (action.type) {
    case PRESET_LOCATION:
      return action.location;
    default:
      return state;
  }
};

const reducer = combineReducers({
  places,
  preset
});

export default reducer;
