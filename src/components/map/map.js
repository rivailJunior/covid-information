import React from "react";

import styled from "styled-components/macro";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MarkerCluster } from "./markerCluster";
import { createBrazilianMarkers } from "../../helper/brazilianStateMarkers";

const { REACT_APP_MAPBOX_KEY } = process.env;

const MapWrapper = styled(MapContainer)`
  height: 600px;
  width: 450px;
  background-color: black;
`;

const position = [-8.77, -70.55];
const mapStyleId = "mapbox/outdoors-v11";
const mapUrl = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${REACT_APP_MAPBOX_KEY}`;
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
        id={mapStyleId}
      />
      <MarkerCluster markers={markers} addMarkers={createBrazilianMarkers} />
    </MapWrapper>
  );
}
