import NextLink from 'next/link'
import { ComponentProps } from 'react'

interface LinkProps extends ComponentProps<typeof NextLink> {
  variant?: 'default' | 'nav'
}

export const Link = ({
  children,
  variant = 'default',
  className = '',
  ...props
}: LinkProps) => {
  const variants = {
    default: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    nav: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
  }

  return (
    <NextLink
      className={`${variants[variant]} transition-colors ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  )
} 