import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(({ places, berlin }) => {
  const [center, setCenter] = useState(berlin);
  return (
    <GoogleMap defaultZoom={14} center={center}>
      {places.map(place => (
        <Marker
          onClick={() => setCenter(place.location)}
          key={place.id}
          position={place.location}
        />
      ))}
    </GoogleMap>
  );
});

export default Map;
