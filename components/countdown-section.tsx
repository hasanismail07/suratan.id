"use client"

import { useEffect, useState } from "react"

interface CountdownSectionProps {
  targetDate: string
  textColor?: string
}

export default function CountdownSection({ targetDate, textColor = "text-gray-800" }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      let difference = target - now

      // If the date has passed, set a new target 24 hours from now
      if (difference <= 0) {
        const newTarget = new Date()
        newTarget.setHours(newTarget.getHours() + 24)
        difference = newTarget.getTime() - now
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="mb-6 flex w-full max-w-md justify-between mx-auto">
      <div className="flex flex-col items-center">
        <div className={`mb-2 text-3xl font-bold ${textColor}`}>{timeLeft.days}</div>
        <div className={`text-sm ${textColor} opacity-80`}>Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={`mb-2 text-3xl font-bold ${textColor}`}>{timeLeft.hours}</div>
        <div className={`text-sm ${textColor} opacity-80`}>Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={`mb-2 text-3xl font-bold ${textColor}`}>{timeLeft.minutes}</div>
        <div className={`text-sm ${textColor} opacity-80`}>Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={`mb-2 text-3xl font-bold ${textColor}`}>{timeLeft.seconds}</div>
        <div className={`text-sm ${textColor} opacity-80`}>Seconds</div>
      </div>
    </div>
  )
}
