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
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterInfo
            title="Corporate Site"
            description="最新のテクノロジーで、ビジネスの課題を解決します。"
          />
          <FooterLinkGroup title="リンク" links={links.main} />
          <FooterLinkGroup title="サービス" links={links.services} />
          <FooterInfo
            title="お問い合わせ"
            address="〒000-0000 東京都千代田区..."
            tel="03-0000-0000"
          />
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <Typography variant="small">
            © {new Date().getFullYear()} Corporate Site. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
} 