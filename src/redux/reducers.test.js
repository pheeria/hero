import { places, preset, center } from './reducers';
import {
  ADD_PLACE,
  REMOVE_PLACE,
  PRESET_LOCATION,
  SET_CENTER
} from './constants';

describe('Reducers', () => {
  const state = [
    {
      id: 'uuid',
      name: 'Delivery Hero',
      rating: 5,
      favoriteFood: 'Et',
      location: {
        lat: 52.5248,
        lng: 13.393141600000035
      }
    }
  ];

  it('should add a place', () => {
    const input = {
      type: ADD_PLACE,
      place: {
        id: 'uuid2',
        name: 'Berlin Cigkofte',
        rating: 5,
        favoriteFood: 'Cig kofte',
        location: {
          lat: 52.47732379999999,
          lng: 13.425160300000016
        }
      }
    };

    const expected = [
      {
        id: 'uuid',
        name: 'Delivery Hero',
        rating: 5,
        favoriteFood: 'Et',
        location: {
          lat: 52.5248,
          lng: 13.393141600000035
        }
      },
      {
        id: 'uuid2',
        name: 'Berlin Cigkofte',
        rating: 5,
        favoriteFood: 'Cig kofte',
        location: {
          lat: 52.47732379999999,
          lng: 13.425160300000016
        }
      }
    ];
    const actual = places(state, input);

    expect(actual).toEqual(expected);
  });

  it('should be able to add a place with the same name', () => {
    const input = {
      type: ADD_PLACE,
      place: {
        id: 'uuid2',
        name: 'Delivery Hero',
        rating: 5,
        favoriteFood: 'Kottbullar',
        location: {
          lat: 59.3071131,
          lng: 18.07624290000001
        }
      }
    };

    const expected = [
      {
        id: 'uuid',
        name: 'Delivery Hero',
        rating: 5,
        favoriteFood: 'Et',
        location: {
          lat: 52.5248,
          lng: 13.393141600000035
        }
      },
      {
        id: 'uuid2',
        name: 'Delivery Hero',
        rating: 5,
        favoriteFood: 'Kottbullar',
        location: {
          lat: 59.3071131,
          lng: 18.07624290000001
        }
      }
    ];
    const actual = places(state, input);

    expect(actual).toEqual(expected);
  });

  it('should remove a place', () => {
    const input = {
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

    const expected = [];
    const actual = places(state, input);

    expect(actual).toEqual(expected);
  });

  it('should preset location', () => {
    const input = {
      type: PRESET_LOCATION,
      location: {
        lat: 52.49941439999999,
        lng: 13.4481131
      }
    };

    const expected = {
      lat: 52.49941439999999,
      lng: 13.4481131
    };
    const actual = preset(null, input);

    expect(actual).toEqual(expected);
  });

  it('should clear preset', () => {
    const input = {
      type: PRESET_LOCATION,
      location: null
    };

    const expected = null;
    const actual = preset(
      {
        lat: 52.49941439999999,
        lng: 13.4481131
      },
      input
    );

    expect(actual).toEqual(expected);
  });

  it('should set center', () => {
    const input = {
      type: SET_CENTER,
      place: {
        id: 'uuid2',
        name: 'Berlin Cigkofte',
        rating: 5,
        favoriteFood: 'Cig kofte',
        location: {
          lat: 52.47732379999999,
          lng: 13.425160300000016
        }
      }
    };

    const expected = {
      id: 'uuid2',
      name: 'Berlin Cigkofte',
      rating: 5,
      favoriteFood: 'Cig kofte',
      location: {
        lat: 52.47732379999999,
        lng: 13.425160300000016
      }
    };
    const actual = center(null, input);

    expect(actual).toEqual(expected);
  });
});
