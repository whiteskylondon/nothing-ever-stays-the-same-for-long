'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import photos from '@/data/photos.json'
import videos from '@/data/videos.json'
import { Photo, Video } from '@/types'

export default function HomePage() {
  const allPhotos = photos as Photo[]
  const allVideos = videos as Video[]
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

      {/* Thumbnails Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          {/* Pictures Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allPhotos.slice(0, 8).map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => {
                    // Open lightbox directly with this photo
                    window.location.href = `/pictures?photo=${index}`;
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {allVideos.map((video) => (
                <Link
                  key={video.id}
                  href="/videos"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium text-sm">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
