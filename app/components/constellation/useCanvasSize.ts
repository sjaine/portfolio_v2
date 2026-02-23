// useCanvasSize.ts
import { useRef, useLayoutEffect, useState } from "react";

export function useCanvasSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const update = () => {
      setSize({
        width: ref.current!.offsetWidth,
        height: ref.current!.offsetHeight,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return { ref, size };
}
