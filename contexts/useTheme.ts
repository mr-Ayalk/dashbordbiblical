// import { createContext, useContext } from "react";

// type Theme = "light" | "dark";
// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useTheme must be used within a ThemeProvider");
//   return context;
// };
