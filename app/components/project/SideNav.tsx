import React from "react";
import { INSTAGRAM_PROJECT_SECTIONS } from "./navigation"

interface SideNavProps {
  activeSection: string;
  isParentActive: (parent: any, children: any) => boolean;
}

export default function SideNav({ activeSection, isParentActive }: SideNavProps) {
  return (
    <nav className="flex-[3] relative">
      <ul className="sticky top-20 text-sm leading-[35px] text-[#a3a3a3]">
        {INSTAGRAM_PROJECT_SECTIONS.map((parent) => {
          const childIds = parent.children.map((c) => c.id);
          const isParentActiveState = isParentActive(parent.id, childIds);

          return (
            <li key={parent.id} className="relative group mt-2">
              {/* 대단원 (부모) */}
              <a
                href={`#${parent.id}`}
                className={`transition-all duration-300 block ${
                  isParentActiveState
                    ? "text-[#6196f0] font-bold translate-x-2"
                    : "group-hover:text-[#6196f0] group-hover:translate-x-2"
                }`}
              >
                <span
                  className={`absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 
                  ${
                    isParentActiveState
                      ? "bg-[#6196f0] opacity-100"
                      : "bg-[#6196f0] opacity-0 group-hover:opacity-100"
                  }`}
                />
                {parent.label}
              </a>

              {/* 소단원 (자식) 리스트 */}
              {parent.children.length > 0 && (
                <ul
                  className={`border-l border-gray-200 overflow-hidden transition-all duration-500 max-h-0 opacity-0 
                  ${
                    isParentActiveState
                      ? "max-h-[500px] opacity-100"
                      : "group-hover:max-h-[500px] group-hover:opacity-100"
                  }`}
                >
                  {parent.children.map((child) => (
                    <li key={child.id} className="relative group/sub">
                      <a
                        href={`#${child.id}`}
                        className={`transition-all duration-300 block pl-4 ${
                          activeSection === child.id
                            ? "text-[#6196f0] font-medium translate-x-1"
                            : "hover:text-[#6196f0] hover:translate-x-1"
                        }`}
                      >
                        <span
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-300 
                          ${
                            activeSection === child.id
                              ? "bg-[#6196f0] opacity-100"
                              : "bg-[#6196f0] opacity-0 group-hover/sub:opacity-100"
                          }`}
                        />
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}