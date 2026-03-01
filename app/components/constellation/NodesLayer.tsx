import { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import GradientOrb from "@/app/components/ui/GradientOrb";
import { nodePositions, nodeLabels } from "./data";
import type { NodeId } from "./data";
import { useState, useEffect } from "react";

interface Props {
  hovered: NodeId | null;
  onHover: (id: NodeId | null) => void;
  width: number;
  height: number;
  onCenterClick?: () => void;
}

const BUBBLE_CONTENT: Record<string, ReactNode> = {
  uiux: "I’m passionate about crafting seamless flows through user-centered solutions.",
  creative: (
    <>
      I love exploring, interacting, and expressing ideas through{" "}
      <code>&lt;code&gt;</code>!
    </>
  ),
  jaine: (
    <>
      Annyeong, Welcome :D <br />
      <span className="relative inline-block">
        <span className="relative z-10">Let me introduce myself! ↗</span>
        <span className="absolute bottom-1 left-0 w-full h-[8px] bg-yellow-200/60 -z-0 rounded-full group-hover:bg-yellow-300 transition-colors" />
      </span>
    </>
  ),
};

const ROLE_NODES: NodeId[] = ["uiux", "creative", "jaine"];
const CENTER_NODE: NodeId = "jaine";

export function NodesLayer({
  hovered,
  onHover,
  width,
  height,
  onCenterClick,
}: Props) {
  const [showInitialBubble, setShowInitialBubble] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setShowInitialBubble(true), 200);
    const endTimer = setTimeout(() => setShowInitialBubble(false), 3000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!width || !height) return null;

  return (
    <>
      {Object.entries(nodePositions).map(([id, pos], index) => {
        const nodeId = id as NodeId;
        const x = pos.x * width;
        const y = pos.y * height;

        const isCenter = nodeId === CENTER_NODE;
        const isRole = ROLE_NODES.includes(nodeId) && !isCenter;
        const isHovered = hovered === nodeId;
        const shouldShowBubble = isHovered || (isCenter && showInitialBubble);

        const isClickable = isCenter || isRole;

        const hasBubble = (isCenter || isRole) && BUBBLE_CONTENT[nodeId];

        return (
          <div
            key={nodeId}
            className="absolute flex flex-col items-center cursor-pointer select-none"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              zIndex: shouldShowBubble && hasBubble ? 50 : 1,
            }}
            onMouseEnter={() => {
              onHover(nodeId);
              setShowInitialBubble(false);
            }}
            onMouseLeave={() => onHover(null)}
            onClick={() => {
              if (isCenter && onCenterClick) {
                onCenterClick();
              }
            }}
          >
            <AnimatePresence>
              {hasBubble && shouldShowBubble && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  className="absolute bottom-full mb-7 w-50 p-3 bg-white/50 backdrop-blur-xs border border-white text-black shadow-lg rounded-2xl text-sm leading-relaxed z-50 pointer-events-none"
                >
                  {BUBBLE_CONTENT[nodeId]}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -bottom-[16px] w-8 h-8 overflow-hidden"
                    style={{
                      clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div
                      className="w-full h-full bg-white/50 backdrop-blur-md rotate-45 border-r border-b border-white"
                      style={{
                        marginTop: "-50%",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={
                shouldShowBubble
                  ? { scale: 1.1, y: -5 }
                  : { y: isClickable ? [0, -4, 0] : [0, -2, 0] }
              }
              transition={
                isHovered
                  ? { type: "spring", stiffness: 400, damping: 17 }
                  : {
                      y: {
                        duration: isClickable ? 3 : 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                    }
              }
              whileTap={isRole ? { scale: 0.95, rotate: -2 } : { scale: 0.98 }}
              className="flex flex-col items-center"
            >
              {isCenter && (
                <Image
                  src="/images/jaine.jpg"
                  alt="Jaine Shin"
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                  priority
                />
              )}

              {isRole && (
                <GradientOrb
                  src={
                    nodeId === "uiux"
                      ? "/images/gradient-orb-uiux.png"
                      : "/images/gradient-orb-ct.png"
                  }
                  size={25}
                  alt={nodeLabels[nodeId]}
                />
              )}

              {!isRole && !isCenter && (
                <svg width="8" height="8">
                  <circle cx="4" cy="4" r="4" fill="#b0b0b0" />
                </svg>
              )}

              {/* ===== LABEL ===== */}
              <span
                className={`
                  mt-[6px] whitespace-nowrap tracking-wide transition-all
                  ${
                    isCenter || isRole
                      ? "px-[10px] py-[3px] rounded-full bg-[#e5e5e5]"
                      : ""
                  }
                  ${hasBubble && isHovered ? "bg-[#6196f0]" : "text-black"}
                  ${isCenter ? "text-sm" : "text-xs"}
                `}
              >
                {nodeLabels[nodeId]}
              </span>
            </motion.div>
          </div>
        );
      })}
    </>
  );
}
