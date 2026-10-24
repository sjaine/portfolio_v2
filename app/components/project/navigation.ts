export const INSTAGRAM_PROJECT_SECTIONS = [
  {
    id: "tldr",
    label: "TL;DR",
    children: [
      { id: "overview", label: "Overview" },
      { id: "finalsolution", label: "Final solution" },
    ],
  },
  {
    id: "problem",
    label: "Problem",
    children: [
      { id: "problemspace", label: "Problem space" },
      { id: "researchinsights", label: "Research insights" },
    ],
  },
  {
    id: "challenge",
    label: "Challenge",
    children: [
      { id: "hmwstatement", label: "HMW statement" },
      { id: "designprinciples", label: "Design principles" },
      { id: "userflow", label: "User flow" },
      { id: "figma", label: "Figma prototype" },
      { id: "development", label: "Development" },
    ],
  },
  {
    id: "solution",
    label: "Solution",
    children: [],
  },
  {
    id: "reflection",
    label: "Reflection",
    children: [],
  },
] as const;

export type ProjectSectionId =
  | (typeof INSTAGRAM_PROJECT_SECTIONS)[number]["id"]
  | ((typeof INSTAGRAM_PROJECT_SECTIONS)[number] extends {
      children: readonly any[];
    }
      ? (typeof INSTAGRAM_PROJECT_SECTIONS)[number]["children"][number]["id"]
      : never);

export const FORE_PROJECT_SECTIONS = [
  {
    id: "tldr",
    label: "TL;DR",
    children: [
      { id: "overview", label: "Overview" },
      { id: "finalsolution", label: "Final solution" },
    ],
  },
  {
    id: "problem",
    label: "Problem",
    children: [
      { id: "problemspace", label: "Problem space" },
      { id: "5whys", label: "5 Whys" },
      { id: "marketgap", label: "Market gap" },
      { id: "hmwstatement", label: "Opportunity" },
    ],
  },
  {
    id: "research",
    label: "Research",
    children: [
      { id: "painpoint", label: "Pain points" },
      { id: "hypothesis", label: "Hypotheses" },
      { id: "keyinsight", label: "Key insight" },
      { id: "designprinciples", label: "Design principles" },
    ],
  },
  {
    id: "development",
    label: "Development",
    children: [
      { id: "conceptexploration", label: "Concept exploration" },
      { id: "howitworks", label: "How it works" },
      { id: "designsystem", label: "Design system" },
    ],
  },
  { id: "solution", label: "Solution", children: [] },
  { id: "reflection", label: "Reflection", children: [] },
] as const;

/** Shape shared by every project's side navigation */
export type NavSection = {
  readonly id: string;
  readonly label: string;
  readonly children: readonly { readonly id: string; readonly label: string }[];
};
