import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
// import { useTheme } from "../../contexts/useTheme.ts";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      size="lg"
      className="bg-gray-900 hover:bg-gray-900 py-7 px-20 rounded-2xl"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="size-16 mb-0  rounded-xl  items-center text-white" />
      ) : (
        <Moon className="size-16 mb-0  rounded-xl  items-center text-white" />
      )}
    </Button>
  );
};
