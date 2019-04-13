import React, { useState } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView
} from 'react-google-maps';
import Adder from '../adder/Adder';

const Map = ({
  city,
  places,
  addPlace,
  tempLocation,
  setTempLocation,
  selectedPlace,
  selectPlace
}) => {
  const [center, setCenter] = useState(
    (selectedPlace && selectedPlace.location) || tempLocation || city
  );

  return (
    <GoogleMap defaultZoom={14} center={center}>
      {tempLocation ? (
        <OverlayView
          position={tempLocation}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <Adder
            // eslint-disable-next-line no-undef
            ref={ref => ref && google.maps.OverlayView.preventMapHitsFrom(ref)}
            onClick={e => e.preventDefault()}
            location={tempLocation}
            addPlace={newPlace => {
              addPlace(newPlace);
              setTempLocation(null);
            }}
            reset={() => setTempLocation(null)}
          />
        </OverlayView>
      ) : (
        places.map(place => (
          <Marker
            key={place.id}
            onClick={() => {
              setTempLocation(null);
              setCenter(place.location);
              selectPlace(place);
            }}
            position={place.location}
          />
        ))
      )}
    </GoogleMap>
  );
};
export default withGoogleMap(Map);
