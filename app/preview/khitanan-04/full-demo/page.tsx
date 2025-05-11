"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Khitanan04FullDemo() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isExpired, setIsExpired] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    const countdownDate = new Date()
    countdownDate.setDate(countdownDate.getDate() + 1)

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = countdownDate.getTime() - now

      if (distance < 0) {
        setIsExpired(true)
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        return
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-600/30"></div>
          <div className="absolute inset-0">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(59, 130, 246, 0.2)" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="mb-6 mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M9 12h.01" />
              <path d="M15 12h.01" />
              <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
              <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-medium mb-2 text-blue-800">Khitanan</h3>
          <h1 className="font-bold text-4xl md:text-6xl mb-6 text-blue-900">Ahmad Faisal</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl mb-8 text-blue-800">We invite you to celebrate this special occasion</p>
          <p className="text-2xl md:text-3xl font-bold mb-10 text-blue-900">15.06.2025</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto mb-10">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-500">{days}</div>
              <div className="text-sm text-blue-700">Days</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-500">{hours}</div>
              <div className="text-sm text-blue-700">Hours</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-500">{minutes}</div>
              <div className="text-sm text-blue-700">Minutes</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-500">{seconds}</div>
              <div className="text-sm text-blue-700">Seconds</div>
            </div>
          </div>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full shadow-lg">
            <a href="#rsvp">RSVP Now</a>
          </Button>
        </div>
      </div>

      {/* Child Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Our Special Boy</h2>

          <div className="max-w-2xl mx-auto text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-200 shadow-lg">
              <Image
                src="/assets/aset5/boy4.jpg"
                alt="Ahmad Faisal"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Ahmad Faisal</h3>
            <p className="text-blue-700 mb-4">Son of Mr. & Mrs. Faisal</p>
            <p className="text-blue-700 mb-8">Born on June 15, 2020</p>

            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-lg italic text-blue-700 mb-6">
              "Children are a gift from the Lord; they are a reward from him."
            </p>
            <p className="text-blue-600">Psalm 127:3</p>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Event Details</h2>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-blue-100 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    <path d="M12 11v6" />
                    <path d="M8 11v6" />
                    <path d="M16 11v6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Khitanan Ceremony</h3>
                <p className="text-blue-700 mb-2">Sunday, 15 June 2025</p>
                <p className="text-blue-700 mb-6">09:00 - 12:00 WIB</p>
                <p className="text-blue-700 mb-6">
                  Ballroom
                  <br />
                  Grand Hyatt Jakarta
                  <br />
                  Jakarta
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Photo Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square relative overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={`/assets/aset5/boy${item}.jpg`}
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gift Registry */}
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">Gift Registry</h2>
          <p className="text-center text-blue-700 mb-16 max-w-2xl mx-auto">
            Your presence at our celebration is the greatest gift of all. However, if you wish to honor us with a gift,
            we have provided the following options:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-white border-blue-100 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Bank Transfer</h3>
                <p className="text-blue-700 mb-2">Bank BCA</p>
                <p className="text-blue-700 mb-6">1234567890 - Ahmad Faisal</p>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
                  onClick={() => copyToClipboard("1234567890", "bca")}
                >
                  {copied === "bca" ? "Copied!" : "Copy"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-100 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="5" height="5" x="3" y="3" rx="1" />
                    <rect width="5" height="5" x="16" y="3" rx="1" />
                    <rect width="5" height="5" x="3" y="16" rx="1" />
                    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                    <path d="M21 21v.01" />
                    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                    <path d="M3 12h.01" />
                    <path d="M12 3h.01" />
                    <path d="M12 16v.01" />
                    <path d="M16 12h1" />
                    <path d="M21 12v.01" />
                    <path d="M12 21v-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Digital Wallet</h3>
                <p className="text-blue-700 mb-2">GoPay</p>
                <p className="text-blue-700 mb-6">081234567890 - Ahmad Faisal</p>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
                  onClick={() => copyToClipboard("081234567890", "gopay")}
                >
                  {copied === "gopay" ? "Copied!" : "Copy"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* RSVP */}
      <div id="rsvp" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">RSVP</h2>
          <p className="text-center text-blue-700 mb-16 max-w-2xl mx-auto">
            We would be honored to have you join us on our special day. Please let us know if you can attend by filling
            out the form below.
          </p>

          <div className="max-w-md mx-auto">
            <Card className="bg-blue-50 border-blue-100 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-800">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      className="bg-white border-blue-200 text-blue-900"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-800">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-white border-blue-200 text-blue-900"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-800">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      className="bg-white border-blue-200 text-blue-900"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-800">Will you attend?</Label>
                    <RadioGroup defaultValue="yes">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="text-blue-800">
                          Yes, I will attend
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="text-blue-800">
                          No, I cannot attend
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-blue-800">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      className="bg-white border-blue-200 text-blue-900"
                      placeholder="Enter number of guests"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-blue-800">
                      Message for the Family
                    </Label>
                    <Textarea
                      id="message"
                      className="bg-white border-blue-200 text-blue-900"
                      placeholder="Write your message here"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
                  >
                    Submit RSVP
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-blue-900 text-center text-white">
        <p>Created with ❤️ by Suratan</p>
      </footer>
    </div>
  )
}
