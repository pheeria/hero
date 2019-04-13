import {
  ADD_PLACE,
  REMOVE_PLACE,
  SET_TEMP_LOCATION,
  SELECT_PLACE
} from './constants';

export const addPlace = place => ({
  type: ADD_PLACE,
  place
});

export const removePlace = place => ({
  type: REMOVE_PLACE,
  place
});

export const selectPlace = place => ({
  type: SELECT_PLACE,
  place
});

export const setTempLocation = location => ({
  type: SET_TEMP_LOCATION,
  location
});
