import React from 'react';
import uuid from 'uuid';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adder from './Adder';

describe('Map', () => {
  it('should render without crashing', () => {
    const tempLocation = {
      lat: 52.47732379999999,
      lng: 13.425160300000016
    };

    const wrapper = shallow(
      <Adder location={tempLocation} reset={jest.fn()} addPlace={jest.fn()} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should mount without crashing', () => {
    const tempLocation = {
      lat: 52.47732379999999,
      lng: 13.425160300000016
    };

    const wrapper = mount(
      <Adder location={tempLocation} reset={jest.fn()} addPlace={jest.fn()} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should reset the form', () => {
    const reset = jest.fn();
    const wrapper = mount(
      <Adder location={{}} reset={reset} addPlace={jest.fn()} />
    );

    wrapper.find('Form').simulate('reset');
    expect(reset).toHaveBeenCalled();
  });

  it('should not submit the unfilled form', () => {
    const addPlace = jest.fn();
    const wrapper = mount(
      <Adder location={{}} reset={jest.fn()} addPlace={addPlace} />
    );

    wrapper.find('Form').simulate('submit');
    expect(addPlace).not.toHaveBeenCalled();
  });

  it('should submit the form', () => {
    const uuidSpy = jest.spyOn(uuid, 'v4').mockReturnValue('uuid/v4');

    const tempLocation = {
      lat: 52.47732379999999,
      lng: 13.425160300000016
    };
    const addPlace = jest.fn();

    const wrapper = mount(
      <Adder location={tempLocation} reset={jest.fn()} addPlace={addPlace} />
    );

    wrapper
      .find('input#name')
      .simulate('change', { target: { value: 'Café Pelmeni' } });
    wrapper
      .find('input#favoriteFood')
      .simulate('change', { target: { value: 'Pelmeni' } });

    wrapper.find('Form').simulate('submit');

    expect(uuidSpy).toHaveBeenCalled();
    expect(addPlace).toHaveBeenCalledWith({
      favoriteFood: 'Pelmeni',
      id: 'uuid/v4',
      location: { lat: 52.47732379999999, lng: 13.425160300000016 },
      name: 'Café Pelmeni',
      rating: 3
    });
  });
});
