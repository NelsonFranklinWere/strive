'use client'

import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme()

    return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-accent" />
        ) : (
          <Moon className="w-5 h-5 text-white" />
        )}
      </motion.div>
    </motion.button>
    )
  } catch (error) {
    // ThemeProvider not available - return null silently
    return null
  }
}

