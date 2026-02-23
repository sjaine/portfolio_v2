"use client";

import { motion } from "framer-motion";

export default function AvailabilityDot() {
  return (
    <motion.div
      className="w-[10px] h-[10px] rounded-xs"
      style={{
        backgroundColor: "#87FD77",
      }}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
