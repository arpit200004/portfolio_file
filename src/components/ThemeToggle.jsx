import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full",
        "transition-all duration-700 ease-in-out",
        "bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400 dark:from-gray-800 dark:via-indigo-900 dark:to-black",
        "hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
      )}
    >
      <span className="relative flex items-center justify-center">
        {isDarkMode ? (
          <Sun
            className="h-7 w-7 text-yellow-300 drop-shadow-[0_0_12px_rgba(255,255,0,0.7)] transition-transform duration-700 rotate-180"
          />
        ) : (
          <Moon
            className="h-7 w-7 text-blue-900 drop-shadow-[0_0_12px_rgba(100,149,237,0.7)] transition-transform duration-700 -rotate-12"
          />
        )}
      </span>
    </button>
  );
};
