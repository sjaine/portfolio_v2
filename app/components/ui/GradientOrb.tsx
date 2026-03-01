"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GradientOrbProps = {
  src: string;
  size?: number;
  alt?: string;
};

export default function GradientOrb({
  src,
  size = 16,
  alt = "",
}: GradientOrbProps) {
  return (
    <motion.span
      className="inline-block rounded-full overflow-hidden"
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.08, 1],
      }}
      transition={{
        rotate: {
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        },
        scale: {
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        },
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size * 2}
        height={size * 2}
        draggable={false}
        className="h-full w-full object-cover"
        priority={size > 24}
      />
    </motion.span>
  );
}
