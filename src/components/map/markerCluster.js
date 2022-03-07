import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useMap } from "react-leaflet";

const markerClusters = L.markerClusterGroup();
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

const MarkerCluster = ({ markers, addMarkers }) => {
  const map = useMap();

  useEffect(() => {
    markerClusters.clearLayers();
    markers.forEach(({ position, label }) =>
      L.marker(new L.LatLng(position.lat, position.lng), {
        icon: customIcon,
      })
        .addTo(markerClusters)
        .bindPopup(label)
    );

    map.addLayer(markerClusters);
  }, [markers, map]);

  map.on("moveend", () => {
    addMarkers();

    const markersToAdd = [];

    markerClusters.clearLayers();

    markers.forEach(({ position, label }) => {
      const markerToAdd = L.marker(new L.LatLng(position.lat, position.lng), {
        icon: customIcon,
      }).bindPopup(label);

      if (markerToAdd !== undefined) {
        markersToAdd.push(markerToAdd);
      }
    });

    markerClusters.addLayers(markersToAdd);
  });

  return null;
};

export { MarkerCluster };
