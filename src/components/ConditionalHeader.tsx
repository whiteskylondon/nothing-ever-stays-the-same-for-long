'use client'

import { usePathname } from 'next/navigation'
import Logo from './Logo'
import Navigation from './Navigation'

export default function ConditionalHeader() {
  const pathname = usePathname()
  
  // Don't show header on home page
  if (pathname === '/') {
    return null
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-6">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}
