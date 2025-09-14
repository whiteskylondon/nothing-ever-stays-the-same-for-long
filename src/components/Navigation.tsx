'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/pictures', label: 'Pictures' },
  { href: '/videos', label: 'Videos' },
  { href: '/about', label: 'About' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80",
            pathname === item.href
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
