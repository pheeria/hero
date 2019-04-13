import React from 'react';
import Geosuggest from 'react-geosuggest';
import './Suggest.css';

const Suggest = ({ berlin, setTempLocation }) => (
  <Geosuggest
    placeholder="Anywhere"
    onSuggestSelect={suggested => {
      if (suggested) {
        setTempLocation(suggested.location);
      }
    }}
    location={
      // eslint-disable-next-line no-undef
      new google.maps.LatLng(berlin.lat, berlin.lng)
    }
    radius="20"
  />
);

export default Suggest;
