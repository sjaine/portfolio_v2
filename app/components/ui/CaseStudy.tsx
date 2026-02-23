import Link from "next/link";
import Button from "@/app/components/ui/LinkButton"
import Image from "next/image";
import { useRef } from "react";

type CaseStudyItemProps = {
    id: string;
    index: number;
    title: string;
    href: string;
    thumbnail: string;
    description: string;
    onHover: (data: { id: string; thumbnail: string, title: string, description: string }) => void;
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

  return (
    <Link
        href={href}
        className="
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
        onMouseLeave={() => {
            leaveTimeoutRef.current = setTimeout(() => {
              onLeave();
            }, 3000);
          }}
          
    >
      <div className="relative z-10 flex w-full justify-between items-end group">
        <div className="flex gap-6">
          {/* Thumbnail */}
          <div className="relative w-[50px] h-[50px] rounded-lg">
            <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div>
            <div className="text-sm opacity-60">
              {String(index).padStart(2, "0")}.
            </div>
            <div className="text-lg">
              {title}
            </div>
          </div>
        </div>

        <Button />
      </div>
    </Link>
  );
}
