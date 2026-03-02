"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isHidden = document.body.hasAttribute("data-hide-cursor");
      setShouldHide(isHidden);
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const checkMobile = () => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        setIsMobile(isTouch);
      };
  
      checkMobile(); 
  
      if (isMobile) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('.cursor-pointer') ||
        ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName);

      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", handleMove);
    const setPressedTrue = () => setIsPressed(true);
    const setPressedFalse = () => setIsPressed(false);

    window.addEventListener("mousedown", setPressedTrue);
    window.addEventListener("mouseup", setPressedFalse);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", setPressedTrue);
      window.removeEventListener("mouseup", setPressedFalse);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9999] border-1 backdrop-blur-[2px] border-[#B0B0B0]/50 mix-blend-multiply ${
        isHovered ? "bg-[#B0B0B0]/30" : "bg-[#B0B0B0]/20"
      }`}
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: shouldHide ? 0 : 1,
        scale: isPressed ? 0.8 : isHovered ? 1.5 : 1,
      }}
      transition={{
        opacity: { duration: 0 }, 
        scale: { type: "tween", duration: 0.15 }
      }}
    />
  );
}