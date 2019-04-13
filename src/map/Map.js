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
  ({ places, preset, berlin, center, addPlace, presetLocation, setCenter }) => {
    const [mapCenter, setMapCenter] = useState(
      (center && center.location) || preset || berlin
    );

    return (
      <GoogleMap defaultZoom={14} center={mapCenter}>
        {preset ? (
          <OverlayView
            // eslint-disable-next-line no-undef
            ref={ref => ref && google.maps.OverlayView.preventMapHitsFrom(ref)}
            onClick={e => e.preventDefault()}
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
              onClick={() => {
                presetLocation(null);
                setMapCenter(place.location);
                setCenter(place);
              }}
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
