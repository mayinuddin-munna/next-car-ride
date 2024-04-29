"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const location = {
    lat: 23.41,
    lng: 90.4152,
  };

  const onLoad = () => {};

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <Marker onLoad={onLoad} position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
