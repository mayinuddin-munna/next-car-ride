"use client";

import { Button } from "@heroui/button";

const BannerButton = () => {
  return (
    <div className="space-x-4">
      <Button onPress={() => console.log("Hello")} color="primary" radius="sm">
        Book Now
      </Button>
      <Button color="primary" variant="bordered" radius="sm">
        Learn More
      </Button>
    </div>
  );
};

export default BannerButton;
