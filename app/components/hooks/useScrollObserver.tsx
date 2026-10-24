// hooks/useScrollObserver.ts
import { useEffect, useState } from "react";

export function useScrollObserver<T extends string>() {
  const [activeSection, setActiveSection] = useState<T | "">("");

  useEffect(() => {
    const elements = document.querySelectorAll("section, article[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as T);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isParentActive = (parent: string, children: string[] = []) => {
    return activeSection === parent || children.includes(activeSection);
  };

  return { activeSection, isParentActive };
}