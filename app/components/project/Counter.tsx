"use client";

import { animate, useMotionValue, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number; 
}

export default function Counter({ to, from = 0, duration = 1, suffix = "", prefix = "", delay = 0 }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        delay: delay, 
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, to, duration, delay]);

  return (
    <div ref={ref} className="inline-block">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}