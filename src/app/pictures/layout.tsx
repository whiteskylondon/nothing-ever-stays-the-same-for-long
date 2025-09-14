import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pictures | nothing ever stays the same for long',
  description: 'A collection of photography exploring urban and natural landscapes.',
  openGraph: {
    title: 'Pictures | nothing ever stays the same for long',
    description: 'A collection of photography exploring urban and natural landscapes.',
    type: 'website',
    images: ['/pictures/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pictures | nothing ever stays the same for long',
    description: 'A collection of photography exploring urban and natural landscapes.',
    images: ['/pictures/opengraph-image'],
  },
}

export default function PicturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
