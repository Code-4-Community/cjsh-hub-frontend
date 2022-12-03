import { Loader } from '@googlemaps/js-api-loader';

const MAP_ID = 'f9f754b9dbdc75f4';
export const LOADER = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY|| '',
  libraries: ['places'],
  mapIds: [MAP_ID],
});

export const CENTER = { lat: 42.33992691759904, lng: -71.08986968678391 };

export const ZOOM = 16.7;

// modify bounds
export const NEU_BOUNDS = {
  north: 42.32,
  south: 42.3,
  west: -71.082,
  east: -71.08,
};