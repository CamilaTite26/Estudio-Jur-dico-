"use client";

import dynamic from "next/dynamic";

const MapViewInner = dynamic(
  () => import("@/components/MapView").then((mod) => mod.MapView),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full bg-gray-200">
        <span className="text-gray-500">Cargando mapa...</span>
      </div>
    ),
  }
);

interface MapViewClientProps {
  center: { lat: number; lng: number };
}

export const MapViewClient = ({ center }: MapViewClientProps) => {
  return <MapViewInner center={center} />;
};
