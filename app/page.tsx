"use client";

import Navbar from "@/app/components/layout/Navbar";
import SidePanel from "@/app/components/layout/SidePanel";
import ConstellationCanvas from "./components/constellation/ConstellationCanvas";
import CaseStudyPreview from "./components/layout/CaseStudyPreview";
import { useState, useEffect } from "react";

type HoveredCase = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
} | null;

export default function Home() {
  const [hoveredCase, setHoveredCase] = useState<HoveredCase>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleHover = (data: HoveredCase) => {
    if (isMobile) return;
    setHoveredCase(data);
  };

  return (
    <div className="overflow-hidden gradient scrollbar-hide">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between w-screen h-screen">
        <div className="relative flex-1 flex items-center justify-center h-full">
          <ConstellationCanvas hidden={!isMobile && !!hoveredCase} />
          
          {!isMobile && hoveredCase && (
            <div className="absolute inset-0 flex items-center justify-center">
               <CaseStudyPreview caseStudy={hoveredCase} />
            </div>
          )}
        </div>
        
        <SidePanel onHover={handleHover} />
      </div>

      <div className="fixed top-4 right-4 md:top-auto md:right-auto md:bottom-4 md:left-4 ![letter-spacing:0em] point uppercase text-[9px] md:text-sm leading-[120%] z-[99] pointer-events-none ">© 2026 Jaine Shin. <br className="md:hidden" />
  {" "}Hand-coded with {"<3"}</div>
    </div>
  );
}