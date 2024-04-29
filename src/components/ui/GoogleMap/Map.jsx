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

  // console.log(process.env.GOOGLE_API_KEY);

  return (
    <LoadScript googleMapsApiKey='AIzaSyC6Y7yBe9JX9V40iCq_4GhFH0SlyrwtlM4'>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <Marker onLoad={onLoad} position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
