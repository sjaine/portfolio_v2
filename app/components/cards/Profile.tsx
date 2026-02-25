import Button from "@/app/components/ui/LinkButton";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "../ui/RoughCutsModal";
import { SizeIcon } from "@radix-ui/react-icons";


export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-full md:max-w-[280px]  w-full flex flex-col px-6 py-5 gap-8 items-end bg-white/50 rounded-lg border border-white">
      <div className="w-[80px] h-[80px] bg-black rounded-lg relative">
        <Image src="/images/jaine2.png" alt="jaine" fill className="object-cover rounded-lg" />
      </div>

      <div className="flex w-full justify-between gap-18">
        <p>ROUGH CUTS 💡</p>
        <Button 
          onClick={() => setIsModalOpen(true)}>
            <SizeIcon />
        </Button>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}