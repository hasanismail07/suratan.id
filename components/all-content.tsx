"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { InstagramIcon, Gift, Copy, MapPin, Calendar, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import CountdownSection from "@/components/countdown-section"
import RelationshipTimeline from "@/components/relationship-timeline"
import type { CelebrationMessage } from "@/types/celebration"

interface AllContentProps {
  weddingDate: Date
  onAddCelebration: (celebration: CelebrationMessage) => void
}

export default function AllContent({ weddingDate, onAddCelebration }: AllContentProps) {
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
      onAddCelebration({
        name: formData.name,
        message: formData.message,
      })
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

  return (
    <div className="flex flex-col bg-white">
      {/* Gallery Section */}
      <section id="gallery" className="bg-gray-900">
        <div className="relative h-64 w-full">
          <Image src="/placeholder.svg?height=600&width=800" alt="Wedding couple" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center text-white">
            <h2 className="font-serif text-2xl">The Wedding of</h2>
            <h1 className="font-serif text-5xl">Dilan & Milea</h1>
            <p className="mt-4 text-sm">24.01.2024</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 p-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative h-32 w-full overflow-hidden">
              <Image
                src={`/placeholder.svg?height=300&width=300&text=Photo${i}`}
                alt={`Wedding photo ${i}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center p-4">
          <div className="font-serif text-6xl text-white">
            D<span className="mx-2 text-gray-400">|</span>M
          </div>
        </div>
      </section>

      {/* Bride and Groom Information */}
      <section id="couple" className="flex flex-col">
        {/* Bride Information */}
        <div className="flex flex-col items-center p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="relative h-64 w-48 overflow-hidden rounded-lg border-4 border-white shadow-lg">
              <Image src="/placeholder.svg?height=600&width=400" alt="Bride" fill className="object-cover" />
              <div className="absolute bottom-0 right-0 p-2">
                <h3 className="font-serif text-xl italic text-white drop-shadow-lg">Milea</h3>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-amber-900">Milea Saputri</h2>
          <p className="mt-2 text-sm text-gray-600">Putri dari</p>
          <p className="text-gray-800">
            Bapak Lorem Ipsum
            <br />
            dan Ibu Lorem Ipsum
          </p>

          <Button variant="outline" className="mt-3 flex items-center gap-2 bg-black text-white hover:bg-black/80">
            <InstagramIcon size={16} />
            @Instagram
          </Button>
        </div>

        <div className="flex justify-center py-4">
          <span className="font-serif text-5xl">&</span>
        </div>

        {/* Groom Information */}
        <div className="flex flex-col items-center p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="relative h-64 w-48 overflow-hidden rounded-lg border-4 border-white shadow-lg">
              <Image src="/placeholder.svg?height=600&width=400" alt="Groom" fill className="object-cover" />
              <div className="absolute bottom-0 right-0 p-2">
                <h3 className="font-serif text-xl italic text-white drop-shadow-lg">Dilan</h3>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-amber-900">Dilan Purnama</h2>
          <p className="mt-2 text-sm text-gray-600">Putra dari</p>
          <p className="text-gray-800">
            Bapak Lorem Ipsum
            <br />
            dan Ibu Lorem Ipsum
          </p>

          <Button variant="outline" className="mt-3 flex items-center gap-2 bg-black text-white hover:bg-black/80">
            <InstagramIcon size={16} />
            @Instagram
          </Button>
        </div>
      </section>

      {/* Relationship Timeline */}
      <section id="timeline" className="border-t border-gray-200 py-8">
        <RelationshipTimeline />
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="border-t border-gray-200 py-8">
        <CountdownSection weddingDate={weddingDate} />
      </section>

      {/* Venue Section */}
      <section id="venue" className="border-t border-gray-200">
        <div className="bg-gray-800 p-6 text-white">
          <h2 className="mb-4 font-serif text-2xl">Wedding Venue</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Calendar className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-medium">Date</p>
                <p>January 24, 2024</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-medium">Time</p>
                <p>Akad Nikah: 08:00 - 10:00 WIB</p>
                <p>Resepsi: 11:00 - 14:00 WIB</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-medium">Location</p>
                <p>Grand Ballroom Hotel Mulia</p>
                <p>Jl. Asia Afrika No. 8, Senayan, Jakarta</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
            {/* This would be replaced with an actual map component in production */}
            <div className="flex h-full flex-col items-center justify-center p-4 text-center">
              <MapPin className="mb-2 h-8 w-8 text-gray-400" />
              <p className="mb-2 text-lg font-medium">Wedding Venue Location</p>
              <p className="mb-4 text-sm text-gray-500">Grand Ballroom Hotel Mulia, Jakarta</p>
              <Button size="sm">Get Directions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="border-t border-gray-200 p-6">
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-serif text-3xl">Gift Registry</h2>
          <p className="text-gray-600">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we
            have provided some options below.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {giftOptions.map((option) => (
            <div key={option.id} className="rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
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
                className="flex items-center gap-2"
                onClick={() => handleCopy(option.details, option.id)}
              >
                <Copy className="h-4 w-4" />
                {copied === option.id ? "Copied!" : "Copy"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-gray-50 p-4 text-center">
          <p className="italic text-gray-600">
            "Thank you for your love, support, and generosity. We are truly blessed to have you in our lives."
          </p>
          <p className="mt-2 font-medium">- Dilan & Milea</p>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="border-t border-gray-200 p-6">
        <h2 className="mb-6 text-center font-serif text-3xl">RSVP</h2>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
            <h3 className="mb-2 text-2xl font-medium">Thank You!</h3>
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
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
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
                className="min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit RSVP
            </Button>
          </form>
        )}
      </section>
    </div>
  )
}
