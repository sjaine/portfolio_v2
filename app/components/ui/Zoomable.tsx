"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Cross2Icon, EnterFullScreenIcon } from "@radix-ui/react-icons";

type ZoomableProps = {
  /** What shows on the page. Click it to open the enlarged view. */
  children: ReactNode;
  /** Accessible name, e.g. "5 Whys diagram" */
  label: string;
  /** Optional different content for the enlarged view. Defaults to children. */
  zoomed?: ReactNode;
  className?: string;
  /** Size of the enlarged panel. Use "w-auto" for tall content like phones. */
  panelClassName?: string;
};

const noopSubscribe = () => () => {};

export default function Zoomable({
  children,
  label,
  zoomed,
  className = "",
  panelClassName = "w-full max-w-[1400px]",
}: ZoomableProps) {
  const [open, setOpen] = useState(false);
  // true in the browser, false during server render (portal needs <body>)
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  // Esc to close + lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${label}`}
        className={`group relative block w-full cursor-zoom-in text-left ${className}`}
      >
        {children}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 font-[family-name:var(--font-dm-mono)] text-[10.5px] tracking-[1px] text-[#6B6B6B] shadow-sm opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <EnterFullScreenIcon className="h-3 w-3" />
          ENLARGE
        </span>
      </button>

      {/* Portal to <body>: the page's motion.section uses transforms,
          which would otherwise trap a fixed overlay inside the section. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="zoom-overlay"
                role="dialog"
                aria-modal="true"
                aria-label={label}
                className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm md:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.96, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.96, y: 10 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className={`relative max-h-full overflow-auto rounded-2xl bg-[#F4F5F0] p-4 md:p-8 ${panelClassName}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {zoomed ?? children}
                </motion.div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center text-white"
                >
                  <Cross2Icon className="h-5 w-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}