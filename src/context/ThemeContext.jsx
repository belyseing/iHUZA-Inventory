import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();


export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  return useContext(ThemeContext);
}
