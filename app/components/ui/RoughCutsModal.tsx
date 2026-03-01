"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LinkButton from "./LinkButton";
import { Cross2Icon } from "@radix-ui/react-icons";

const PROJECT_DATA = [
  {
    src: "/images/archive/filmsclothing.mp4",
    label: "Filmsclothing: My Movie Records",
    symbol: "↗",
    link: "https://filmclothing.vercel.app/",
  },
  {
    src: "/images/archive/mminfo.mp4",
    label: "MMINFO: Mood-based AI Recommendations",
    symbol: "↗",
    link: "https://mminfo.vercel.app/",
  },
  { src: "/images/archive/vhsplayer.png", label: "Retro VHS Player Interface" },
  { src: "/images/archive/arborday.gif", label: "Arbor Day Celebration" },
  { src: "/images/archive/watering.png", label: "UI Design" },
  { src: "/images/archive/book.png", label: "Book Cover Design" },
  {
    src: "/images/archive/movienight.png",
    label: "Movie Night Poster",
  },
  { src: "/images/archive/movieposter.png", label: "Graphic Poster Design" },
];

export default function ProfileModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

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
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                key="cursor-box"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  left: mousePos.x,
                  top: mousePos.y,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  left: mousePos.x,
                  top: mousePos.y,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="fixed pointer-events-none z-[1000] px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/50 shadow-xl rounded-xl text-sm font-medium text-black flex items-center justify-center whitespace-nowrap"
                style={{
                  translateX: "-50%",
                  translateY: "-120%",
                }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 1000,
                  mass: 0.2,
                  opacity: { duration: 0.05 },
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span>{PROJECT_DATA[hoveredIndex].label}</span>

                  {PROJECT_DATA[hoveredIndex].link && (
                    <span className="text-black/70 font-light">
                      {PROJECT_DATA[hoveredIndex].symbol}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1300px] bg-white rounded-[24px] shadow-2xl z-[100] h-[80vh] flex flex-col overflow-hidden"
          >
            <LinkButton
              onClick={onClose}
              className="absolute top-6 left-6 text-gray-400 hover:text-black transition-colors z-[101]"
            >
              <Cross2Icon />
            </LinkButton>

            <div className="flex-1 overflow-y-auto no-scrollbar p-12 pt-20">
              <div className="flex flex-col gap-8 mt-4">
                <h2 className="text-2xl font-bold">Welcome to my lab!</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PROJECT_DATA.map((item, index) => {
                    const isVideo = item.src.endsWith(".mp4");
                    const hasLink = !!item.link;

                    return (
                      <div key={index} className="flex flex-col gap-3">
                        <motion.div
                          key={index}
                          onMouseMove={handleMouseMove}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onClick={() =>
                            hasLink && window.open(item.link, "_blank")
                          }
                          className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100 group shadow-sm border border-gray-100 cursor-none"
                        >
                          {isVideo ? (
                            <video
                              src={item.src}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <Image
                              src={item.src}
                              alt={item.label}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                        </motion.div>

                        <div
                          className="md:hidden flex items-center justify-between px-1"
                          onClick={() =>
                            hasLink && window.open(item.link, "_blank")
                          }
                        >
                          <span className="text-sm font-medium text-black/80">
                            {item.label}
                          </span>
                          {hasLink && (
                            <span className="text-black/40 text-xs">
                              {item.symbol}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
