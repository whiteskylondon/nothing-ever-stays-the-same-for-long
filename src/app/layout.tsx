import type { Metadata } from 'next'
import { Inter, EB_Garamond } from 'next/font/google'
import './globals.css'
import ConditionalHeader from '@/components/ConditionalHeader'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ebGaramond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'nothing ever stays the same for long',
  description: 'A collection of photography and video exploring the relationship between permanence and change in urban and natural landscapes.',
  authors: [{ name: 'Daniel Roy' }],
  openGraph: {
    title: 'nothing ever stays the same for long',
    description: 'A collection of photography and video exploring the relationship between permanence and change in urban and natural landscapes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable} dark`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ConditionalHeader />
        <main className="flex-1 relative">
          {children}
        </main>
        <footer className="border-t border-border mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Daniel Roy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
