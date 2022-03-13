import React from "react";

import styled from "styled-components/macro";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MarkerCluster } from "./markerCluster";
import { createBrazilianMarkers } from "../../helper/brazilianStateMarkers";

const { REACT_APP_MAPBOX_KEY } = process.env;

const MapWrapper = styled(MapContainer)`
  height: 600px;
  width: 500px;
  background-color: black;
`;

const position = [-8.77, -70.55];
const mapUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
export default function MapContent() {
  const markers = createBrazilianMarkers();

  return (
    <MapWrapper center={position} zoom={3}>
      <TileLayer
        role="map"
        attribution={attribution}
        url={mapUrl}
      />
      <MarkerCluster markers={markers} addMarkers={createBrazilianMarkers} />
    </MapWrapper>
  );
}
