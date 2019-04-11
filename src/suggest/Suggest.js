import React from 'react';
import Geosuggest from 'react-geosuggest';
import './Suggest.css';

const Suggest = ({ lat, lng }) => (
  <Geosuggest
    placeholder="Anywhere"
    onSuggestSelect={s => console.log(s)}
    location={
      // eslint-disable-next-line
      new google.maps.LatLng(lat, lng)
    }
    radius="20"
  />
);

export default Suggest;
