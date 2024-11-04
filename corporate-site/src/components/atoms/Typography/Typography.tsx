import { ReactNode } from 'react'

interface TypographyProps {
  variant?: 'h3' | 'h4' | 'body' | 'small'
  children: ReactNode
  className?: string
}

export const Typography = ({ variant = 'body', children, className = '' }: TypographyProps) => {
  const variants = {
    h3: 'text-lg font-bold',
    h4: 'text-base font-semibold',
    body: 'text-sm',
    small: 'text-sm text-gray-600 dark:text-gray-400'
  }

  const Component = variant.startsWith('h') ? variant : 'p'

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  )
} 