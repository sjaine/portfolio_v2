import { ReactNode, MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode; 
  className?: string; 
}

export default function IconButton({ onClick, children, className }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`
        bg-white rounded-md p-1 aspect-square w-[24px] h-[24px] 
        flex items-center justify-center cursor-pointer
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
}