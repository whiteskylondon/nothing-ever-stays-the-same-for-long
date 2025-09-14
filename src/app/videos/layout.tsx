import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Videos | nothing ever stays the same for long',
  description: 'A collection of video works exploring movement, time, and transformation.',
  openGraph: {
    title: 'Videos | nothing ever stays the same for long',
    description: 'A collection of video works exploring movement, time, and transformation.',
    type: 'website',
    images: ['/videos/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videos | nothing ever stays the same for long',
    description: 'A collection of video works exploring movement, time, and transformation.',
    images: ['/videos/opengraph-image'],
  },
}

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
