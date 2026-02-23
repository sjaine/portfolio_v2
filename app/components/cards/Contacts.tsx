import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Contacts() {
  return (
    <div className="max-w-[280px] w-full flex flex-col px-6 py-4 gap-8 items-end bg-white/50 rounded-lg border border-white">
      {/* title */}
      <div className="flex w-full justify-between">
        <p>CONTACT</p>
        <button className="bg-white rounded-lg p-1 aspect-square">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
