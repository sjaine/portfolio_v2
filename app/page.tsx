"use client";

import Navbar from "@/app/components/layout/Navbar";
import SidePanel from "@/app/components/layout/SidePanel";
import ConstellationCanvas from "./components/constellation/ConstellationCanvas";
import CaseStudyPreview from "./components/layout/CaseStudyPreview";
import { useState } from "react";

type HoveredCase = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
} | null;

export default function Home() {
  const [hoveredCase, setHoveredCase] = useState<HoveredCase>(null);

  return (
    <div className="overflow-hidden gradient">
      <Navbar />
      <div className="flex flex-row items-center justify-between w-screen h-screen">
        <ConstellationCanvas hidden={!!hoveredCase} />
        <CaseStudyPreview caseStudy={hoveredCase} />
        <SidePanel onHover={setHoveredCase} />
      </div>
    </div>
  );
}
