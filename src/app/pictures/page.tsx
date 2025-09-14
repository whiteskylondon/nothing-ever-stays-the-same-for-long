'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import photos from '@/data/photos.json'
import { Photo } from '@/types'
import Lightbox from '@/components/Lightbox'

export default function PicturesPage() {
  const photosData = photos as Photo[]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a photo parameter in the URL
    const photoParam = searchParams.get('photo')
    if (photoParam) {
      const index = parseInt(photoParam, 10)
      if (index >= 0 && index < photosData.length) {
        setCurrentPhotoIndex(index)
        setLightboxOpen(true)
      }
    }
  }, [searchParams, photosData.length])

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-light mb-4">
            Pictures
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual exploration of the spaces we inhabit and the landscapes that shape us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photosData.map((photo, index) => (
            <div
              key={photo.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              {photo.caption && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {photo.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        photos={photosData}
        initialIndex={currentPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
