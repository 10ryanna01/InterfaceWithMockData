import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const darkModeToggled = localStorage.getItem("dark-mode") === "true";
  const [darkMode, setDarkMode] = useState(darkModeToggled);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div>
      <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};
