import { Moon, SunDim } from "lucide-react";
export default function ToogleThemeIcon({ className }: { className?: string }) {
  const handleChangeTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <button
      onClick={handleChangeTheme}
      className={`hover:cursor-pointer rounded-full p-2 ${className}`}
    >
      <SunDim className="size-6 text-primary dark:hidden" />
      <Moon className="size-6 text-primary hidden dark:block" />
    </button>
  );
}
