import Button from "@/app/components/ui/LinkButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectModal from "../ui/RoughCutsModal";
import ProfileModal from "../ui/ProfileModal";
import { SizeIcon } from "@radix-ui/react-icons";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative max-w-full md:max-w-[280px] min-w-[250px] w-full flex flex-col px-6 py-5 gap-8 items-end bg-white/50 rounded-lg border border-white">
      <div
        onClick={() => setIsModalOpen(true)}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      <div className="w-[80px] h-[80px] bg-black rounded-lg relative">
        <Image
          src="/images/jaine2.png"
          alt="jaine"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex w-full justify-between gap-18">
        <p>{isMobile ? "HELLO, JAINE! 👋" : "ARCHIVE 💡"}</p>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          <SizeIcon />
        </Button>
      </div>

      {isMobile ? (
        <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
