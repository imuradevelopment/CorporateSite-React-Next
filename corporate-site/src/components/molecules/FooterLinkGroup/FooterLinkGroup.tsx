import { Typography } from '@/components/atoms/Typography/Typography'
import { Link } from '@/components/atoms/Link/Link'

interface FooterLink {
  href: string
  label: string
}

interface FooterLinkGroupProps {
  title: string
  links: FooterLink[]
}

export const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div>
      <Typography variant="h4" className="mb-4">{title}</Typography>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 