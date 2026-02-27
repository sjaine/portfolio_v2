"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LinkButton from "./LinkButton";
import { Cross2Icon } from "@radix-ui/react-icons";

const PROJECT_IMAGES = [
  "/images/archive/filmclothing.gif",
  "/images/archive/vhsplayer.png",
  "/images/archive/arborday.gif",
  "/images/archive/watering.png",
  "/images/archive/book.png",
  "/images/archive/movienight.png",
  "/images/archive/movieposter.png",
];

export default function ProfileModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
                <h2>Welcome to my lab!</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {PROJECT_IMAGES.map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100 group shadow-sm border border-gray-100"
                    >
                      <Image
                        src={src}
                        alt={`Project Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}