"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

/**
 * Muted looping <video> that only downloads and plays while it's on screen.
 * - preload="none": nothing is fetched until it's about to be visible
 * - plays when it scrolls into view, pauses when it leaves
 *   (so the page isn't decoding 9 videos at once)
 * Use instead of <video autoPlay loop muted playsInline>.
 */
export default function LazyVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" }, // start a little before it appears
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={ref} preload="none" muted loop playsInline {...props} />;
}