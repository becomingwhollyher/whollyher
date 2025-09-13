import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-[rgba(34,34,34,0.60)] px-2 py-1 text-[12px] leading-[16px] tracking-[0] rounded-full flex gap-2 place-items-center cursor-pointer focus:outline-none border-none"
    >
      <div
        className={`rounded-[48px] flex justify-center items-center px-[12px] py-[6px] bg-transparent dark:bg-[#000]`}
      >
        <FaRegMoon size={16} color={dark ? "#FBAEFB" : "#CACACA"} />
      </div>
      <div
        className={`rounded-[48px] flex justify-center items-center px-[12px] py-[6px] ${
          dark ? "bg-transparent" : "bg-[#000]"
        }`}
      >
        <MdWbSunny size={16} color={dark ? "#CACACA" : "#E6FF00"} />
      </div>
    </button>
  );
}
