import React, { useState } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView
} from 'react-google-maps';
import Adder from '../adder/Adder';
import { Card } from 'antd';

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
      {places.map(place => (
        <OverlayView
          key={place.id}
          position={place.location}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <Card>
            <Adder />
          </Card>
        </OverlayView>
      ))}
    </GoogleMap>
  );
});

export default Map;
