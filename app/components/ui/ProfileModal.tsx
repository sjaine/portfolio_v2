"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import LinkButton from "./LinkButton";
import { Cross2Icon } from "@radix-ui/react-icons";

import "swiper/css";
import "swiper/css/effect-cards";

const images = [
  "/images/about/1.png",
  "/images/about/2.png",
  "/images/about/3.png",
  "/images/about/4.png",
  "/images/about/5.png",
  "/images/about/6.png",
];
const duplicatedImages = [...images, ...images, ...images];

export default function ProfileModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1000px] h-[85vh] bg-white rounded-[24px] shadow-2xl z-[9999] overflow-hidden flex flex-col"
          >
            <div className="absolute top-6 left-6 z-[10001]">
              <LinkButton
                onClick={onClose}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <Cross2Icon />
              </LinkButton>
            </div>

            <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-10 no-scrollbar">
              <div className="w-full flex flex-col md:flex-row p-0 md:p-3 justify-center items-center relative gap-8 md:gap-6 mt-8 md:mt-0">
                <motion.div
                  drag
                  dragElastic={0.2}
                  whileTap={{ scale: 1.2, rotate: 0 }}
                  initial={{ rotate: 10 }}
                  className="hidden md:block absolute top-[50%] right-4 md:top-2 md:right-4 cursor-grab active:cursor-grabbing select-none z-50 w-12 md:w-[100px]"
                >
                  <Image
                    src="/images/mouse.svg"
                    alt="Mouse"
                    width={100}
                    height={100}
                    className="object-cover"
                    draggable={false}
                  />
                </motion.div>
                <motion.div
                  drag
                  dragElastic={0.2}
                  whileTap={{ scale: 1.2, rotate: 0 }}
                  initial={{ rotate: -10 }}
                  className="hidden md:block absolute bottom-0 left-4 md:bottom-0 md:left-4 cursor-grab active:cursor-grabbing select-none z-50 w-12 md:w-[100px]"
                >
                  <Image
                    src="/images/sun.svg"
                    alt="Sun"
                    width={100}
                    height={100}
                    className="object-cover"
                    draggable={false}
                  />
                </motion.div>

                <div className="flex justify-center w-full md:w-auto">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    cardsEffect={{
                      perSlideOffset: 4,
                      perSlideRotate: 2,
                    }}
                    modules={[EffectCards]}
                    className="mySwiper w-[260px] md:w-[400px]"
                  >
                    {[
                      "/images/jaine.png",
                      "/images/about/8.png",
                      "/images/about/jaine.png",
                      "/images/about/7.png",
                    ].map((src, i) => (
                      <SwiperSlide key={i}>
                        <div className="w-5/6 p-2 md:p-3 bg-white border border-black/10 rounded-xl">
                          <Image
                            src={src}
                            alt="Jaine!"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="flex flex-col gap-6 md:gap-10">
                  <p className="font-semibold text-3xl md:text-5xl text-[#a3a3a3]">
                    Hi, I'm Jaine Shin!
                  </p>
                  <div className="flex flex-col gap-4 text-sm md:text-base">
                    <p>
                      Jaine (she/her) is a <span className="text-[#6D8EEB] font-bold">multidisciplinary designer</span> passionate
                      about bridging the gap between design and development
                      through strong, impactful visual. Over the past few years,
                      she has sharpened her front-end development skills,
                      enabling her to make her design work come alive in digital
                      spaces and collaborate seamlessly across teams with a
                      technical foundation.
                    </p>
                    <p>
                      Outside of work, you can find her{" "}
                      <span className="text-[#6D8EEB] font-bold">
                        watching films, taking photos, or climbing.
                      </span>{" "}
                      :D Track her movie journey on the{" "}
                      <a
                        href="https://filmclothing.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block group"
                      >
                        <span className="relative z-10">handmade site ↗</span>

                        <span className="absolute bottom-1 left-0 w-full h-[12px] bg-yellow-200/60 -z-0  group-hover:bg-yellow-300 transition-colors" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="px-0 py-6 md:px-3 text-sm md:text-base">
                Let me show you a little bit more...
              </h2>

              <div className="w-full overflow-hidden pb-10 mb:pb-0">
                <motion.div
                  className="flex gap-10 w-max"
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                  whileHover={{ animationPlayState: "paused" }}
                >
                  {duplicatedImages.map((src, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img
                        src={src}
                        alt=""
                        className="h-[120px] md:h-[180px] w-[200px] md:w-[280px] object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
