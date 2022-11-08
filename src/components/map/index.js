import React, { createRef, useEffect, useState, useCallback } from 'react';
import { NEU_BOUNDS, LOADER } from './constants.js';
import styled from 'styled-components';
import { message } from 'antd';

const MapDiv = styled.div`
  height: 100%;
`;

let map: window.google.maps.Map;

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
          map = new google.maps.Map(mapElement, {
            center: { lat: 42.33992691759904, lng: -71.08986968678391 }, // gonna hardcode for now, lat,lng
            zoom: 1, // hardcode for now as well
            fullscreenControl: false,
            mapTypeControl: false,
            restriction: {
              latLngBounds: NEU_BOUNDS,
              strictBounds: false,
            },
          });


          // overlay stuff later

        })
        .catch((err) => message.error(err.message));
    }
  }, [mapElement, view, zoom, lat, lng, initMapCallback]);

  return (
    <>
      <MapDiv id="map" ref={mapRef} />
    </>
  );
};

export default Map;