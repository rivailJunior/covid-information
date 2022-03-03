import React from "react";

import styled from "styled-components/macro";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const { REACT_APP_MAPBOX_KEY } = process.env;

const MapWrapper = styled(MapContainer)`
  height: 360px;
  background-color: black;
`;

const position = [51.505, -0.09];

export default function MapContent() {
  return (
    <MapWrapper center={position} zoom={13}>
      <TileLayer
        role="map"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${REACT_APP_MAPBOX_KEY}`}
        id="mapbox/streets-v11"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapWrapper>
  );
}
