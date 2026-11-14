import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AppPreferencesContext = createContext(null);

export default function AppPreferencesProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>;
}

export function useAppPreferences() {
  return useContext(AppPreferencesContext);
}
