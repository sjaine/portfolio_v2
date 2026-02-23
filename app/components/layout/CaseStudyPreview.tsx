import Image from "next/image";

export default function CaseStudyPreview({
  caseStudy,
}: {
  caseStudy: null | { thumbnail: string; title: string; description: string };
}) {
  if (!caseStudy) return null;

  return (
    <div
      className="
        pointer-events-none
        w-full max-w-[1400px] z-20
        flex items-center justify-center
    "
    >
      <div className="relative w-[900px] aspect-[3/2]">
        <div className="flex justify-between items-center absolute z-10 inset-x-3 bottom-3 bg-white/50 rounded-lg p-4 backdrop-blur-[5px] text-lg pointer-events-none">
          <p className="font-medium">{caseStudy.title}</p>
          <p>{caseStudy.description}</p>
        </div>
        <Image
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          fill
          className="rounded-xl shadow-xl object-cover"
        />
      </div>
    </div>
  );
}
