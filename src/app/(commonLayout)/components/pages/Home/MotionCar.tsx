"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "../../../../../../public/assets/images/hero-car.svg";

export default function MotionCar() {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ y: 40, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="w-3/5 flex justify-end"
    >
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={image}
      />
    </motion.div>
  );
}
