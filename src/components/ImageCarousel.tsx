"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[450px] group flex flex-col">
      {/* Background Image Wrapper */}
      <div className="relative w-full flex-grow overflow-hidden bg-gray-100">
        <div
          className="w-full h-full bg-center bg-cover duration-500 rounded-sm"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        {/* Left Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-colors z-10">
          <ChevronLeft onClick={prevSlide} size={28} />
        </div>

        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-colors z-10">
          <ChevronRight onClick={nextSlide} size={28} />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center py-4 gap-2 bg-white">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
              currentIndex === slideIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
