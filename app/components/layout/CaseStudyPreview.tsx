import Image from "next/image";

export default function CaseStudyPreview({
  caseStudy,
}: {
  caseStudy: null | { thumbnail: string; title: string; description: string };
}) {
  if (!caseStudy) return null;

  return (
    /* 1. absolute inset-0: 부모(Canvas)의 모든 면에 붙음 
       2. flex justify-center items-center: 그 영역 내에서 중앙 정렬
    */
    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
      
      {/* 실제 카드: scale 영향을 받지 않도록 고정 크기 또는 % 사용 
         부모의 aspect-[3/2] 비율 내에서 적절한 크기로 보이게 조정
      */}
      <div className="relative w-[80%] max-w-[900px] aspect-[3/2] pointer-events-auto">
        
        {/* 하단 텍스트 바 */}
        <div className="flex justify-between items-center absolute z-10 inset-x-3 bottom-3 bg-white/70 rounded-lg p-4 backdrop-blur-[10px] text-lg">
          <p className="font-bold text-gray-900">{caseStudy.title}</p>
          <p className="text-gray-700">{caseStudy.description}</p>
        </div>

        {/* 썸네일 이미지 */}
        <Image
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          fill
          className="rounded-xl shadow-2xl object-cover border border-white/20"
        />
      </div>
    </div>
  );
}