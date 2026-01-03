"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
    center: {
        lat: number;
        lng: number;
    };
    zoom?: number;
}

export function MapView({ center, zoom = 15 }: MapProps) {
    return (
        <MapContainer
            center={[center.lat, center.lng]}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[center.lat, center.lng]}>
                <Popup>
                    Estudio Jurídico Dr. Ramiro Tite
                </Popup>
            </Marker>
        </MapContainer>
    );
}

// Also keep a default export for convenience if needed
export default MapView;
