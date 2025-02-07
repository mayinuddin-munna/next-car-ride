/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import AddCar from "./components/AddCar";
import nexiosInstance from "@/app/config/nexios.config";

export default async function CarManagement() {
  const res: any = await nexiosInstance.get("/cars", {
    next: {
      tags: ["carsTable"],
    },
  });

  return (
    <>
      <AddCar />

      {res?.data?.data?.map((car: any) => (
        <div key={car._id}>
          <h1>{car.name}</h1>
        </div>
      ))}
    </>
  );
}
