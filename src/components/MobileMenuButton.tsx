import { MobileMenuButtonProps } from "./types";

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="w-6 h-4 flex flex-col items-center justify-between p-0 bg-transparent border-none overflow-hidden 2xl:hidden"
    aria-label="Toggle menu"
  >
    <div
      className={`w-full h-0.5 bg-black dark:bg-white transition-all duration-200 ${
        isOpen
          ? "transform rotate-[-45deg] translate-x-[-4px] translate-y-[6px]"
          : ""
      }`}
    />
    <div
      className={`w-full h-0.5 bg-black dark:bg-white transition-all duration-200 ${
        isOpen ? "transform translate-x-full opacity-0" : ""
      }`}
    />
    <div
      className={`w-full h-0.5 bg-black dark:bg-white transition-all duration-200 ${
        isOpen
          ? "transform rotate-45 translate-x-[-3.5px] translate-y-[-6px]"
          : ""
      }`}
    />
  </button>
);
