"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Users, Gift, Copy, MapPin, Calendar, Clock, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import CelebrationSlider from "@/components/celebration-slider"
import type { CelebrationMessage } from "@/types/celebration"
import CountdownSection from "@/components/countdown-section"

export default function FullTemplateDemo() {
  const weddingDate = new Date("2024-01-24T00:00:00")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "attending",
    guests: "1",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [celebrations, setCelebrations] = useState<CelebrationMessage[]>([
    { name: "John Doe", message: "Congratulations on your special day! Wishing you a lifetime of happiness together." },
    { name: "Jane Smith", message: "May your love grow stronger with each passing day. Best wishes!" },
    { name: "Robert Johnson", message: "So happy to celebrate this day with you both. Congratulations!" },
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
        email: "",
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

  const giftOptions = [
    {
      id: "bank1",
      type: "Bank Transfer",
      name: "Bank Mandiri",
      details: "1234-5678-9012-3456",
      accountName: "Dilan Purnama",
    },
    {
      id: "bank2",
      type: "Bank Transfer",
      name: "Bank BCA",
      details: "0987-6543-2109-8765",
      accountName: "Milea Saputri",
    },
    {
      id: "address",
      type: "Gift Delivery",
      name: "Home Address",
      details: "Jl. Cendrawasih No. 12, Bandung, Jawa Barat, 40115",
      accountName: "Dilan & Milea",
    },
  ]

  const timelineEvents = [
    {
      date: "August 15, 2018",
      title: "First Meeting",
      description:
        "We first met at a mutual friend's birthday party. Dilan spilled his drink on Milea's dress, and that's how our conversation started.",
      image: "/assets/aset4/prewed1.jpg",
    },
    {
      date: "October 10, 2018",
      title: "First Date",
      description:
        "Our first official date was at a small coffee shop downtown. We talked for hours and didn't realize the shop was closing.",
      image: "/assets/aset4/prewed2.jpg",
    },
    {
      date: "February 14, 2019",
      title: "Officially Together",
      description:
        "On Valentine's Day, Dilan asked Milea to be his girlfriend with a handwritten letter and her favorite flowers.",
      image: "/assets/aset4/prewed5.jpg",
    },
    {
      date: "December 25, 2022",
      title: "The Proposal",
      description:
        "During a family Christmas dinner, Dilan surprised everyone by getting down on one knee and proposing to Milea.",
      image: "/assets/aset4/prewed4.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/preview/template-02" className="flex items-center text-gray-700 hover:text-[#db2778]">
            <ChevronLeft className="mr-1 h-5 w-5" />
            <span>Kembali ke Preview</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button className="bg-black hover:bg-gray-800" size="sm">
              Gunakan Template Ini
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-screen w-full">
        <div className="relative h-full w-full">
          <Image
        src="/assets/aset4/header2.gif"
        alt="Wedding banner"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] md:text-sm">WE ARE GETTING MARRIED</p>
          <h1 className="font-sans text-4xl font-light tracking-widest md:text-6xl lg:text-8xl">DILAN & MILEA</h1>
          <div className="mt-8 h-px w-16 bg-white md:w-24"></div>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] md:text-lg">24.01.2024</p>
          <Button
        className="mt-8 border-white bg-transparent text-white hover:bg-white hover:text-black md:mt-12"
        onClick={() => {
          const coupleSection = document.getElementById("couple-section");
          if (coupleSection) {
            coupleSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
          >
        Scroll Down
          </Button>
        </div>
      </section>

      {/* Couple Section */}
      <section id="couple-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest">The Couple</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-black"></div>
          </div>

          <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
            {/* Bride */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/assets/aset4/bride.jpg"
                  alt="Bride"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-2xl font-light">Milea Saputri</h3>
              <p className="mt-2 text-gray-600">Putri dari Bapak Lorem Ipsum & Ibu Lorem Ipsum</p>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  asChild
                >
                  <a href="https://instagram.com/instagram" target="_blank" rel="noopener noreferrer">
                  <Users size={16} className="mr-2" />
                  @instagram
                  </a>
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-6xl font-light">&</div>
            </div>

            {/* Groom */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/assets/aset4/groom2.jpg"
                  alt="Groom"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-2xl font-light">Dilan Purnama</h3>
              <p className="mt-2 text-gray-600">Putra dari Bapak Lorem Ipsum & Ibu Lorem Ipsum</p>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  asChild
                >
                  <a href="https://instagram.com/instagram" target="_blank" rel="noopener noreferrer">
                  <Users size={16} className="mr-2" />
                  @instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest">Save The Date</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-black"></div>
            <p className="mt-6 text-xl">January 24, 2024</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <CountdownSection targetDate="2024-01-24T00:00:00" textColor="text-gray-800" />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest">Event Details</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-black"></div>
          </div>

          <div className="flex flex-col gap-12 md:flex-row">
            {/* Akad Nikah */}
            <div className="flex flex-1 flex-col items-center text-center">
              <h3 className="text-2xl font-light">Akad Nikah</h3>
              <div className="mt-6 flex items-center justify-center">
                <Calendar className="h-6 w-6" />
                <p className="ml-2">January 24, 2024</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Clock className="h-6 w-6" />
                <p className="ml-2">08:00 - 10:00 WIB</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <MapPin className="h-6 w-6" />
                <p className="ml-2">Grand Ballroom Hotel Mulia</p>
              </div>
              <p className="mt-2 text-gray-600">Jl. Asia Afrika No. 8, Senayan, Jakarta</p>
              <Button className="mt-6 bg-black hover:bg-gray-800">Get Directions</Button>
            </div>

            {/* Divider */}
            <div className="hidden md:block md:w-px md:self-stretch md:bg-gray-200"></div>

            {/* Resepsi */}
            <div className="flex flex-1 flex-col items-center text-center">
              <h3 className="text-2xl font-light">Resepsi</h3>
              <div className="mt-6 flex items-center justify-center">
                <Calendar className="h-6 w-6" />
                <p className="ml-2">January 24, 2024</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Clock className="h-6 w-6" />
                <p className="ml-2">11:00 - 14:00 WIB</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <MapPin className="h-6 w-6" />
                <p className="ml-2">Grand Ballroom Hotel Mulia</p>
              </div>
              <p className="mt-2 text-gray-600">Jl. Asia Afrika No. 8, Senayan, Jakarta</p>
              <Button className="mt-6 bg-black hover:bg-gray-800">Get Directions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest">Gallery</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-black"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[8,2,3,4,5,6,7,1].map((i) => (
              <div key={i} className="group relative aspect-square overflow-hidden">
                <Image
                  src={`/assets/aset4/prewed${i}.jpg`}
                  alt={`Gallery photo ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest">Our Love Story</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-black"></div>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center md:gap-8">
                  <div className="mb-4 md:mb-0 md:w-1/3">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="mb-2 text-sm font-medium text-gray-500">{event.date}</div>
                    <h3 className="mb-2 text-2xl font-light">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gift Registry */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest">Gift Registry</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-black"></div>
            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we
              have provided some options below.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {giftOptions.map((option) => (
              <div key={option.id} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-gray-600" />
                  <h3 className="font-medium">{option.type}</h3>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500">{option.name}</p>
                  <p className="font-medium">{option.details}</p>
                  <p className="text-sm">a.n. {option.accountName}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex w-full items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white"
                  onClick={() => handleCopy(option.details, option.id)}
                >
                  <Copy className="h-4 w-4" />
                  {copied === option.id ? "Copied!" : "Copy"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest">RSVP</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-black"></div>
            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Please let us know if you can make it to our special day by filling out the form below.
            </p>
          </div>

          <div className="mx-auto max-w-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 text-2xl font-light">Thank You!</h3>
                <p className="text-gray-600">Your RSVP has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-4">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="mb-4">
                  <Label>Will you attend?</Label>
                  <RadioGroup value={formData.attendance} onValueChange={handleRadioChange} className="mt-2 flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="attending" id="attending" />
                      <Label htmlFor="attending">Yes, I'll be there</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-attending" id="not-attending" />
                      <Label htmlFor="not-attending">Sorry, I can't make it</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attendance === "attending" && (
                  <div className="mb-4">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <Label htmlFor="message">Celebration Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your wishes for the couple..."
                    className="mt-1 min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                  Submit RSVP
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Celebration Messages */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-light uppercase tracking-widest">Celebration Messages</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-black"></div>
          </div>

          <div className="mx-auto max-w-4xl">
            <CelebrationSlider celebrations={celebrations} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-light">Dilan & Milea</h2>
          <p className="mt-2 text-sm uppercase tracking-widest">24.01.2024</p>
          <div className="mx-auto mt-6 h-px w-16 bg-white/30"></div>
          <p className="mt-6 text-sm text-gray-400">Thank you for being part of our special day</p>
          <p className="mt-4 text-sm text-gray-400">
            Created with ❤️ by <span className="text-white hover:underline">Suratan</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
