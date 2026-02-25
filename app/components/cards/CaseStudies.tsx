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
    thumbnail: "/images/project/trial2.png",
    description: "Improving Instagram's Accessibility for people with visual impairments.",
  },
  {
    id: "modea",
    title: "Modea",
    href: "/modea",
    thumbnail: "/images/project/pawlart.png",
    description: "Redefining context switching in remote work.",
  },
  {
    id: "gwsk",
    title: "GWSK Studio",
    href: "/gwsk",
    thumbnail: "/images/project/trial1.png",
    description: "Redesigned & Developed GWSK studio's new website.",
  },
];

type HoveredCase = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
} | null;

type CaseStudiesProps = {
  onHover: (data: HoveredCase) => void;
};

export default function CaseStudies({ onHover }: CaseStudiesProps) {
  return (
    <div className="max-w-[280px] w-full flex flex-col px-6 py-5 gap-8 items-end bg-white/50 rounded-lg border border-white">
      <div className="flex flex-col gap-2 w-full">
        {/* title */}
        <div className="flex gap-2 items-center">
          <AvailabilityDot />
          <div>CASE STUDIES</div>
        </div>
        {/* description */}
        {/* <p className="text-xs text-gray-500">
          Switch to dev case studies by turning on {"<Dev Mode>"}.
        </p> */}
      </div>

      <div className="flex w-full flex-col gap-6">
        {CASE_STUDIES.map((item, index) => (
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
      </div>
    </div>
  );
}
