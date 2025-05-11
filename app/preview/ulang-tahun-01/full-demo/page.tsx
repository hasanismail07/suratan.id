"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Gift, Copy, MapPin, Calendar, Clock, CheckCircle, Cake, Music, Gamepad2, AlarmClock, Gamepad, Camera, CameraIcon, LetterTextIcon, List, ListCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import CelebrationSlider from "@/components/celebration-slider"
import type { CelebrationMessage } from "@/types/celebration"
import CountdownSection from "@/components/countdown-section"

export default function FullTemplateDemo() {
  const eventDate = new Date("2024-01-24T00:00:00")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "attending",
    guests: "1",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [celebrations, setCelebrations] = useState<CelebrationMessage[]>([
    { name: "Keluarga Budi", message: "Happy birthday Sofia! Can't wait to celebrate with you!" },
    { name: "Tante Siti", message: "Happy 7th birthday! Wishing you a day filled with joy and cake!" },
    { name: "Om Dedi", message: "Happy birthday! Looking forward to the party!" },
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attendance: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Add celebration message
    if (formData.name && formData.message) {
      setCelebrations((prev) => [
        ...prev,
        {
          name: formData.name,
          message: formData.message,
        },
      ])
    }

    // Show success message
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        attendance: "attending",
        guests: "1",
        message: "",
      })
    }, 3000)
  }

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const wishlistItems = [
    {
      id: "item1",
      name: "Art Supplies Set",
      details: "Sofia loves drawing and painting",
      link: "https://example.com/art-supplies",
    },
    {
      id: "item2",
      name: "Science Kit for Kids",
      details: "She's interested in science experiments",
      link: "https://example.com/science-kit",
    },
    {
      id: "item3",
      name: "Books (Age 7-8)",
      details: "Story books or educational books",
      link: "https://example.com/books",
    },
  ]

  const activities = [
    {
      icon: <Cake className="h-8 w-8 text-purple-500" />,
      title: "Cake Cutting",
      time: "3:00 PM",
      description: "The birthday girl will blow out the candles and cut the cake",
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-purple-500" />,
      title: "Fun Games",
      time: "3:30 PM",
      description: "Exciting games with prizes for all the kids",
    },
    {
      icon: <Music className="h-8 w-8 text-purple-500" />,
      title: "Dance Party",
      time: "4:30 PM",
      description: "Dance to Sofia's favorite songs",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/preview/ulang-tahun-01" className="flex items-center text-gray-700 hover:text-[#db2778]">
            <ChevronLeft className="mr-1 h-5 w-5" />
            <span>Kembali ke Preview</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-purple-500 text-white hover:bg-purple-600">
              Ulang-Tahun-01
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative min-h-screen w-full">
        <Image
          src="/assets/aset6/girl2.jpg"
          alt="Birthday background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-6 text-sm uppercase tracking-widest text-purple-700">You're Invited!</div>
          <h1 className="font-sans text-5xl font-bold text-purple-800 md:text-7xl">
            Sofia's 17th <br /> Birthday Party
          </h1>
          <div className="mt-6 text-sm text-purple-700">Saturday, January 24, 2024</div>
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px w-16 bg-purple-300"></div>
            <div className="mx-4 h-12 w-12 flex items-center justify-center rounded-full bg-purple-100">
              <Cake className="h-8 w-8 text-purple-500" />
            </div>
            <div className="h-px w-16 bg-purple-300"></div>
          </div>
          <p className="mt-8 max-w-md text-purple-700">
            Join us for a magical day filled with fun, games, and cake as we celebrate Sofia's special day!
          </p>
          <div className="mt-12">
            <Button className="rounded-full bg-purple-500 text-white hover:bg-purple-600">Scroll Down</Button>
          </div>
        </div>
      </section>

      {/* Birthday Girl Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-purple-800">The Birthday Girl</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-purple-300"></div>
                <div className="mx-4 h-8 w-8 flex items-center justify-center rounded-full bg-purple-100">
                <Cake className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src="/assets/aset6/girl3.jpg"
                alt="Sofia"
                width={256}
                height={256}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-6 font-sans text-2xl font-bold text-purple-800">Sofia Ramadhani</h3>
            <p className="mt-2 text-purple-700">Turning 17 years old!</p>
            <p className="mt-4 max-w-md text-center text-purple-700">
              Sofia loves art, science, and playing with her friends. She's excited to celebrate her special day with
              all of you!
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-purple-800">Countdown to the Party!</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-purple-300"></div>
                <div className="mx-4 h-8 w-8 flex items-center justify-center rounded-full bg-purple-100">
                <AlarmClock className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
          </div>

          <CountdownSection targetDate="2024-01-24T00:00:00" textColor="text-purple-800" />
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-purple-800">Party Details</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-purple-300"></div>
                <div className="mx-4 h-8 w-8 flex items-center justify-center rounded-full bg-purple-100">
                <Gamepad className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col rounded-lg bg-white p-8 text-center shadow-sm">
              <h3 className="font-sans text-2xl font-bold text-purple-800">Sofia's Birthday Party</h3>
              <div className="mt-6 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-purple-500" />
                <p className="ml-2 text-purple-700">Saturday, January 24, 2024</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-500" />
                <p className="ml-2 text-purple-700">2:00 PM - 5:00 PM</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-purple-500" />
                <p className="ml-2 text-purple-700">Wonderland Kids Party Place</p>
              </div>
              <p className="mt-2 text-purple-600">Jl. Taman Bermain No. 123, Jakarta Selatan</p>
              <Button className="mx-auto mt-6 rounded-full bg-purple-500 text-white hover:bg-purple-600">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-purple-800">Party Activities</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-purple-300"></div>
                <div className="mx-4 h-8 w-8 flex items-center justify-center rounded-full bg-purple-100">
                <Gamepad2 className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex flex-col items-center rounded-lg bg-purple-50 p-6 text-center shadow-sm">
                <div className="mb-4 rounded-full bg-white p-4 shadow-sm">{activity.icon}</div>
                <h3 className="mb-2 font-sans text-xl font-bold text-purple-800">{activity.title}</h3>
                <p className="mb-4 text-sm font-medium text-purple-600">{activity.time}</p>
                <p className="text-purple-700">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-purple-800">Sofia's Gallery</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-purple-300"></div>
                <div className="mx-4 h-8 w-8 flex items-center justify-center rounded-full bg-purple-100">
                <CameraIcon className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={`/assets/aset6/girl${i}.jpg`}
                  alt={`Gallery photo ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishlist */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-purple-800">Sofia's Wishlist</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-purple-300"></div>
                <div className="mx-4 h-8 w-8 flex items-center justify-center rounded-full bg-purple-100">
                <Gift className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-purple-700">
              Your presence is the best gift! But if you'd like to bring something, here are some ideas Sofia would
              love:
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {wishlistItems.map((item) => (
              <div key={item.id} className="rounded-lg bg-purple-50 p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-purple-500" />
                  <h3 className="font-medium text-purple-800">{item.name}</h3>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-purple-700">{item.details}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex w-full items-center justify-center gap-2 rounded-full border-purple-300 text-purple-700 hover:bg-purple-100"
                  onClick={() => handleCopy(item.link, item.id)}
                >
                  <Copy className="h-4 w-4" />
                  {copied === item.id ? "Copied!" : "Copy Link"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-purple-800">RSVP</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-purple-300"></div>
                <div className="mx-4 h-8 w-8 flex items-center justify-center rounded-full bg-purple-100">
                <ListCheck className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-purple-700">
              Please let us know if you can join Sofia's birthday celebration by filling out the form below.
            </p>
          </div>

          <div className="mx-auto max-w-xl rounded-lg bg-purple-50 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 font-sans text-2xl font-bold text-purple-800">Thank You!</h3>
                <p className="text-purple-700">Your RSVP has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-4">
                  <Label htmlFor="name" className="text-purple-800">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1 border-purple-200 bg-white focus-visible:ring-purple-500"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="phone" className="text-purple-800">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="mt-1 border-purple-200 bg-white focus-visible:ring-purple-500"
                  />
                </div>

                <div className="mb-4">
                  <Label className="text-purple-800">Will you attend?</Label>
                  <RadioGroup value={formData.attendance} onValueChange={handleRadioChange} className="mt-2 flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="attending" id="attending" className="text-purple-500" />
                      <Label htmlFor="attending" className="text-purple-700">
                        Yes, I'll be there
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-attending" id="not-attending" className="text-purple-500" />
                      <Label htmlFor="not-attending" className="text-purple-700">
                        Sorry, I can't make it
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attendance === "attending" && (
                  <div className="mb-4">
                    <Label htmlFor="guests" className="text-purple-800">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="mt-1 border-purple-200 bg-white focus-visible:ring-purple-500"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <Label htmlFor="message" className="text-purple-800">
                    Birthday Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your birthday wishes for Sofia..."
                    className="mt-1 min-h-[120px] border-purple-200 bg-white focus-visible:ring-purple-500"
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-full bg-purple-500 text-white hover:bg-purple-600">
                  Submit RSVP
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Celebration Messages */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-sans text-2xl font-bold text-purple-800">Birthday Wishes</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-8 bg-purple-300"></div>
                <div className="mx-3 h-6 w-6 flex items-center justify-center rounded-full bg-purple-100">
                <LetterTextIcon className="h-6 w-6 text-purple-500" />
                </div>
              <div className="h-px w-8 bg-purple-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg bg-purple-50 p-6 shadow-sm">
            <CelebrationSlider celebrations={celebrations} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sans text-2xl font-bold text-purple-800">Sofia's 7th Birthday</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-purple-700">January 24, 2024</p>
          <div className="mx-auto mt-6 h-px w-16 bg-purple-300"></div>
          <p className="mt-6 text-sm text-purple-600">Thank you for celebrating with us!</p>
        </div>
      </footer>
    </div>
  )
}
