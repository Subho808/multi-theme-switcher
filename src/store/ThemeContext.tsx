import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('theme1')
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'theme1'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const handleSetTheme = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, isSidebarOpen, toggleSidebar }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}