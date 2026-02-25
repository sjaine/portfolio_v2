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

const images = ["/images/about/1.png", "/images/about/2.png", "/images/about/3.png", "/images/about/4.png", "/images/about/5.png", "/images/about/6.png"];
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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1000px] h-[800px] bg-white rounded-[24px] p-10 shadow-2xl z-[9999] overflow-x-hidden overflow-y-scroll"
          >
            <LinkButton
            onClick={onClose}
            className="absolute top-6 left-6 text-gray-400 hover:text-black transition-colors"
            >
              <Cross2Icon />
            </LinkButton>

            <div className="w-full flex flex-row p-3 justify-center items-center relative">
              <motion.div
                drag
                dragElastic={0.2}
                whileTap={{ scale: 1.2, rotate: 0 }}
                initial={{ rotate: 10 }}
                className="absolute top-2 right-4 cursor-grab active:cursor-grabbing select-none z-50"
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
                className="absolute bottom-0 left-4 cursor-grab active:cursor-grabbing select-none z-50"
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
              <Swiper
                effect={"cards"}
                grabCursor={true}
                cardsEffect={{
                  perSlideOffset: 4,
                  perSlideRotate: 2,
                }}
                modules={[EffectCards]}
                className="mySwiper w-[400px]"
              >
                <SwiperSlide>
                  <div className="w-5/6 p-3 bg-white border border-black/10 rounded-xl">
                    <Image
                      src="/images/jaine.png"
                      alt="Jaine!"
                      width={500}
                      height={500}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-5/6 p-3 bg-white border border-black/10 rounded-xl">
                    <Image
                      src="/images/about/8.png"
                      alt="Jaine!"
                      width={500}
                      height={500}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-5/6 p-3 bg-white border border-black/10 rounded-xl">
                    <Image
                      src="/images/about/jaine.png"
                      alt="Jaine!"
                      width={500}
                      height={500}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-5/6 p-3 bg-white border border-black/10 rounded-xl">
                    <Image
                      src="/images/about/7.png"
                      alt="Jaine!"
                      width={500}
                      height={500}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="flex flex-col gap-10 ">
                <p className="font-semibold text-5xl text-[#a3a3a3]">
                  Meet Jaine Shin!
                </p>
                <p>
                  Jaine (she/her) is a multidisciplinary designer passionate
                  about bridging the gap between design and development through
                  strong, impactful visual. Over the past few years, she has
                  sharpened her front-end development skills, enabling her to
                  make her design work come alive in digital spaces and
                  collaborate seamlessly across teams with a technical
                  foundation.
                </p>
                <p>
                  Outside of work, you can find her watching films, taking
                  photos, or climbing. Track her movie journey on the handmade
                  site!
                </p>
              </div>
            </div>

            <h2 className="px-6 py-6">Let me show you a little bit more...</h2>

            <div className="w-full overflow-hidden">
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
                      className="h-[180px] w-[280px] object-cover rounded-lg"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
