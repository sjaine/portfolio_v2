"use client";

import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

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
        title="GWSK Studio"
        role={["Design Intern"]}
        timeline={["3.5 weeks", ""]}
        team="Jane hou (Design Intern)"
        tools={["Figma, Figma Make,", "Figma Site"]}
        link="https://gwsk.studio/"
      />

      <div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="relative aspect-[9/16] w-full h-full max-h-screen overflow-hidden">
          <video
            src="/images/preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
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
              <h3>
                Still in construction! :D You can check the final result from
                here ↓
              </h3>
              <Link
                href="https://gwsk.studio/"
                target="_blank"
                className="w-full h-[660px] rounded-2xl overflow-hidden border border-gray-200"
              >
                <Image
                  src="/images/gwsk.png"
                  alt="GWSK"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </Link>
            </article>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
