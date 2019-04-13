import { addPlace, removePlace, setTempLocation, selectPlace } from './actions';
import {
  ADD_PLACE,
  REMOVE_PLACE,
  SET_TEMP_LOCATION,
  SELECT_PLACE
} from './constants';

describe('Actions', () => {
  it('should create addPlace action', () => {
    const input = {
      id: 'uuid',
      name: 'Delivery Hero',
      rating: 5,
      favoriteFood: 'Et',
      location: {
        lat: 52.5248,
        lng: 13.393141600000035
      }
    };

    const expected = {
      type: ADD_PLACE,
      place: {
        id: 'uuid',
        name: 'Delivery Hero',
        rating: 5,
        favoriteFood: 'Et',
        location: {
          lat: 52.5248,
          lng: 13.393141600000035
        }
      }
    };
    const actual = addPlace(input);

    expect(actual).toEqual(expected);
  });

  it('should create removePlace action', () => {
    const input = {
      id: 'uuid',
      name: 'Delivery Hero',
      rating: 5,
      favoriteFood: 'Et',
      location: {
        lat: 52.5248,
        lng: 13.393141600000035
      }
    };

    const expected = {
      type: REMOVE_PLACE,
      place: {
        id: 'uuid',
        name: 'Delivery Hero',
        rating: 5,
        favoriteFood: 'Et',
        location: {
          lat: 52.5248,
          lng: 13.393141600000035
        }
      }
    };
    const actual = removePlace(input);

    expect(actual).toEqual(expected);
  });

  it('should create selectPlace action', () => {
    const input = {
      id: 'uuid',
      name: 'Delivery Hero',
      rating: 5,
      favoriteFood: 'Et',
      location: {
        lat: 52.5248,
        lng: 13.393141600000035
      }
    };

    const expected = {
      type: SELECT_PLACE,
      place: {
        id: 'uuid',
        name: 'Delivery Hero',
        rating: 5,
        favoriteFood: 'Et',
        location: {
          lat: 52.5248,
          lng: 13.393141600000035
        }
      }
    };
    const actual = selectPlace(input);

    expect(actual).toEqual(expected);
  });

  it('should create setTempLocation action', () => {
    const input = {
      lat: 52.5248,
      lng: 13.393141600000035
    };

    const expected = {
      type: SET_TEMP_LOCATION,
      location: {
        lat: 52.5248,
        lng: 13.393141600000035
      }
    };
    const actual = setTempLocation(input);

    expect(actual).toEqual(expected);
  });
});
