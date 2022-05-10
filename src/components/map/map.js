/* eslint-disable jsx-a11y/aria-role */
import React from "react";

import styled from "styled-components/macro";

import { MapContainer, TileLayer } from "react-leaflet";
import { MarkerCluster } from "./markerCluster";
import { createBrazilianMarkers } from "../../helper/brazilianStateMarkers";

const MapWrapper = styled(MapContainer)`
  height: 800px;
  width: 100%;
  background-color: black;
`;

const position = [-8.77, -70.55];
const mapUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
export default function MapContent() {
  const markers = createBrazilianMarkers();

  return (
    <MapWrapper center={position} zoom={4}>
      <TileLayer role="map" attribution={attribution} url={mapUrl} />
      <MarkerCluster markers={markers} addMarkers={createBrazilianMarkers} />
    </MapWrapper>
  );
}
