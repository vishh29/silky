import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
export default function Map() {
  return (
    <MapContainer
      maxBounds={[
        [85, -180],
        [-85, 180],
      ]}
      style={{
        width: "100%",
        position: "relative",
        zIndex: "9",
        height: `${window.innerHeight - 160}px`,
      }}
      bounds={[
        [-85, 32.1747014618931],
        [-61.173665344979696, 42.45509353676294],
      ]}
      // whenReady={handleMapLoad}
    >
      <TileLayer
        noWrap
        minZoom={2}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
