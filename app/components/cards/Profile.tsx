import Button from "@/app/components/ui/LinkButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectModal from "../ui/RoughCutsModal";
import ProfileModal from "../ui/ProfileModal";
import { SizeIcon } from "@radix-ui/react-icons";

export default function Profile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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

  if (isMobile) {
    return (
      <div className="flex flex-row w-full h-[180px] gap-4">
        {" "}
        <div
          onClick={() => setIsProfileOpen(true)}
          className="flex-1 bg-white/50 rounded-lg border border-white flex flex-col items-start justify-between p-4 transition-transform"
        >
          <div className="w-[80px] h-[80px] bg-black rounded-lg relative">
            <Image
              src="/images/jaine2.png"
              alt="jaine"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-sm">HI, JAINE! 👋</p>
            <Button>
              <SizeIcon />
            </Button>
          </div>
        </div>
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-white/50 rounded-lg border border-white flex items-end justify-between p-4 active:scale-[0.98] transition-transform"
        >
          <p className="text-sm">ARCHIVE 💡</p>
          <Button>
            <SizeIcon />
          </Button>
        </div>
        <ProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        />
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="relative max-w-full md:max-w-[280px] min-w-[250px] w-full flex flex-col px-6 py-5 gap-8 items-end bg-white/50 rounded-lg border border-white z-[999]">
      <div
        onClick={() => setIsModalOpen(true)}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-black rounded-lg relative">
        <Image
          src="/images/jaine2.png"
          alt="jaine"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex w-full justify-between gap-18">
        <p>ARCHIVE 💡</p>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
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
