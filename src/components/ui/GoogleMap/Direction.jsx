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

const Direction = () => {
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const location = {
    lat: 23.41,
    lng: 90.4152,
  };

  //   console.log(process.env.GOOGLE_API_KEY);
  const [directionRes, setDirectionRes] = useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyC6Y7yBe9JX9V40iCq_4GhFH0SlyrwtlM4">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <DirectionsService
          options={{
            // destination: "United hospital Dhaka Bangladesh",
            // origin: "Mirpur 1 circle Dhaka Bangladesh",
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
