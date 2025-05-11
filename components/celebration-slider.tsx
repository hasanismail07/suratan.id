"use client"

import { useEffect, useState } from "react"
import type { CelebrationMessage } from "@/types/celebration"
import { ChevronLeft, ChevronRight, MessageSquareHeart } from "lucide-react"

interface CelebrationSliderProps {
  celebrations: CelebrationMessage[]
}

export default function CelebrationSlider({ celebrations }: CelebrationSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance the slider
  useEffect(() => {
    if (celebrations.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % celebrations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [celebrations.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? celebrations.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % celebrations.length)
  }

  if (celebrations.length === 0) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-4xl px-10">
      <div className="flex items-center">
        <button
          onClick={goToPrevious}
          className="absolute left-0 z-10 rounded-full p-1 text-gray-600 hover:bg-gray-200"
          aria-label="Previous message"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex w-full items-center overflow-hidden py-2">
          <div className="flex w-full items-center gap-3 px-4">
            <MessageSquareHeart className="h-5 w-5 flex-shrink-0 text-black-500" />
            <div className="min-w-0 flex-1">
              <p className="font-medium">{celebrations[currentIndex].name}</p>
              <p className="truncate text-sm text-gray-600">{celebrations[currentIndex].message}</p>
            </div>
          </div>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-0 z-10 rounded-full p-1 text-gray-600 hover:bg-gray-200"
          aria-label="Next message"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-2 flex justify-center gap-1">
        {celebrations.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-6 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to message ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
