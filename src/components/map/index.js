import React, { createRef, useEffect, useState, useCallback } from 'react';
import { NEU_BOUNDS, LOADER, CENTER, ZOOM, SITES } from './constants.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MapDiv = styled.div`
  width: 100%;
`;

const Map = ({ view, zoom, lat, lng, height, initMap }) => {
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
          let map = new google.maps.Map(mapElement, {
            center: CENTER,
            zoom: ZOOM,
            fullscreenControl: false,
            mapTypeControl: false,
            restriction: {
              bounds: NEU_BOUNDS,
              strictBounds: false,
            },
          });

          map.data.addGeoJson(SITES);
          // TODO: overlay stuff later
        })
        .catch((err) => console.log(err.message));
    }
  }, [mapElement, view, zoom, lat, lng, height, initMapCallback]);

  return <MapDiv id='map' style={{ height }} ref={mapRef} />;
};

Map.propTypes = {
  view: PropTypes.object,
  zoom: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number,
  initMap: PropTypes.func,
  //height : View.propTypes.style
};

export default Map;
