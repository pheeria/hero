import React from 'react';
import Geosuggest from 'react-geosuggest';
import './Suggest.css';

const Suggest = ({ lat, lng, addPlace }) => (
  <Geosuggest
    placeholder="Anywhere"
    onSuggestSelect={({ label, location }) => {
      let newPlace = {
        id: label,
        name: label,
        rating: 5,
        favoriteFood: 'Et',
        location
      };
      addPlace(newPlace);
    }}
    location={
      // eslint-disable-next-line
      new google.maps.LatLng(lat, lng)
    }
    radius="20"
  />
);

export default Suggest;
