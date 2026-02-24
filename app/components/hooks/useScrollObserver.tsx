// hooks/useScrollObserver.ts
import { useEffect, useState } from "react";

// T는 메인 페이지에서 정의한 SectionId 타입이 됩니다.
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

  const isParentActive = (parent: T, children: T[] = []) => {
    return activeSection === parent || children.includes(activeSection as T);
  };

  return { activeSection, isParentActive };
}