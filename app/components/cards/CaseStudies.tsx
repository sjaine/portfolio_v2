import AvailabilityDot from "@/app/components/ui/AvailabilityDot";
import CaseStudyItem from "@/app/components/ui/CaseStudy";
import Button from "@/app/components/ui/LinkButton";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const CASE_STUDIES = [
  {
    id: "fore",
    title: "FO/RE",
    href: "/fore",
    thumbnail: "/images/fore.jpg",
    description: "One tap to start and end the remote workday.",
  },
  {
    id: "Instagram Accessibility",
    title: "Instagram Accessibility",
    href: "/instagram",
    thumbnail: "/images/instagram/instagram.mp4",
    posterUrl: "/images/instagram/instagram.png",
    description:
      "Improving Instagram's Accessibility for people with visual impairments.",
  },
];

type Build = {
  id: string;
  title: string;
  summary: string;
  href: string;
  repo?: string;
  thumbnail: string;
  posterUrl?: string;
  description: string;
};

const BUILDS: Build[] = [
  {
    id: "ssuarchive",
    title: "SSU Poster Wall",
    summary: "Graphic design archive site",
    href: "https://posters.jaineysshin.com/",
    thumbnail: "/images/archive/ssuarchive.mp4",
    posterUrl: "/images/archive/ssuarchive.png",
    description: "Posters I designed at SSU. (Sep 2025 – Apr 2026)",
  },
  {
    id: "mminfo",
    title: "MMINFO",
    summary: "Mood-based AI recs",
    href: "https://mminfo.vercel.app/",
    // repo: "https://github.com/sjaine/...",
    thumbnail: "/images/archive/mminfo.mp4",
    posterUrl: "/images/archive/mminfo.png",
    description: "Mood-based AI Recommendations integrating Gemini API.",
  },
];

type HoveredCase = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  posterUrl?: string;
} | null;

type CaseStudiesProps = {
  onHover: (data: HoveredCase) => void;
};

export default function CaseStudies({ onHover }: CaseStudiesProps) {
  return (
    <div className="max-w-full md:max-w-[280px] min-w-[250px] w-full flex flex-col px-4 md:px-6 py-5 gap-6 bg-white/50 rounded-lg border border-white select-none">
      {/* ===== Case studies ===== */}
      <section className="flex flex-col gap-5 w-full">
        <div className="flex gap-1 items-center">
          <AvailabilityDot />
          <div className="text-sm md:text-base">CASE STUDIES</div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {CASE_STUDIES.map((item, index) => (
            <CaseStudyItem
              key={item.id}
              id={item.id}
              index={index + 1}
              title={item.title}
              href={item.href}
              thumbnail={item.thumbnail}
              posterUrl={item.posterUrl}
              description={item.description}
              onHover={onHover}
              onLeave={() => onHover(null)}
            />
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-black/10" />

      <section className="flex flex-col gap-3 w-full">
        <div className="text-xs md:text-sm text-black/50">BUILDS</div>

        <ul className="flex flex-col gap-1 w-full">
          {BUILDS.map((build) => (
            <BuildItem
              key={build.id}
              build={build}
              onHover={onHover}
              onLeave={() => onHover(null)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

function BuildItem({
  build,
  onHover,
  onLeave,
}: {
  build: Build;
  onHover: (data: HoveredCase) => void;
  onLeave: () => void;
}) {
  const { id, title, summary, href, repo, thumbnail, posterUrl, description } =
    build;

  return (
    <li
      onMouseEnter={() =>
        onHover({ id, thumbnail, title, description, posterUrl })
      }
      onMouseLeave={onLeave}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
      relative flex items-center justify-between gap-3 py-1.5 cursor-pointer
      before:content-[''] before:absolute before:inset-x-[-12px] before:inset-y-[-6px]
      before:rounded-lg before:bg-gray-400/30 before:backdrop-blur-[5px]
      before:opacity-0 before:transition-opacity before:pointer-events-none
      hover:before:opacity-100
    "
      >
        <div className="relative z-10 min-w-0 flex flex-col">
          <span className="text-sm md:text-base leading-[140%]">{title}</span>
          <span className="text-xs text-black/50 truncate">{summary}</span>
        </div>

        <span
          aria-hidden="true"
          className="relative z-10 bg-white rounded-md p-1 aspect-square w-[24px] h-[24px] flex items-center justify-center shrink-0"
        >
          <ArrowTopRightIcon />
        </span>
      </a>
    </li>
  );
}
