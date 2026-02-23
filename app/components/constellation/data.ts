// components/constellation/data.ts

export const nodePositions = {
  // CENTER
  jaine: { x: 0.5, y: 0.5 },

  // ROLES
  uiux: { x: 0.32, y: 0.38 },
  creative: { x: 0.64, y: 0.64 },

  // UI/UX SIDE
  readability: { x: 0.18, y: 0.24 },
  clarity: { x: 0.38, y: 0.24 },
  detail: { x: 0.18, y: 0.5 },
  empathy: { x: 0.32, y: 0.66 },

  // CENTER VERTICAL
  communication: { x: 0.5, y: 0.3 },
  flow: { x: 0.45, y: 0.7 },
  reflection: { x: 0.48, y: 0.8 },

  // CT SIDE
  exploration: { x: 0.64, y: 0.42 },
  motion: { x: 0.73, y: 0.3 },
  curiosity: { x: 0.82, y: 0.34 },
  play: { x: 0.76, y: 0.54 },
  interactions: { x: 0.81, y: 0.68 },
} as const;

export const connections: Record<NodeId, NodeId[]> = {
  jaine: ["uiux", "creative"],
  uiux: [
    "readability",
    "clarity",
    "detail",
    "empathy",
    "communication",
    "jaine",
  ],
  creative: ["exploration", "communication", "reflection", "jaine"],
  readability: ["uiux"],
  clarity: ["uiux"],
  detail: ["uiux"],
  empathy: ["flow", "reflection"],
  communication: ["uiux", "creative"],
  exploration: ["creative", "interactions", "play", "motion"],
  interactions: ["exploration"],
  reflection: ["creative"],
  flow: ["reflection"],
  motion: ["exploration", "curiosity"],
  play: ["exploration", "curiosity"],
  curiosity: ["motion", "play"],
};

export const nodeLabels: Record<NodeId, string> = {
  jaine: "JAINE SHIN",
  uiux: "UI/UX DESIGNER",
  creative: "DESIGN ENGINEER",

  readability: "READABILITY",
  clarity: "CLARITY",
  detail: "DETAIL-ORIENTED",
  empathy: "EMPATHY",

  communication: "COMMUNICATION",
  flow: "FLOW",
  reflection: "REFLECTION",

  exploration: "EXPLORATION",
  motion: "MOTION",
  curiosity: "CURIOSITY",
  play: "PLAY",
  interactions: "INTERACTIONS",
};

export type NodeId = keyof typeof nodePositions;
