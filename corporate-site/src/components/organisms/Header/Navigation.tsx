import { NavItem } from '@/components/molecules/NavItem/NavItem'

export const Navigation = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <NavItem href="/about">About</NavItem>
      <NavItem href="/services">Services</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </nav>
  )
} 