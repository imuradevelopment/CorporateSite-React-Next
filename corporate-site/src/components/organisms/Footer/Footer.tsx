import { FooterInfo } from '@/components/molecules/FooterInfo/FooterInfo'
import { FooterLinkGroup } from '@/components/molecules/FooterLinkGroup/FooterLinkGroup'
import { Typography } from '@/components/atoms/Typography/Typography'

export const Footer = () => {
  const links = {
    main: [
      { href: '/about', label: '会社概要' },
      { href: '/services', label: 'サービス' },
      { href: '/contact', label: 'お問い合わせ' }
    ],
    services: [
      { href: '/services#consulting', label: 'コンサルティング' },
      { href: '/services#development', label: 'システム開発' },
      { href: '/services#support', label: 'サポート' }
    ]
  }

  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Corporate Site. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 