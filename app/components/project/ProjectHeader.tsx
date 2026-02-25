import Link from "next/link";
import { GlobeIcon } from "@radix-ui/react-icons";

interface ProjectHeaderProps {
  title: string;
  role: string[];
  timeline: string[];
  team: string;
  tools: string[];
  link?: string;
}

export default function ProjectHeader({ title, role, timeline, team, tools, link }: ProjectHeaderProps) {
  return (
    <header className="px-24 pt-24 pb-8 max-w-[1980px] w-full">
      <div className="text-8xl font-bold pb-12">{title}</div>
      <div className="flex w-full justify-between items-start">
        <div>
          <div className="point pb-2">{"<ROLE>"}</div>
          {role.map((r, i) => <div key={i}>{r}</div>)}
        </div>
        <div>
          <div className="point pb-2">{"<TIMELINE>"}</div>
          {timeline.map((t, i) => <div key={i}>{t}</div>)}
        </div>
        <div>
          <div className="point pb-2">{"<TEAM>"}</div>
          <div>{team}</div>
        </div>
        <div>
          <div className="point pb-2">{"<TOOLS>"}</div>
          <div>{tools.map((t, i) => <div key={i}>{t}</div>)}</div>
        </div>
        {link && (
          <Link href={link} target="_blank" className="p-2 bg-white inline-flex items-center justify-center rounded-lg">
            <GlobeIcon className="w-6 h-6" />
          </Link>
        )}
      </div>
    </header>
  );
}