'use client';

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4">
          <Link href="/" className="font-bold">
            Corporate Site
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
} 
