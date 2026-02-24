"use client";

import Profile from "@/app/components/cards/Profile";
import Contacts from "@/app/components/cards/Contacts";
import CaseStudies from "@/app/components/cards/CaseStudies";
import SwitchBtn from "@/app/components/cards/SwitchBtn";

type HoveredCase = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
} | null;

type SidePanelProps = {
  onHover: (data: HoveredCase) => void;
};

export default function SidePanel({ onHover }: SidePanelProps) {
  return (
    <div className="relative z-2 flex flex-col h-full justify-between py-5 px-4">
      <div className="flex flex-col gap-4 items-end">
        {/* <SwitchBtn /> */}
        <Profile />
        <Contacts />
      </div>
      <CaseStudies onHover={onHover} />
    </div>
  );
}
