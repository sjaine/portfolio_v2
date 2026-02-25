"use client";

import { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  ArrowTopRightIcon,
  FileTextIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Contacts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      className="max-w-full md:max-w-[280px] min-w-[250px] w-full flex flex-col px-6 py-4 bg-white/50 rounded-lg border border-white overflow-hidden"
      style={{ gap: isOpen ? "20px" : "0px" }}
    >
      {/* Header */}
      <div onClick={() => setIsOpen(!isOpen)} className="flex w-full justify-between items-center h-[32px cursor-pointer">
        <motion.p layout className="">
          CONTACT
        </motion.p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white rounded-md p-1 aspect-square w-[24px] h-[24px] cursor-pointer flex items-center justify-center transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "minus" : "plus"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <MinusIcon /> : <PlusIcon />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-row md:flex-col gap-3 pb-2 justify-between"
          >
            <ContactLink
              label="Resume"
              href="https://www.dropbox.com/scl/fi/pjjg7xl5b1v0aas7zb70w/Resume.pdf?rlkey=cgemzwnkw43h5m5m00my9752h&st=m1hhmpbd&dl=0"
            />
            <ContactLink
              label="LinkedIn"
              href="https://www.linkedin.com/in/jaineysshin/"
            />
            <ContactLink label="Github" href="https://github.com/sjaine" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactLink({ label, href }: { label: string; href: string }) {
  const renderIcon = () => {
    switch (label) {
      case "Resume":
        return <FileTextIcon className="w-4 h-4" />;
      case "LinkedIn":
        return <LinkedInLogoIcon className="w-4 h-4" />;
      case "Github":
        return <GitHubLogoIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      className="relative flex justify-between items-center group cursor-pointer p-1 transition-colors
      before:absolute before:-inset-y-1 before:-inset-x-3 
      before:rounded-md before:bg-transparent before:transition-colors
      before:duration-300
      hover:before:bg-black/10"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="relative flex items-center gap-3">
        <span className="transition-colors">{renderIcon()}</span>
        <span className="text-sm md:text-base">
          {label}
        </span>
      </div>
      <ArrowTopRightIcon className="w-4 h-4 transition-colors" />
    </motion.a>
  );
}
