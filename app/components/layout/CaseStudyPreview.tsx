import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudyPreview({
  caseStudy,
  onMouseEnter,
  onMouseLeave,
}: {
  caseStudy: null | {
    thumbnail: string;
    title: string;
    description: string;
    posterUrl?: string;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (!caseStudy) return null;
  const isVideo = caseStudy.thumbnail.endsWith(".mp4");

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
      <motion.div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 1.2,
          opacity: { duration: 0.3 },
        }}
        className="relative w-[80%] max-w-[900px] aspect-[3/2] pointer-events-none"
      >
        <div className="flex justify-between items-center absolute z-10 inset-x-3 bottom-3 bg-white/70 rounded-lg p-4 backdrop-blur-[10px] text-lg">
          <p className="font-bold text-black/80">{caseStudy.title}</p>
          <p className="text-black/80">{caseStudy.description}</p>
        </div>

        {isVideo ? (
          <video
            aria-hidden="true"
            src={caseStudy.thumbnail}
            poster={caseStudy.posterUrl}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <Image
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            fill
            className="object-cover rounded-lg"
          />
        )}
      </motion.div>
    </div>
  );
}
