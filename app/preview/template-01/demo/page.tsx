"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function TemplateDemo() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attendance: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/preview/template-01" className="flex items-center text-gray-700 hover:text-[#db2778]">
            <ChevronLeft className="mr-1 h-5 w-5" />
            <span>Kembali ke Preview</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-[#db2778] hover:bg-[#c01e67]">
              Gunakan Template Ini
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Side - Fixed Header */}
        <div className="relative h-screen w-full md:w-1/2">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1080&text=Wedding+Photo"
              alt="Wedding couple"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-center p-8 text-white">
            <p className="mb-2 font-serif text-sm uppercase tracking-widest sm:text-base">Our Wedding Invitation</p>

            <h1 className="font-serif text-5xl font-light tracking-wide sm:text-7xl md:text-8xl">
              Dilan <span className="font-serif">&</span> Milea
            </h1>

            <div className="mt-8 max-w-xl">
              <p className="text-sm italic text-amber-200 sm:text-base">
                "What Counts In Making A Happy Marriage Is Not So Much How Compatible You Are, But How You Deal With
                Incompatibility. A Great Marriage Is Not When The Perfect Couple Comes Together. It Is When An Imperfect
                Couple Learns To Enjoy Their Differences."
              </p>
            </div>

            <div className="mt-12">
              <p className="text-sm sm:text-base">Kepada Yth. Bapak / Ibu / Saudara/i</p>
              <h2 className="mt-2 font-serif text-3xl">Nama Tamu</h2>
            </div>
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="relative h-screen w-full overflow-y-auto md:w-1/2">
          {/* Gallery Section */}
          <section id="gallery" className="bg-gray-900">
            <div className="relative h-64 w-full">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Gallery"
                alt="Wedding couple"
                fill
                className="object-cover"
              />
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
          </section>

          {/* Bride and Groom Information */}
          <section id="couple" className="flex flex-col">
            {/* Bride Information */}
            <div className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative h-64 w-48 overflow-hidden rounded-lg border-4 border-white shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Bride"
                    alt="Bride"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="font-serif text-3xl text-amber-900">Milea Saputri</h2>
              <p className="mt-2 text-sm text-gray-600">Putri dari</p>
              <p className="text-gray-800">
                Bapak Lorem Ipsum
                <br />
                dan Ibu Lorem Ipsum
              </p>
            </div>

            <div className="flex justify-center py-4">
              <span className="font-serif text-5xl">&</span>
            </div>

            {/* Groom Information */}
            <div className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative h-64 w-48 overflow-hidden rounded-lg border-4 border-white shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Groom"
                    alt="Groom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="font-serif text-3xl text-amber-900">Dilan Purnama</h2>
              <p className="mt-2 text-sm text-gray-600">Putra dari</p>
              <p className="text-gray-800">
                Bapak Lorem Ipsum
                <br />
                dan Ibu Lorem Ipsum
              </p>
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

                <Button type="submit" className="w-full bg-[#db2778] hover:bg-[#c01e67]">
                  Submit RSVP
                </Button>
              </form>
            )}
          </section>

          {/* Demo Footer */}
          <div className="border-t border-gray-200 bg-gray-50 p-4 text-center">
            <p className="text-sm text-gray-600">
              This is a demo of the template. To use this template for your event, click the button below.
            </p>
            <Button className="mt-4 bg-[#db2778] hover:bg-[#c01e67]">Gunakan Template Ini</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
