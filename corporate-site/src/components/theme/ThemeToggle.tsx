'use client'

import { useTheme } from '@/lib/theme/ThemeContext'
import { Theme } from '@/lib/theme/types'
import { Sun, Moon, Monitor } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const themeIcons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Monitor className="h-5 w-5" />
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return (
    <div className="flex items-center gap-2">
      {Object.entries(themeIcons).map(([key, icon]) => (
        <button
          key={key}
          onClick={() => handleThemeChange(key as Theme)}
          className={`p-2 rounded-md ${
            theme === key ? 'bg-gray-200 dark:bg-gray-700' : ''
          }`}
          aria-label={`Switch to ${key} theme`}
        >
          {icon}
        </button>
      ))}
    </div>
  )
} 