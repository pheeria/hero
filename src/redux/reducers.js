import {
  ADD_PLACE,
  REMOVE_PLACE,
  SET_TEMP_LOCATION,
  SELECT_PLACE
} from './constants';
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

export const tempLocation = (state = null, action) => {
  switch (action.type) {
    case SET_TEMP_LOCATION:
      return action.location;
    default:
      return state;
  }
};

export const selectedPlace = (state = null, action) => {
  switch (action.type) {
    case SELECT_PLACE:
      return action.place;
    default:
      return state;
  }
};

const reducer = combineReducers({
  places,
  tempLocation,
  selectedPlace
});

export default reducer;
