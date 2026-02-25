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
    <header className="px-6 py-12 md:px-24 md:pt-24 md:pb-12 max-w-[1980px] w-full">
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold pb-8 md:pb-16 break-keep">
        {title}
      </div>

      <div className="grid grid-cols-2 md:flex md:w-full md:justify-between items-start gap-y-8 gap-x-4">
        <div className="flex flex-col gap-1">
          <div className="point pb-1 md:pb-2 text-xs md:text-base">{"<ROLE>"}</div>
          {role.map((r, i) => <div key={i} className="text-sm md:text-base">{r}</div>)}
        </div>

        <div className="flex flex-col gap-1">
          <div className="point pb-1 md:pb-2 text-xs md:text-base">{"<TIMELINE>"}</div>
          {timeline.map((t, i) => <div key={i} className="text-sm md:text-base">{t}</div>)}
        </div>

        <div className="flex flex-col gap-1">
          <div className="point pb-1 md:pb-2 text-xs md:text-base">{"<TEAM>"}</div>
          <div className="text-sm md:text-base">{team}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="point pb-1 md:pb-2 text-xs md:text-base">{"<TOOLS>"}</div>
          <div className="text-sm md:text-base">
            {tools.map((t, i) => <div key={i}>{t}</div>)}
          </div>
        </div>

        {link && (
          <div className="col-span-2 md:col-span-1 pt-4 md:pt-0">
            <Link 
              href={link} 
              target="_blank" 
              className="p-3 bg-white inline-flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors w-full md:w-auto"
            >
              <GlobeIcon className="w-6 h-6 mr-2 md:mr-0" />
              <span className="md:hidden text-sm font-medium">Visit Website</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}