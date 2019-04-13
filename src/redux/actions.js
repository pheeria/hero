import {
  ADD_PLACE,
  REMOVE_PLACE,
  PRESET_LOCATION,
  SET_CENTER
} from './constants';

export const addPlace = place => ({
  type: ADD_PLACE,
  place
});

export const removePlace = place => ({
  type: REMOVE_PLACE,
  place
});

export const setCenter = place => ({
  type: SET_CENTER,
  place
});

export const presetLocation = location => ({
  type: PRESET_LOCATION,
  location
});
