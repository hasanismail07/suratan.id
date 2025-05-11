"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Calendar, Clock, Gift, Send, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function UlangTahun04FullDemo() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const targetDate = new Date("2024-08-10T19:00:00")

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000))
      } else {
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      }
    }

    updateCountdown()
    const intervalId = setInterval(updateCountdown, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/aset6/girl2.jpg"
            alt="Birthday Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="z-10 px-4 text-center">
          <p className="text-lg uppercase tracking-widest text-gray-600">You're Invited to</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
            Sarah's <span className="block mt-2">30th Birthday</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">Saturday, August 10, 2024</p>
          <div className="mt-12">
            <Button className="rounded-none bg-gray-900 px-8 py-6 text-lg hover:bg-gray-800">Open Invitation</Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <ChevronDown className="h-10 w-10 animate-bounce text-gray-900" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">About the Celebrant</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full">
              <Image src="/assets/aset6/girl.jpg" alt="Sarah" fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Sarah Johnson</h3>
            <p className="mt-2 text-gray-600">Turning 30 and fabulous!</p>

            <div className="mt-8 max-w-2xl text-center">
              <p className="text-gray-600">
                Join me as I celebrate this milestone birthday! It's been an amazing journey so far, and I'm excited to
                share this special day with all my friends and family. Let's make memories that will last a lifetime!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Countdown to the Party</h2>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: minutes, label: "Minutes" },
                { value: seconds, label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center border border-gray-300 bg-white md:h-24 md:w-24">
                    <span className="text-3xl font-bold text-gray-900 md:text-4xl">{item.value}</span>
                  </div>
                  <span className="mt-2 text-sm text-gray-600 md:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Event Details</h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card className="overflow-hidden border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Birthday+Party"
                  alt="Birthday Party"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">30th Birthday Celebration</h3>
                <div className="mt-4 flex flex-col space-y-4">
                  <div className="flex items-center">
                    <Calendar className="mr-4 h-5 w-5 text-gray-600" />
                    <span>Saturday, August 10, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-4 h-5 w-5 text-gray-600" />
                    <span>7:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 h-5 w-5 text-gray-600" />
                    <span>The Loft, 123 Main Street, New York</span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600">Dress code: Cocktail Attire</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">RSVP</h2>
            <p className="text-gray-600">Please let us know if you can make it by July 15, 2024</p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Tabs defaultValue="rsvp" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="rsvp">RSVP Form</TabsTrigger>
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
              </TabsList>
              <TabsContent value="rsvp" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Your Name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Your Email" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input type="number" id="guests" defaultValue={1} />
                      </div>
                      <Button className="rounded-none bg-gray-900 hover:bg-gray-800">
                        Send RSVP <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="contact" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input type="text" id="subject" placeholder="Subject" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your Message" />
                      </div>
                      <Button className="rounded-none bg-gray-900 hover:bg-gray-800">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Gift Registry</h2>
            <p className="text-gray-600">Your presence is the greatest gift, but if you'd like to contribute...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="border-gray-200">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Gift+Idea+${index}`}
                    alt={`Gift Idea ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Gift Idea {index}</h3>
                  <p className="mt-2 text-gray-600">A description of the gift idea.</p>
                  <Button className="mt-4 rounded-none bg-gray-900 hover:bg-gray-800">
                    View Gift <Gift className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-12 text-center text-white">
        Created with ❤️ by <span className="text-white-300 hover:underline">Suratan</span>
      </footer>
    </div>
  )
}
