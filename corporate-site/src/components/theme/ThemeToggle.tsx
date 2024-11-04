'use client'

import { useColorScheme } from '@/hooks/useColorScheme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useColorScheme()

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" /> // スケルトンローディング用のプレースホルダー
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      type="button"
      aria-label={theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">
        {theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
      </span>
    </button>
  )
} 