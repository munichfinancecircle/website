import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

// Fix Leaflet marker issue in Next.js
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Define locations
const locations = [
  { name: "Munich", lat: 48.1351, lng: 11.582 },
  { name: "Heilbronn", lat: 49.1427, lng: 9.2187 },
];

export default function GermanyMap() {
  const center: LatLngExpression = [51.1657, 10.4515]; // Ensure it's a valid type

  return (
    <MapContainer
      center={center as LatLngExpression} // Explicit type assertion
      zoom={6}
      style={{ width: "100%", height: "400px", borderRadius: "10px" }}
      scrollWheelZoom={false} // Disable zoom on scroll for better UX
    >
      {/* OpenStreetMap Tile Layer (Free) */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Markers for Munich & Heilbronn */}
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
