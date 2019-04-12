import React, { useState } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView
} from 'react-google-maps';
import { Card } from 'antd';
import Adder from '../adder/Adder';

const Map = withGoogleMap(
  ({ places, preset, berlin, addPlace, presetLocation }) => {
    const [center, setCenter] = useState(preset || berlin);

    return (
      <GoogleMap defaultZoom={14} center={center}>
        {preset ? (
          <OverlayView
            position={preset}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <Card>
              <Adder
                location={preset}
                addPlace={newPlace => {
                  addPlace(newPlace);
                  presetLocation(null);
                }}
                reset={() => presetLocation(null)}
              />
            </Card>
          </OverlayView>
        ) : (
          places.map(place => (
            <Marker
              onClick={() => setCenter(place.location)}
              key={place.id}
              position={place.location}
            />
          ))
        )}
      </GoogleMap>
    );
  }
);

export default Map;
