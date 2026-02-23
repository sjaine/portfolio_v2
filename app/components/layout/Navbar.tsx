import Link from "next/link";
import LocationTimeBadge from "@/app/components/ui/LocationTimeBadge";
import AvailabilityDot from "@/app/components/ui/AvailabilityDot";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div
        className="fixed backdrop pointer-events-none z-1"
      />
      <header className="fixed top-4 left-4 z-50">
        <nav className="text-base flex justify-center items-center gap-7">
          <Link href="/" className="relative aspect-square w-[30px]">
            <Image
              src="/images/logo.svg"
              alt="Logo photo"
              fill
              className="object-cover"
            />
          </Link>
          <Link href="/">/jaineysshin.com</Link>
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
