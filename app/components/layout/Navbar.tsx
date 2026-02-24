import Link from "next/link";
import LocationTimeBadge from "@/app/components/ui/LocationTimeBadge";
import AvailabilityDot from "@/app/components/ui/AvailabilityDot";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="fixed pointer-events-none backdrop z-0" />
      <header className="fixed top-4 left-4 z-50">
        <nav className="text-base flex justify-center items-center gap-7">
          <Link href="/" className="relative aspect-square w-[30px] cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="Logo photo"
              fill
              className="object-cover  pointer-events-none"
            />
          </Link>
          <Link
            href="/"
            className="relative py-1 text-base cursor-pointer
            transition-colors
            before:absolute before:inset-y-0 before:-inset-x-3
            before:rounded-md before:bg-transparent
            before:transition-colors
            hover:before:bg-black/10"
          >
            /jaineysshin.com
          </Link>
          <LocationTimeBadge />
          <div className="flex gap-2 items-center">
            <AvailabilityDot />
            <div>AVAILABLE FOR WORK</div>
          </div>
        </nav>
      </header>
    </>
  );
}
