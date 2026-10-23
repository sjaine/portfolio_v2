import { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import GradientOrb from "@/app/components/ui/GradientOrb";
import {
  nodePositions,
  TABLET_POSITIONS,
  nodeLabels,
  nodeCaseStudies,
} from "./data";
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
  scale = 1,
}: Props & { scale?: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isJaineHovered, setIsJaineHovered] = useState(false);
  const [showInitialBubble, setShowInitialBubble] = useState(false);
  const [isBubbleHovered, setIsBubbleHovered] = useState(false);
  // 말풍선 위에서는 따라다니는 커서 라벨 대신 기본 포인터를 보여줌
  const showCursorLabel = isJaineHovered && !isBubbleHovered;
  const currentPositions = scale <= 0.9 ? TABLET_POSITIONS : nodePositions;

  useEffect(() => {
    if (showCursorLabel) {
      document.body.setAttribute("data-hide-cursor", "true");
    } else {
      document.body.removeAttribute("data-hide-cursor");
    }
    return () => document.body.removeAttribute("data-hide-cursor");
  }, [showCursorLabel]);

  // 첫 화면이 자리 잡은 뒤 등장하고, 사용자가 노드에 처음 호버할 때까지 유지
  // (닫히는 건 각 노드의 onMouseEnter에서 처리)
  useEffect(() => {
    const startTimer = setTimeout(() => setShowInitialBubble(true), 900);
    return () => clearTimeout(startTimer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / scale,
      y: (e.clientY - rect.top) / scale,
    });
  };

  if (!width || !height) return null;

  return (
    <div onMouseMove={handleMouseMove} className="relative w-full h-full">
      <AnimatePresence>
        {showCursorLabel && (
          <motion.div
            key="jaine-cursor"
            initial={{
              opacity: 0,
              scale: 0.5,
              left: mousePos.x,
              top: mousePos.y,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              left: mousePos.x,
              top: mousePos.y,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute pointer-events-none z-[1000] px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/50 shadow-xl rounded-xl text-sm font-medium text-black/80 flex items-center justify-center whitespace-nowrap"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              translateX: "-50%",
              translateY: "-80%",
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 1000,
              mass: 0.2,
              opacity: { duration: 0.05 },
            }}
          >
            Click to see profile!
          </motion.div>
        )}
      </AnimatePresence>

      {Object.entries(currentPositions).map(([id, pos], index) => {
        const nodeId = id as NodeId;
        const x = pos.x * width;
        const y = pos.y * height;

        const isCenter = nodeId === CENTER_NODE;
        const isRole = ROLE_NODES.includes(nodeId) && !isCenter;
        const isHovered = hovered === nodeId;
        const shouldShowBubble = isHovered || (isCenter && showInitialBubble);

        const isClickable = isCenter || isRole;
        const hasBubble = (isCenter || isRole) && BUBBLE_CONTENT[nodeId];

        const caseStudy = nodeCaseStudies[nodeId];
        const isLifted = shouldShowBubble || (isHovered && !!caseStudy);

        return (
          <div
            key={nodeId}
            className={`absolute flex flex-col items-center select-none ${
              isCenter ? "cursor-none" : "cursor-pointer"
            }`}
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              zIndex:
                (shouldShowBubble && hasBubble) || (isHovered && caseStudy)
                  ? 50
                  : 1,
            }}
            onMouseEnter={() => {
              onHover(nodeId);
              if (isCenter) setIsJaineHovered(true);
              setShowInitialBubble(false);
            }}
            onMouseLeave={() => {
              onHover(null);
              if (isCenter) setIsJaineHovered(false);
            }}
            onClick={() => {
              if (isCenter && onCenterClick) {
                setIsJaineHovered(false);
                setIsBubbleHovered(false);
                document.body.removeAttribute("data-hide-cursor");
                onCenterClick();
              } else if (caseStudy?.link) {
                window.location.href = caseStudy.link;
              }
            }}
          >
            <AnimatePresence>
              {hasBubble && shouldShowBubble && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  onMouseEnter={isCenter ? () => setIsBubbleHovered(true) : undefined}
                  onMouseLeave={isCenter ? () => setIsBubbleHovered(false) : undefined}
                  className={`absolute bottom-full mb-7 w-50 p-3 bg-white/50 backdrop-blur-xs border border-white text-black shadow-lg rounded-2xl text-sm leading-relaxed z-50 ${
                    isCenter
                      ? // 클릭 가능 + 말풍선과 사진 사이 간격(mb-7)을 투명 영역으로 이어서
                        // 말풍선에서 사진으로 내려갈 때 호버가 끊기지 않게 함
                        "group cursor-pointer pointer-events-auto after:absolute after:inset-x-0 after:top-full after:h-7"
                      : "pointer-events-none"
                  }`}
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

            <AnimatePresence>
              {caseStudy && isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  className="absolute bottom-full mb-5 w-48 p-2.5 bg-white/50 backdrop-blur-md border border-white text-black shadow-lg rounded-2xl z-50 pointer-events-none flex flex-col gap-2 items-center z-600"
                >
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/50">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative inline-block w-fit px-1">
                    <span className="relative z-10 text-xs font-semibold text-center block">
                    Featured Project ↗
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[8px] bg-yellow-200/60 -z-0 rounded-full" />
                  </div>

                  <div
                    className="absolute left-1/2 -translate-x-1/2 -bottom-[16px] w-8 h-8 overflow-hidden"
                    style={{
                      clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div
                      className="w-full h-full bg-white/60 backdrop-blur-md rotate-45 border-r border-b border-white"
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
                isLifted
                  ? { scale: 1.1, y: -5 }
                  : { y: isClickable ? [0, -4, 0] : [0, -2, 0] }
              }
              transition={
                // animate와 같은 조건을 써야 함: 떠 있는 상태에 반복 transition이
                // 적용되면 y가 -5까지 천천히 오른 뒤 처음으로 튀어 돌아감
                isLifted
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
                  width={scale <= 0.9 ? 80 : 100}
                  height={scale <= 0.9 ? 80 : 100}
                  priority
                  draggable={false}
                  className="rounded-md object-cover"
                />
              )}

              {isRole && (
                <GradientOrb
                  src={
                    nodeId === "uiux"
                      ? "/images/gradient-orb-uiux.png"
                      : "/images/gradient-orb-ct.png"
                  }
                  size={scale <= 0.9 ? 15 : 25}
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
    </div>
  );
}