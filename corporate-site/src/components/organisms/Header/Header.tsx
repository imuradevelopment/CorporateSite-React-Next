import { Link } from '@/components/atoms/Link/Link'
import { Navigation } from './Navigation'
import { ThemeToggle } from '@/components/molecules/ThemeToggle/ThemeToggle'

export const Header = () => {
  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Company Name
        </Link>
        <div className="flex items-center space-x-6">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 