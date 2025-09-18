"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function GallerySection() {
  const images = Array.from({ length: 4 }, (_, i) => `/gallerypics/${i + 17}.jpeg`)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }
  }

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out some of the cleanouts and junk removal projects we’ve proudly completed for our clients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 h-72"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {currentIndex !== null && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setCurrentIndex(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={images[currentIndex]}
                alt={`Enlarged gallery ${currentIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 text-black shadow"
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(null)
                }}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 text-black shadow"
                onClick={showPrev}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 text-black shadow"
                onClick={showNext}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
