import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Map from './Map';

jest.spyOn(React, 'useState').mockImplementation(v => [v, jest.fn()]);

describe('Map', () => {
  it('should render map container without crashing', () => {
    const tempLocation = {
      lat: 52.47732379999999,
      lng: 13.425160300000016
    };

    const wrapper = shallow(
      <Map
        tempLocation={tempLocation}
        places={[]}
        selectedPlace={tempLocation}
        city={tempLocation}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `calc(100vh - 64px)` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
