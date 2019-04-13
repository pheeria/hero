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
    selectedPlace,
    selectPlace
  }) => {
    const [center, setCenter] = useState(
      (selectedPlace && selectedPlace.location) || tempLocation || berlin
    );

    return (
      <GoogleMap defaultZoom={14} center={center}>
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
                setCenter(place.location);
                selectPlace(place);
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
