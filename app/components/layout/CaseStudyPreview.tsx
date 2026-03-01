import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudyPreview({
  caseStudy,
}: {
  caseStudy: null | { thumbnail: string; title: string; description: string };
}) {
  if (!caseStudy) return null;

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ 
          type: "spring",
          stiffness: 150, 
          damping: 25,
          mass: 1.2,
          opacity: { duration: 0.3 }
        }}
        className="relative w-[80%] max-w-[900px] aspect-[3/2] pointer-events-auto"
      >
        <div className="flex justify-between items-center absolute z-10 inset-x-3 bottom-3 bg-white/70 rounded-lg p-4 backdrop-blur-[10px] text-lg">
          <p className="font-bold text-gray-900">{caseStudy.title}</p>
          <p className="text-gray-700">{caseStudy.description}</p>
        </div>

        <Image
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          fill
          className="rounded-xl shadow-2xl object-cover border border-white/20"
        />
      </motion.div>
    </div>
  );
}
