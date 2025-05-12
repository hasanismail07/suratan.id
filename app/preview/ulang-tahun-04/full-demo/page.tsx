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
    const targetDate = new Date("2025-07-20T19:00:00")

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
            src="/placeholder.svg?height=1080&width=720&text=Birthday+Background"
            alt="Birthday Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="z-10 px-4 text-center">
          <p className="text-lg uppercase tracking-widest text-teal-400">You're Invited to</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Dewi's <span className="block mt-2">30th Birthday</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300">Saturday, July 20, 2025</p>
          <div className="mt-12">
            <Button className="bg-teal-500 hover:bg-teal-600 px-8 py-6 text-lg">Open Invitation</Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <ChevronDown className="h-10 w-10 animate-bounce text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">About the Celebrant</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-teal-500">
              <Image src="/placeholder.svg?height=400&width=400&text=Dewi" alt="Dewi" fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Dewi Sartika</h3>
            <p className="mt-2 text-teal-600">Turning 30 and fabulous!</p>

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
                  <div className="flex h-20 w-20 items-center justify-center border border-teal-300 bg-white md:h-24 md:w-24">
                    <span className="text-3xl font-bold text-teal-600 md:text-4xl">{item.value}</span>
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
                    <Calendar className="mr-4 h-5 w-5 text-teal-600" />
                    <span>Saturday, July 20, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-4 h-5 w-5 text-teal-600" />
                    <span>7:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 h-5 w-5 text-teal-600" />
                    <span>The Loft, 123 Main Street, Jakarta</span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600">Dress code: Cocktail Attire</p>
                </div>
                <div className="mt-6">
                  <Button className="bg-teal-500 hover:bg-teal-600">
                    Get Directions <MapPin className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Photo Gallery</h2>
            <p className="text-gray-600">Memories through the years</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative h-48 md:h-64 overflow-hidden group">
                <Image
                  src={`/placeholder.svg?height=400&width=300&text=Photo+${item}`}
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">RSVP</h2>
            <p className="text-gray-600">Please let us know if you can make it by July 10, 2025</p>
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
                      <Button className="bg-teal-500 hover:bg-teal-600">
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
                      <Button className="bg-teal-500 hover:bg-teal-600">
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Gift Registry</h2>
            <p className="text-gray-600">Your presence is the greatest gift, but if you'd like to contribute...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <Button className="mt-4 bg-teal-500 hover:bg-teal-600">
                    View Gift <Gift className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Gift</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-2">Bank Transfer:</p>
                    <p className="font-medium">Bank Mandiri</p>
                    <p>1234 5678 9012 3456</p>
                    <p className="mb-4">a.n. Dewi Sartika</p>
                    <Button className="bg-teal-500 hover:bg-teal-600">Copy</Button>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">E-Wallet:</p>
                    <p className="font-medium">GoPay / OVO / DANA</p>
                    <p>0812 3456 7890</p>
                    <p className="mb-4">a.n. Dewi Sartika</p>
                    <Button className="bg-teal-500 hover:bg-teal-600">Copy</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Wishes & Messages</h2>
            <p className="text-gray-600">Leave your birthday wishes for Dewi</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card className="border-gray-200 mb-8">
              <CardContent className="p-6">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="wish-name">Your Name</Label>
                    <Input type="text" id="wish-name" placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="wish-message">Your Message</Label>
                    <Textarea id="wish-message" placeholder="Write your birthday wishes here..." />
                  </div>
                  <Button className="bg-teal-500 hover:bg-teal-600">
                    Send Wishes <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {[
                {
                  name: "Rina Wijaya",
                  message:
                    "Happy 30th birthday, Dewi! Wishing you all the best on your special day. May this new decade bring you joy, success, and lots of adventures!",
                  date: "2 days ago",
                },
                {
                  name: "Budi Santoso",
                  message:
                    "Happy birthday! May your 30s be even better than your 20s. Looking forward to celebrating with you!",
                  date: "3 days ago",
                },
                {
                  name: "Siti Rahayu",
                  message: "Dewi, happy birthday! You're such an amazing friend. Can't wait to see you at the party!",
                  date: "5 days ago",
                },
              ].map((wish, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="text-teal-700 font-medium">{wish.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium text-gray-900">{wish.name}</h4>
                          <span className="text-xs text-gray-500">{wish.date}</span>
                        </div>
                        <p className="mt-1 text-gray-600">{wish.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="mb-2">Thank you for celebrating with me!</p>
          <p>Created with ❤️ by Suratan</p>
        </div>
      </footer>
    </div>
  )
}
