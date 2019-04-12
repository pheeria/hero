import React from 'react';
import uuid from 'uuid';
import Geosuggest from 'react-geosuggest';
import './Suggest.css';

const Suggest = ({ berlin, addPlace }) => (
  <Geosuggest
    placeholder="Anywhere"
    onSuggestSelect={s => {
      console.log(s);
      let place = {
        id: uuid.v4(),
        name: s.label,
        rating: 5,
        favoriteFood: 'Et',
        location: s.location
      };
      addPlace(place);
    }}
    location={
      // eslint-disable-next-line no-undef
      new google.maps.LatLng(berlin.lat, berlin.lng)
    }
    radius="20"
  />
);

export default Suggest;
