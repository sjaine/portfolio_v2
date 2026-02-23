import { motion } from "framer-motion";
import { nodePositions, connections } from "./data";
import { NODE_ANCHOR_OFFSET } from "./nodeAnchors";
import type { NodeId } from "./data";

interface Props {
  hovered: NodeId | null;
  width: number;
  height: number;
}

function getLinesForHover(
  hovered: NodeId,
  connections: Record<NodeId, NodeId[]>
): [NodeId, NodeId][] {
  // JAINE → ALL
  if (hovered === "jaine") {
    return Object.entries(connections).flatMap(([from, tos]) =>
      tos.map((to): [NodeId, NodeId] => [from as NodeId, to])
    );
  }

  // UIUX
  if (hovered === "uiux") {
    return [
      ...connections.uiux.map((to) => ["uiux", to] as [NodeId, NodeId]),
      ["empathy", "flow"],
      ["empathy", "reflection"],
    ];
  }

  // CREATIVE (CT)
  if (hovered === "creative") {
    return [
      ...connections.creative.map((to) => ["creative", to] as [NodeId, NodeId]),
      ...connections.exploration.map(
        (to) => ["exploration", to] as [NodeId, NodeId]
      ),
      ["motion", "curiosity"],
      ["play", "curiosity"],
    ];
  }

  // EXPLORATION
  if (hovered === "exploration") {
    return [
      ...connections.exploration.map(
        (to) => ["exploration", to] as [NodeId, NodeId]
      ),
      ["motion", "curiosity"],
      ["play", "curiosity"],
    ];
  }

  // fallback
  return connections[hovered].map((to) => [hovered, to] as [NodeId, NodeId]);
}

export function LinesLayer({ hovered, width, height }: Props) {
  if (!hovered || !width || !height) return null;

  const lines = getLinesForHover(hovered, connections);

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-0"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {lines.map(([from, to]) => {
        const start = nodePositions[from];
        const end = nodePositions[to];

        const so = NODE_ANCHOR_OFFSET[from];
        const eo = NODE_ANCHOR_OFFSET[to];

        const x1 = start.x * width + so.x;
        const y1 = start.y * height + so.y;
        const x2 = end.x * width + eo.x;
        const y2 = end.y * height + eo.y;

        return (
          <motion.line
            key={`${from}-${to}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#b0b0b0"
            strokeWidth="0.5"
            strokeDasharray="0.5 3"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 0.8,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        );
      })}
    </svg>
  );
}
