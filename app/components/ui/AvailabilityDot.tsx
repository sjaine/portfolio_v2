"use client";

import { motion } from "framer-motion";

export default function AvailabilityDot() {
  const ledColor = "rgba(100, 220, 110, 0.8)"; 
  const pulseColor = "rgba(100, 220, 110, 0.4)";

  return (
    <div className="relative flex items-center justify-center w-5 h-5"> 
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ 
          backgroundColor: pulseColor,
          filter: "blur(1px)", 
        }}
        animate={{
          scale: [1, 1.5],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 1], 
        }}
      />

      <motion.div
        className="relative w-[8px] h-[8px] rounded-full" 
        style={{
          backgroundColor: ledColor,
          boxShadow: `
            0 0 4px rgba(100, 220, 110, 0.3), 
            inset 0 0 2px rgba(255, 255, 255, 0.4)
          `,
        }}
        animate={{
          opacity: [0.6, 1, 0.6], 
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}