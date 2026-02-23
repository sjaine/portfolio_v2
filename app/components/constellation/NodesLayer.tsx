import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import GradientOrb from "@/app/components/ui/GradientOrb";
import { nodePositions, nodeLabels } from "./data";
import type { NodeId } from "./data";

interface Props {
  hovered: NodeId | null;
  onHover: (id: NodeId | null) => void;
  width: number;
  height: number;
}

const CENTER_NODE: NodeId = "jaine";
const ROLE_NODES: NodeId[] = ["uiux", "creative"];

export function NodesLayer({ hovered, onHover, width, height }: Props) {
  const prefersReducedMotion = useReducedMotion();
  if (!width || !height) return null;

  return (
    <>
      {Object.entries(nodePositions).map(([id, pos], index) => {
        const nodeId = id as NodeId;

        const x = pos.x * width;
        const y = pos.y * height;

        const isCenter = nodeId === CENTER_NODE;
        const isRole = ROLE_NODES.includes(nodeId);

        /* === floating strength === */
        const floatY = isRole ? 6 : 4;
        const floatX = isRole ? 2 : 1.5;
        const rotate = isRole ? 0.8 : 0.4;

        return (
          /* =============================== */
          /* POSITION HOLDER */
          /* =============================== */
          <div
            key={nodeId}
            className="absolute flex flex-col items-center cursor-pointer select-none"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => onHover(nodeId)}
            onMouseLeave={() => onHover(null)}
          >
            {/* =============================== */}
            {/* FLOATING VISUAL ONLY */}
            {/* =============================== */}
            <motion.div
              animate={
                prefersReducedMotion || isCenter
                  ? {}
                  : {
                      y: [-floatY, floatY],
                      x: [-floatX, floatX],
                      rotate: [-rotate, rotate],
                    }
              }
              transition={
                prefersReducedMotion || isCenter
                  ? {}
                  : {
                      duration: 4 + (index % 4),
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }
              }
              className="flex flex-col items-center"
            >
              {/* ===== NODE BODY ===== */}

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
                  mt-[6px] whitespace-nowrap tracking-wide
                  ${isCenter || isRole
                    ? "px-[10px] py-[3px] rounded-full bg-[#e5e5e5]"
                    : ""}
                ${isCenter
                    ? "text-sm" 
                    : "text-xs"
                }
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
