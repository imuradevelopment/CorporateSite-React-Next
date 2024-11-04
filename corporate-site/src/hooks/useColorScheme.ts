'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export type ColorScheme = 'light' | 'dark' | 'system'

export function useColorScheme() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme
  
  return {
    theme: currentTheme as ColorScheme,
    setTheme,
    mounted,
    isDark: mounted && currentTheme === 'dark',
    isLight: mounted && currentTheme === 'light',
  }
} 