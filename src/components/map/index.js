import React, { createRef, useEffect, useState, useCallback } from 'react';
import { NEU_BOUNDS, LOADER } from './constants.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MapDiv = styled.div`
  width: 100%;
  height: 90vh; // in theory should be in a container so i can set it to 100%
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
            center: { lat: 42.33992691759904, lng: -71.08986968678391 }, // gonna hardcode for now, lat,lng
            zoom: 16.7, // hardcode for now as well
            fullscreenControl: false,
            mapTypeControl: false,
            restriction: {
              bounds: NEU_BOUNDS,
              strictBounds: false,
            },
          });


          // overlay stuff later

        })
        .catch((err) => console.log(err.message));
    }
  }, [mapElement, view, zoom, lat, lng, initMapCallback]);

  return (
    <>
      <MapDiv id="map" ref={mapRef} />
    </>
  );
};

Map.propTypes = { 
  view : PropTypes.any,
  zoom : PropTypes.number,
  lat : PropTypes.number,
  lng : PropTypes.number,
  initMap : PropTypes.any 
};

export default Map;