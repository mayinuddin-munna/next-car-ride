"use client";

import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Direction = ({ destination, origin }) => {
  // console.log(destination, origin);
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const location = {
    lat: 23.41,
    lng: 90.4152,
  };

  const [directionRes, setDirectionRes] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <DirectionsService
          options={{
            destination,
            origin,
            travelMode: "DRIVING",
          }}
          callback={(res) => {
            if (res !== null) {
              setDirectionRes(res);
            }
          }}
        />
        {directionRes && (
          <DirectionsRenderer
            options={{
              directions: directionRes,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Direction;
