"use client";

import Navbar from "../components/layout/Navbar";
import Image from "next/image";

import ProjectHeader from "../components/project/ProjectHeader";
import SideNav from "@/app/components/project/SideNav";
import { useScrollObserver } from "../components/hooks/useScrollObserver";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 20,
    duration: 0.8,
  },
} as const;

export type SectionId =
  | "tldr"
  | "overview"
  | "finalsolution"
  | "problem"
  | "problemspace"
  | "researchinsights"
  | "challenge"
  | "hmwstatement"
  | "designprinciples"
  | "userflow"
  | "figma"
  | "development"
  | "solution"
  | "reflection";

export default function InstagramProject() {
  const { activeSection, isParentActive } = useScrollObserver<SectionId>();

  return (
    <main className="pt-4 flex flex-col justify-center items-center w-screen page-gradient scroll-smooth">
      <Navbar />
      <ProjectHeader
        title="Modea"
        role={["UI/UX Designer", "Front-end Developer"]}
        timeline={["From August 2025", "To April 2026"]}
        team="Solo project"
        tools={["Figma, Visual Studio Code,", "ShortCuts, Next.js"]}
        link="/modea"
      />

      <div className="h-full w-full bg-black overflow-hidden">
        <video
          src="/images/preview.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="object-cover"
        />
      </div>

      <div className="pt-12 px-48 flex max-w-[1500px]">
        <div className="flex-[9] min-w-[840px]">
          {/* TL;DR */}
          <motion.section
            {...fadeIn}
            id="tldr"
            className="flex flex-col gap-[120px] mb-[100px] scroll-mt-20"
          >
            <article
              id="overview"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Still in construction! :D You can check the progress so far ↓</h3>
              <div className="w-full h-[480px] rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src="/thesis.pdf#toolbar=0"
                  width="100%"
                  height="100%"
                  className="border-none"
                />
              </div>
            </article>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
