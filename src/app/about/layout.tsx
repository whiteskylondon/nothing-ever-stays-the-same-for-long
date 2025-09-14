import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | nothing ever stays the same for long',
  description: 'About Daniel Roy and the photography and video project.',
  openGraph: {
    title: 'About | nothing ever stays the same for long',
    description: 'About Daniel Roy and the photography and video project.',
    type: 'website',
    images: ['/about/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | nothing ever stays the same for long',
    description: 'About Daniel Roy and the photography and video project.',
    images: ['/about/opengraph-image'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
