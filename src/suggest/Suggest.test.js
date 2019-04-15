import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Suggest from './Suggest';

describe('Suggest', () => {
  it('should render without crashing', () => {
    const tempLocation = {
      lat: 52.47732379999999,
      lng: 13.425160300000016
    };

    const wrapper = shallow(
      <Suggest setTempLocation={jest.fn()} city={tempLocation} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
