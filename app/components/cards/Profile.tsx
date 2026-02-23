import Link from "next/link";
import Button from "@/app/components/ui/LinkButton";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-[280px] w-full flex flex-col px-6 py-5 gap-8 items-end bg-white/50 rounded-lg border border-white">
      {/* profile photo */}
      <div className="w-[80px] h-[80px] bg-black rounded-lg relative">
        <Image
          src="/images/jaine2.png"
          alt="jaine"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* title */}
      <div className="flex w-full justify-between gap-18">
        <p>HELLO, JAINE! 👋</p>
        <Button />
      </div>
    </div>
  );
}
