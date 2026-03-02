import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Button from "@/app/components/ui/LinkButton";
import Image from "next/image";
import { useRef } from "react";

type CaseStudyItemProps = {
  id: string;
  index: number;
  title: string;
  href: string;
  thumbnail: string;
  description: string;
  onHover: (data: {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
  }) => void;
  onLeave: () => void;
};

export default function CaseStudyItem({
  id,
  index,
  title,
  href,
  thumbnail,
  description,
  onHover,
  onLeave,
}: CaseStudyItemProps) {
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isVideo = thumbnail.endsWith(".mp4");
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        cursor-pointer
        relative
        block 

        before:content-['']
        before:absolute
        before:inset-[-12px]
        before:rounded-lg
        before:bg-gray-400/30
        before:backdrop-blur-[5px]
        before:opacity-0
        before:transition-opacity
        before:pointer-events-none

        hover:before:opacity-100
        "
      onMouseEnter={() => {
        if (leaveTimeoutRef.current) {
          clearTimeout(leaveTimeoutRef.current);
          leaveTimeoutRef.current = null;
        }

        onHover({ id, thumbnail, title, description });
      }}
      onMouseLeave={() => onLeave()}
    >
      <div className="relative z-10 flex w-full justify-between items-center group gap-3">
        <div className="flex gap-3 items-center">
          {/* Thumbnail */}
          <div className="relative w-[50px] h-[50px] rounded-lg aspect-square">
            {isVideo ? (
              <video
                src={thumbnail}
                autoPlay
                preload="none"
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>

          {/* Text */}
          <div>
            <div className="text-sm opacity-60">
              {String(index).padStart(2, "0")}.
            </div>
            <div className="text-base leading-[140%]">{title}</div>
          </div>
        </div>

        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ArrowTopRightIcon />
        </Button>
      </div>
    </Link>
  );
}
