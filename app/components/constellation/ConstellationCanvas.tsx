"use client";

import { useState, useEffect } from "react";
import { NodesLayer } from "./NodesLayer";
import { LinesLayer } from "./LinesLayer";
import { useCanvasSize } from "./useCanvasSize";
import type { NodeId } from "./data";

import ProfileModal from "../ui/ProfileModal";

const SCALE_MD = 1750;
const SCALE_XL = 1980;
const SCALE_SM = 1100;

type ConstellationCanvasProps = {
  hidden?: boolean;
};

export default function ConstellationCanvas({
  hidden = false,
}: ConstellationCanvasProps) {
  const { ref, size } = useCanvasSize();
  const [hovered, setHovered] = useState<NodeId | null>(null);
  const [scale, setScale] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;

      if (width >= SCALE_XL) {
        setScale(1.2);
      } else if (width >= SCALE_MD) {
        setScale(1.2);
      } else if (width <= SCALE_SM) {
        setScale (1.1);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="flex justify-center items-center w-full overflow-hidden">

      <div
        className={`hidden md:block max-w-[1400px] overflow-hidden
          transition-all duration-500 ease-in-out
          ${hidden ? "opacity-0 pointer-events-none" : "w-full opacity-100"}`}
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {/* aspect-ratio canvas */}
        <div ref={ref} className="relative w-full aspect-[3/2]">
          {/* Lines */}
          <div className="absolute inset-0 z-10 pointer-events-none isolate">
            <LinesLayer
              hovered={hovered}
              width={size.width}
              height={size.height}
            />
          </div>

          {/* Nodes */}
          <div className="absolute inset-0 z-20 isolate">
            <NodesLayer
              hovered={hovered}
              onHover={setHovered}
              width={size.width}
              height={size.height}
              // 중앙 노드 클릭 시 모달 오픈 함수 전달
              onCenterClick={() => setIsModalOpen(true)} 
            />
          </div>
        </div>

        {/* Profile Modal 연결 */}
        <ProfileModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>

    </div>
  );
}
