import { ADD_PLACE, REMOVE_PLACE, PRESET_LOCATION } from './constants';

export const addPlace = place => ({
  type: ADD_PLACE,
  place
});

export const removePlace = place => ({
  type: REMOVE_PLACE,
  place
});

export const presetLocation = location => ({
  type: PRESET_LOCATION,
  location
});
