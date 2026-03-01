import Link from "next/link";
import LocationTimeBadge from "@/app/components/ui/LocationTimeBadge";
import AvailabilityDot from "@/app/components/ui/AvailabilityDot";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <>
      <div className="fixed pointer-events-none backdrop z-2" />
      <header className="fixed top-4 left-4 z-50">
        <nav className="text-base flex justify-center items-center gap-7">
          <Link
            href="/"
            className="relative w-[30px] h-[30px] flex items-center justify-center cursor-pointer bg-black rounded-[5px]"
          >
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 0.9 }}
              animate={{
                rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                scale: [0.9, 0.95, 0.9, 0.95, 0.9, 0.95, 0.9, 0.95, 0.9],
              }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
                times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                scale: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "backInOut",
                }
              }}
              whileHover={{
                scale: 1.0,
                rotate: 15,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
            >
              <Image
                src="/images/logo-white.svg"
                alt="Jaine Shin Logo"
                fill
                draggable={false}
                className="object-contain select-none pointer-events-none"
              />
            </motion.div>
          </Link>
          <Link
            href="/"
            className="hidden md:block relative py-1 text-base cursor-pointer select-none
            transition-colors
            before:absolute before:inset-y-0 before:-inset-x-3
            before:rounded-md before:bg-transparent
            before:transition-colors
            hover:before:bg-black/10"
          >
            /jaineysshin.com
          </Link>
          <LocationTimeBadge />
          <div className="hidden md:flex flex gap-2 items-center select-none">
            <AvailabilityDot />
            <div>AVAILABLE FOR WORK</div>
          </div>
        </nav>
      </header>
    </>
  );
}
