import React from 'react';
import Geosuggest from 'react-geosuggest';
import './Suggest.css';

const Suggest = ({ city, setTempLocation }) => (
  <Geosuggest
    placeholder="Anywhere"
    onSuggestSelect={suggested => {
      if (suggested) {
        setTempLocation(suggested.location);
      }
    }}
    location={
      // eslint-disable-next-line no-undef
      new google.maps.LatLng(city.lat, city.lng)
    }
    radius="20"
  />
);

export default Suggest;
