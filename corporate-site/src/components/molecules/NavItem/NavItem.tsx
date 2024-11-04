import { Link } from '@/components/atoms/Link/Link'

interface NavItemProps {
  href: string
  children: string
}

export const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <Link href={href} variant="nav">
      {children}
    </Link>
  )
} 