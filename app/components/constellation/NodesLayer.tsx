import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import GradientOrb from "@/app/components/ui/GradientOrb";
import { nodePositions, nodeLabels } from "./data";
import type { NodeId } from "./data";

interface Props {
  hovered: NodeId | null;
  onHover: (id: NodeId | null) => void;
  width: number;
  height: number;
  onCenterClick?: () => void; 
}

const BUBBLE_CONTENT: Record<string, string> = {
  uiux: "Crafting seamless flows with user-centered solutions :D",
  creative: "Exploring, interacting, and expressing ideas through <code>!",
  jaine: "Annyeong, Welcome! I'm Jaine Shin :DDD Click me if you want to know about me!",
};

const ROLE_NODES: NodeId[] = ["uiux", "creative", "jaine"];
const CENTER_NODE: NodeId = "jaine";

export function NodesLayer({ hovered, onHover, width, height, onCenterClick }: Props) {
  const prefersReducedMotion = useReducedMotion();
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

        const hasBubble = (isCenter || isRole) && BUBBLE_CONTENT[nodeId];

        return (
          <div
            key={nodeId}
            className="absolute flex flex-col items-center cursor-pointer select-none"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              zIndex: isHovered && hasBubble ? 50 : 1,
            }}
            onMouseEnter={() => onHover(nodeId)}
            onMouseLeave={() => onHover(null)}
            onClick={() => {
              if (isCenter && onCenterClick) {
                onCenterClick();
              }
            }}
          >
            <AnimatePresence>
              {hasBubble && isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  className="absolute bottom-full mb-7 w-48 p-3 bg-white/50 backdrop-blur-xs border border-white text-black shadow-lg rounded-2xl text-sm leading-relaxed z-50 pointer-events-none"
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
                hasBubble && isHovered
                  ? { scale: 1.1, y: -2 }
                  : { scale: 1, y: 0 }
              }
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
