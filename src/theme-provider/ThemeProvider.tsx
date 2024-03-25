import { ReactNode, useCallback, useState } from "react"

import { ThemeContext  } from "./ThemeContext"

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // default theme is light
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" :
      "light"))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}