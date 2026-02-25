"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import LinkButton from "./LinkButton";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function ProfileModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef) return;

    const updateScale = () => {
      const paddingFactor = 0.6;
      const newScale = (containerRef.offsetWidth / 1920) * paddingFactor;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [containerRef, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            ref={setContainerRef}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1300px] bg-white rounded-[24px] p-12 shadow-2xl z-[100] overflow-scroll h-[800px]"
          >
            <LinkButton
            onClick={onClose}
            className="absolute top-6 left-6 text-gray-400 hover:text-black transition-colors"
            >
              <Cross2Icon />
            </LinkButton>

            <div className="h-[450px] flex">
                <div
                className="aspect-video"
                style={{
                    width: "1920px",
                    height: "1080px",
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    left: "0px",
                    top: "0px",
                }}
                >
                <iframe
                    src="https://filmclothing.vercel.app/"
                    className="w-full h-full border-none pointer-events-auto"
                    title="Film Clothing"
                    loading="lazy"
                    style={{ willChange: "transform" }}
                />
                </div>
                <p>FilmsClothing</p>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
