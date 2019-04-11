import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(({ places, berlin }) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: berlin.lat, lng: berlin.lng }}
  >
    {places.map(place => (
      <Marker key={place.id} position={place.location} />
    ))}
  </GoogleMap>
));

export default Map;
