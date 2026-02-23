import Link from "next/link";
import Button from "@/app/components/ui/LinkButton";

export default function SwitchBtn() {
  return (
    <button className="flex w-fit px-2 py-1 gap-3 bg-white/50 rounded-full border border-white">
      <div className="bg-black text-white rounded-full px-3 py-1">DESIGN</div>
      <div className="px-3 py-1">DEV</div>
    </button>
  );
}
