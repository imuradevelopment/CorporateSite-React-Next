'use client';

import { ThemeToggle } from './theme/ThemeToggle'
import { NavLink } from './navigation/NavLink'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Corporate Site</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center space-x-4">
            <NavLink href="/">ホーム</NavLink>
            <NavLink href="/about">会社概要</NavLink>
            <NavLink href="/services">サービス</NavLink>
            <NavLink href="/contact">お問い合わせ</NavLink>
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
} 
