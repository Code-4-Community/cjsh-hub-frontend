import { Loader } from '@googlemaps/js-api-loader';

const MAP_ID = 'f9f754b9dbdc75f4';
export const LOADER = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  libraries: ['places'],
  mapIds: [MAP_ID],
});

export const CENTER = { lat: 42.33992691759904, lng: -71.08986968678391 };

export const ZOOM = 16.7;

export const SITES = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.08976968678391, 42.33992691759904], // lng first then lat
      },
      properties: {
        name: 'Recycling Bin',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.08986968678391, 42.33765691759904], // lng first then lat
      },
      properties: {
        name: 'Bike Stop',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.08686968678391, 42.33992691759904], // lng first then lat
      },
      properties: {
        name: 'Recycling Bin',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.09286968678391, 42.33992691759904], // lng first then lat
      },
      properties: {
        name: 'Garbage Disposal',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.08286968678391, 42.339792691759904], // lng first then lat
      },
      properties: {
        name: 'Recycling Bin',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.08985968678391, 42.34292691759904], // lng first then lat
      },
      properties: {
        name: 'Leed Building',
      },
    },
  ],
};

// modify bounds
export const NEU_BOUNDS = {
  north: 42.32,
  south: 42.3,
  west: -71.082,
  east: -71.08,
};
