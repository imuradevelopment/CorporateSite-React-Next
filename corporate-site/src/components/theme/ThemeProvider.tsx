'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <NextThemeProvider attribute="class">
      {children}
    </NextThemeProvider>
  )
} 