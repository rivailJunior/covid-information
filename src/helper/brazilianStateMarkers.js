import { brazilianLatLongs } from "../mocks/brazilianStatesLatLng";

const createBrazilianMarkers = () => {
  const markers = [];
  Object.keys(brazilianLatLongs).map((item) => {
    const marker = brazilianLatLongs[item];
    markers.push({
      label: `${item}`,
      position: {
        lng: marker[1],
        lat: marker[0],
      },
    });
  });
  return markers;
};

export { createBrazilianMarkers };
