import { ADD_PLACE, REMOVE_PLACE } from './constants';

export const addPlace = place => ({
  type: ADD_PLACE,
  place
});

export const removePlace = place => ({
  type: REMOVE_PLACE,
  place
});
