import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from './List';

describe('List', () => {
  it('should render without crashing', () => {
    const places = [
      {
        id: 'uuid',
        name: 'Some Place',
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
    const wrapper = shallow(
      <List
        places={places}
        selectedPlace={{}}
        removePlace={jest.fn()}
        selectPlace={jest.fn()}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
