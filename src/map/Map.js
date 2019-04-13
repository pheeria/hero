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
  ({
    berlin,
    places,
    addPlace,
    tempLocation,
    setTempLocation,
    center,
    setCenter
  }) => {
    const [mapCenter, setMapCenter] = useState(
      (center && center.location) || tempLocation || berlin
    );

    return (
      <GoogleMap defaultZoom={14} center={mapCenter}>
        {tempLocation ? (
          <OverlayView
            // eslint-disable-next-line no-undef
            ref={ref => ref && google.maps.OverlayView.preventMapHitsFrom(ref)}
            onClick={e => e.preventDefault()}
            position={tempLocation}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <Card>
              <Adder
                location={tempLocation}
                addPlace={newPlace => {
                  addPlace(newPlace);
                  setTempLocation(null);
                }}
                reset={() => setTempLocation(null)}
              />
            </Card>
          </OverlayView>
        ) : (
          places.map(place => (
            <Marker
              onClick={() => {
                setTempLocation(null);
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
