'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
} | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      setMounted(true)
      if (typeof window === 'undefined') return
      
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      const initialTheme = savedTheme || systemTheme
      setThemeState(initialTheme)
      
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', initialTheme === 'dark')
      }
    } catch (error) {
      console.error('Error initializing theme:', error)
      setThemeState('light')
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    try {
      setThemeState(newTheme)
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme)
      }
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
      }
    } catch (error) {
      console.error('Error setting theme:', error)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

