import Link from "next/link";
import AvailabilityDot from "@/app/components/ui/AvailabilityDot";
import CaseStudyItem from "@/app/components/ui/CaseStudy";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CASE_STUDIES = [
  {
    id: "Instagram Accessibility",
    title: "Instagram Accessibility",
    href: "/instagram",
    thumbnail: "/images/instagram/instagram.mp4",
    posterUrl: "/images/instagram/instagram.png",
    description:
      "Improving Instagram's Accessibility for people with visual impairments.",
  },
  {
    id: "modea",
    title: "Modea",
    href: "/modea",
    thumbnail: "/images/preview.png",
    description: "Redefining context switching in remote work.",
  },
  {
    id: "gwsk",
    title: "GWSK Studio",
    href: "/gwsk",
    thumbnail: "/images/gwsk.png",
    description: "Redesigned & Developed GWSK studio's new website.",
  },
];

const DEV_STUDIES = [
  {
    id: "filmsclothing",
    title: "Filmsclothing",
    href: "https://filmclothing.vercel.app/",
    thumbnail: "/images/archive/filmsclothing.mp4",
    posterUrl: "/images/instagram/instagram.png",
    description:
      "Track my movie records!",
  },
  {
    id: "mminfo",
    title: "MMINFO",
    href: "https://mminfo.vercel.app/",
    thumbnail: "/images/archive/mminfo.mp4",
    posterUrl: "/images/instagram/instagram.png",
    description: "Mood-based AI Recommendations integrating Gemini API.",
  },
  {
    id: "pcv records",
    title: "PCV Records",
    href: "/",
    thumbnail: "/images/preview2.png",
    description: "Coming Soon...",
  },
];

type HoveredCase = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  posterUrl?: string;
} | null;

type CaseStudiesProps = {
  onHover: (data: HoveredCase) => void;
};

export default function CaseStudies({ onHover }: CaseStudiesProps) {
  const [isDevMode, setIsDevMode] = useState(false);
  const currentStudies = isDevMode ? DEV_STUDIES : CASE_STUDIES;

  return (
    <div className="max-w-full md:max-w-[280px] min-w-[250px] w-full flex flex-col px-4 md:px-6 py-5 gap-5 items-end bg-white/50 rounded-lg border border-white select-none">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center select-none">
            <AvailabilityDot />
            <div className="text-sm md:text-base">CASE STUDIES</div>
          </div>

          <button
            onClick={() => setIsDevMode(!isDevMode)}
            className="group relative flex items-center justify-center bg-black hover:bg-black/70 transition-colors px-3 py-1.5 md:py-0 rounded-full overflow-hidden shadow-sm cursor-pointer"
          >
            <div className="invisible flex flex-col h-0 opacity-0 pointer-events-none text-sm uppercase py-2">
              <span>Design</span>
              <span>Dev</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.span
                key={isDevMode ? "dev" : "design"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="absolute text-white text-sm uppercase whitespace-nowrap"
              >
                {isDevMode ? "Dev" : "UI/UX"}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <p className="text-xs leading-relaxed text-gray-500">
          {isDevMode
            ? "Switch to UI/UX case studies by turning on <UI/UX Mode>."
            : "Switch to dev case studies by turning on <Dev Mode>."}
        </p>
      </div>

      <div className="relative w-full">
        <div className="invisible pointer-events-none">
          <div className="flex flex-col gap-6">
            {(CASE_STUDIES.length >= DEV_STUDIES.length ? CASE_STUDIES : DEV_STUDIES).map((item, index) => (
              <CaseStudyItem
                key={`ghost-${item.id}`}
                id={item.id}
                index={index + 1}
                title={item.title}
                href={item.href}
                thumbnail={item.thumbnail}
                description={item.description}
                onHover={() => {}}
                onLeave={() => {}}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={isDevMode ? "dev" : "design"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6 w-full"
            >
              {(isDevMode ? DEV_STUDIES : CASE_STUDIES).map((item, index) => (
                <CaseStudyItem
                  id={item.id}
                  key={item.id}
                  index={index + 1}
                  title={item.title}
                  href={item.href}
                  thumbnail={item.thumbnail}
                  description={item.description}
                  onHover={onHover}
                  onLeave={() => onHover(null)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
