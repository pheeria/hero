import React from 'react';
import Geosuggest from 'react-geosuggest';
import './Suggest.css';

const Suggest = ({ berlin, presetLocation }) => (
  <Geosuggest
    placeholder="Anywhere"
    onSuggestSelect={s => {
      console.log(s);
      if (s) {
        presetLocation(s.location);
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
