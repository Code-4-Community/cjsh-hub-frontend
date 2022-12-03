import React, { createRef, useEffect, useState, useCallback } from 'react';
import { NEU_BOUNDS, LOADER, CENTER, ZOOM} from './constants.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MapDiv = styled.div`
  width: 100%;
  height: 100%; // in theory should be in a container so i can set it to 100%
`;

const Map = ({
  view,
  zoom,
  lat,
  lng,
  initMap
}) => {

  const initMapCallback = useCallback(initMap, []);

  const mapRef = createRef();

  const [mapElement, setMapElement] = useState(mapRef.current);

  useEffect(() => {
    setMapElement(mapRef.current);
  }, [mapRef]);

  useEffect(() => {
    if (mapElement) {
      LOADER.load()
        .then((google) => {
          new google.maps.Map(mapElement, {
            center: CENTER,
            zoom : ZOOM, 
            fullscreenControl: false,
            mapTypeControl: false,
            restriction: {
              bounds: NEU_BOUNDS,
              strictBounds: false,
            },
          });

          // TODO: overlay stuff later

        })
        .catch((err) => console.log(err.message));
    }
  }, [mapElement, view, zoom, lat, lng, initMapCallback]);

  return (
    <MapDiv id="map" ref={mapRef} />
  );
};

Map.propTypes = { 
  view : PropTypes.object,
  zoom : PropTypes.number,
  lat : PropTypes.number,
  lng : PropTypes.number,
  initMap : PropTypes.func
};

export default Map;