'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import photos from '@/data/photos.json'
import { Photo } from '@/types'

export default function HomePage() {
  const allPhotos = photos as Photo[]
  const [randomPhoto, setRandomPhoto] = useState<Photo | null>(null)
  const [showNavigation, setShowNavigation] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Select random photo only on client side
    setRandomPhoto(allPhotos[Math.floor(Math.random() * allPhotos.length)])
  }, [allPhotos])

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollY = window.scrollY
      setShowNavigation(scrollY > heroHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show loading state until mounted and photo is selected
  if (!mounted || !randomPhoto) {
    return (
      <div className="min-h-screen bg-black">
        {/* Just show the black background while loading */}
      </div>
    )
  }

  // Calculate if image is vertical (height > width)
  const isVertical = randomPhoto.height > randomPhoto.width

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative" style={{ height: isVertical ? 'auto' : '100vh' }}>
        <Image
          src={randomPhoto.src}
          alt={randomPhoto.alt}
          width={randomPhoto.width}
          height={randomPhoto.height}
          className={`w-full ${isVertical ? 'h-auto' : 'h-screen object-cover'}`}
          priority
        />
      </div>

      {/* Navigation Overlay */}
      <div className={`fixed top-0 left-0 right-0 z-20 transition-opacity duration-500 ${showNavigation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-white">
              <Image
                src="/logo/logo_white_on_black.png"
                alt="nothing ever stays the same for long"
                width={32}
                height={32}
                className="transition-opacity duration-200"
              />
            </div>
            <nav className="flex items-center space-x-8">
              <a href="/pictures" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                Pictures
              </a>
              <a href="/videos" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                Videos
              </a>
              <a href="/about" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
