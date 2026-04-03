"use client";

import { useState, useCallback, useEffect } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto advance the carousel every 7 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      next();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [next, images.length]);

  if (images.length === 0) {
    return null;
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      prev();
    }
    if (event.key === "ArrowRight") {
      next();
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots carousel"
    >
      <span className="sr-only" aria-live="polite">
        Showing image {currentIndex + 1} of {images.length}
      </span>
      <div className="relative h-[450px] md:h-[600px] lg:h-[700px] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {failedImages.includes(index) ? (
              <div className="h-full w-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl">
                Image unavailable
              </div>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                priority={index === 0}
                onError={() => {
                  setFailedImages((previous) =>
                    previous.includes(index) ? previous : [...previous, index]
                  );
                }}
              />
            )}
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;