import { Loader } from '@googlemaps/js-api-loader';

const MAP_ID = 'f9f754b9dbdc75f4';
export const LOADER = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY|| '',
  libraries: ['places'],
  mapIds: [MAP_ID],
});

// modify bounds
export const NEU_BOUNDS = {
  north: 42.4,
  south: 42.3,
  west: -71.09,
  east: -71.08,
};