import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './geosuggest.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const berlin = {
  lat: 52.52000659999999,
  lng: 13.404953999999975
};

const MyMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: berlin.lat, lng: berlin.lng }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 52.5248, lng: 13.393141600000035 }} />
    )}
  </GoogleMap>
));

class App extends Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {
    return (
      <div>
        <Geosuggest
          placeholder="Anywhere"
          onSuggestSelect={this.onSuggestSelect}
          location={
            // eslint-disable-next-line
            new google.maps.LatLng(berlin.lat, berlin.lng)
          }
          radius="20"
        />
        <MyMapComponent
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
