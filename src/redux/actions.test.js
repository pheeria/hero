import { addPlace, removePlace, presetLocation } from './actions';
import { ADD_PLACE, REMOVE_PLACE, PRESET_LOCATION } from './constants';

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

  it('should create presetLocation action', () => {
    const input = {
      lat: 52.5248,
      lng: 13.393141600000035
    };

    const expected = {
      type: PRESET_LOCATION,
      location: {
        lat: 52.5248,
        lng: 13.393141600000035
      }
    };
    const actual = presetLocation(input);

    expect(actual).toEqual(expected);
  });
});
