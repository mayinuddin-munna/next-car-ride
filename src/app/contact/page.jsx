"use client"
import Direction from "@/components/ui/GoogleMap/Direction";
import React, { useState } from "react";

const Contact = () => {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");

  return (
    <div>
      {/* <Map /> */}
      <Direction destination={destination} origin={origin} />
      <div className="flex mt-5">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Destination
          </label>
          <input
            onBlur={(e) => setDestination(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Destination"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Origin
          </label>
          <input
            onBlur={(e) => setOrigin(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Origin"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
