import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import CountdownSection from "@/components/countdown-section";
import Link from "next/link";
import { ChevronLeft, Heart } from "lucide-react";

export default function Template05FullDemo() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="#categories"
            className="flex items-center text-gray-700 hover:text-[#db2778]"
          >
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

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        {/* Cover Section */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <Image
              src="/assets/aset4/prewed1.jpg" // Replace with your image path
              alt="Wedding background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <p className="text-white font-serif text-lg md:text-xl mb-4">
              THE WEDDING OF
            </p>

            <div className="mb-6 inline-block">
              <div className="border-2 border-gold-500 p-1 rounded-full">
                <div className="border-2 border-gold-500 p-8 rounded-full">
                  <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wider text-white">
                    Ahmad & Bella
                  </h1>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8 font-light">
              12 December 2025
            </p>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                  <h2 className="font-serif text-3xl text-white-900">
                    Save the Date
                  </h2>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="h-px w-12 bg-amber-400"></div>
                    <Heart className="mx-4 h-4 w-4 text-amber-500" />
                    <div className="h-px w-12 bg-amber-400"></div>
                  </div>
                </div>

                <div className="mx-auto max-w-3xl">
                  <CountdownSection
                    targetDate="2024-01-24T00:00:00"
                    textColor="text-white-900"
                  />
                </div>
              </div>
            </section>

            <Button className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-8 py-6 rounded-none">
              Open Invitation
            </Button>
          </div>

          <div className="absolute bottom-10 left-0 right-0 z-20 text-center">
            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto text-white" // Changed from text-gold-500
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Couple Section */}
        <div className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Bismillahirrahmanirrahim
            </h2>
            <p className="text-white mb-12 leading-relaxed">
              With the blessing of Allah SWT, we cordially invite you to
              celebrate our wedding day
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gold-500">
                  <Image
                    src="/assets/aset4/groom.jpg"
                    alt="Groom"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-white">
                  Ahmad Firdaus
                </h3>
                <p className="text-white mb-4">Son of Mr. & Mrs. Hasan</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/"
                    className="text-white hover:text-slate-200"
                  >
                    {" "}
                    {/* Changed from text-gold-500 hover:text-gold-400 */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gold-500">
                  <Image
                    src="/assets/aset4/bride.jpg"
                    alt="Bride"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-white">
                  Bella Safira
                </h3>
                <p className="text-white mb-4">Daughter of Mr. & Mrs. Rahman</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/"
                    className="text-white hover:text-slate-200"
                  >
                    {" "}
                    {/* Changed from text-gold-500 hover:text-gold-400 */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-xl font-serif text-white mb-4">
                "And of His signs is that He created for you from yourselves
                mates that you may find tranquility in them; and He placed
                between you affection and mercy."
              </p>
              <p className="text-white">Ar-Rum: 21</p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="py-20 px-4 bg-slate-800 relative">
          <div className="absolute top-0 left-0 w-full h-16 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-20"></div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-white">
              Wedding Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <Card className="bg-slate-900 border-gold-500/30">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white" // Changed from text-gold-500
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-4 text-white">
                    Akad Nikah
                  </h3>
                  <div className="space-y-2 text-white mb-6">
                    {" "}
                    {/* Changed from text-slate-300 */}
                    <p>Saturday, 12 December 2025</p>
                    <p>08:00 - 10:00 WIB</p>
                    <p>Grand Ballroom, Luxury Hotel</p>
                    <p>Jl. Sudirman No. 123, Jakarta</p>
                  </div>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-6 py-2 rounded-none">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-gold-500/30">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white" // Changed from text-gold-500
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-4 text-white">
                    Wedding Reception
                  </h3>
                  <div className="space-y-2 text-white mb-6">
                    {" "}
                    {/* Changed from text-slate-300 */}
                    <p>Saturday, 12 December 2025</p>
                    <p>11:00 - 14:00 WIB</p>
                    <p>Grand Ballroom, Luxury Hotel</p>
                    <p>Jl. Sudirman No. 123, Jakarta</p>
                  </div>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-6 py-2 rounded-none">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-64 md:h-96 mb-8 overflow-hidden">
              <Image
                src="/assets/venue1.jpeg"
                alt="Venue Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-6 py-2 rounded-none">
                  Open Map
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Love Story */}
        <div className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-white">
              Our Love Story
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/assets/aset4/prewed1.jpg"
                      alt="First Met"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-serif mb-2 text-white">
                    First Met
                  </h3>
                  <p className="text-white mb-2">January 2023</p>
                  <p className="text-white">
                    We first met at a mutual friend's birthday party. I noticed
                    her across the room, and couldn't take my eyes off her.
                    After gathering my courage, I approached her and introduced
                    myself. We talked for hours that night, and I knew there was
                    something special about her.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/assets/aset4/prewed4.jpg"
                      alt="First Date"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-serif mb-2 text-white">
                    First Date
                  </h3>
                  <p className="text-white mb-2">February 2023</p>
                  <p className="text-white">
                    Our first date was at a cozy café downtown. We spent hours
                    talking about our dreams, goals, and favorite books. The
                    connection was undeniable, and I knew I wanted to see her
                    again. We ended the night with a walk in the park under the
                    stars.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/assets/aset4/prewed5.jpg"
                      alt="Proposal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-serif mb-2 text-white">
                    The Proposal
                  </h3>
                  <p className="text-white mb-2">December 2024</p>
                  <p className="text-white">
                    After a year of dating, I knew she was the one. I planned a
                    surprise dinner at our favorite restaurant, followed by a
                    walk on the beach. As the sun was setting, I got down on one
                    knee and asked her to spend the rest of her life with me. To
                    my joy, she said yes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="py-20 px-4 bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-white">
              Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="relative h-48 md:h-64 overflow-hidden group"
                >
                  <Image
                    src={`/assets/aset4/prewed${item}.jpg`}
                    alt={`Gallery image ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RSVP */}
        <div className="py-20 px-4 bg-slate-900">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-white">
              RSVP
            </h2>

            <Card className="bg-slate-800 border-gold-500/30">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="bg-slate-900 border-gold-500/30 focus:border-gold-500 text-white placeholder:text-slate-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="bg-slate-900 border-gold-500/30 focus:border-gold-500 text-white placeholder:text-slate-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Will you attend?</Label>
                    <RadioGroup defaultValue="yes" className="flex space-x-8">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="yes"
                          className="text-white"
                        />{" "}
                        {/* Changed from text-gold-500 */}
                        <Label htmlFor="yes" className="text-white">
                          Yes, I will attend
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="no"
                          id="no"
                          className="text-white"
                        />{" "}
                        {/* Changed from text-gold-500 */}
                        <Label htmlFor="no" className="text-white">
                          No, I can't attend
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-white">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="0"
                      max="2"
                      placeholder="0"
                      className="bg-slate-900 border-gold-500/30 focus:border-gold-500 text-white placeholder:text-slate-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message for the Couple
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Write your wishes here..."
                      className="bg-slate-900 border-gold-500/30 focus:border-gold-500 text-white min-h-[100px] placeholder:text-slate-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-4 rounded-none"
                  >
                    Submit RSVP
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gifts */}
        <div className="py-20 px-4 bg-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">
              Digital Gifts
            </h2>
            <p className="text-white mb-12">
              Your presence at our wedding is the greatest gift of all. However,
              if you wish to honor us with a gift, we have provided the
              following options:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-slate-900 border-gold-500/30">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white" // Changed from text-gold-500
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-4 text-white">
                    Bank Transfer
                  </h3>
                  <div className="space-y-2 text-white mb-6">
                    {" "}
                    {/* Changed from text-slate-300 */}
                    <p>Bank Mandiri</p>
                    <p className="text-lg font-medium">1234 5678 9012 3456</p>
                    <p>a.n. Ahmad Firdaus</p>
                  </div>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-6 py-2 rounded-none">
                    Copy
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-gold-500/30">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white" // Changed from text-gold-500
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-4 text-white">
                    Digital Wallet
                  </h3>
                  <div className="space-y-2 text-white mb-6">
                    {" "}
                    {/* Changed from text-slate-300 */}
                    <p>GoPay / OVO / DANA</p>
                    <p className="text-lg font-medium">0812 3456 7890</p>
                    <p>a.n. Bella Safira</p>
                  </div>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-6 py-2 rounded-none">
                    Copy
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* Guestbook */}
        <div className="py-20 px-4 bg-slate-900">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">
              Guestbook
            </h2>
            <p className="text-white mb-12">
              We would love to hear from you! Please leave your message for us
              in the guestbook below.
            </p>
            <Card className="bg-slate-800 border-gold-500/30">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="guest-name" className="text-white">
                      Your Name
                    </Label>
                    <Input
                      id="guest-name"
                      placeholder="Enter your name"
                      className="bg-slate-900 border-gold-500/30 focus:border-gold-500 text-white placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guest-message" className="text-white">
                      Your Message
                    </Label>
                    <Textarea
                      id="guest-message"
                      placeholder="Write your message here..."
                      className="bg-slate-900 border-gold-500/30 focus:border-gold-500 text-white min-h-[100px] placeholder:text-slate-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-4 rounded-none"
                  >
                    Submit Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thank You */}
        <div className="py-20 px-4 bg-slate-800 relative">
          <div className="absolute top-0 left-0 w-full h-16 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-20"></div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">
              Thank You
            </h2>
            <p className="text-xl font-light text-white mb-12">
              We are truly blessed to have you share in our special day. Thank
              you for your love and support.
            </p>

            <div className="mb-12 inline-block">
              <div className="border-2 border-gold-500 p-1 rounded-full">
                <div className="border-2 border-gold-500 p-6 rounded-full">
                  <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wider text-white">
                    A & B
                  </h1>
                </div>
              </div>
            </div>

            <p className="text-white">12.12.2025</p>
          </div>
        </div>

        {/* Footer */}
        <div className="py-8 bg-slate-900 border-t border-gold-500/20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-white">Created with ❤️ by Suratan</p>{" "}
            {/* Changed from text-slate-400 */}
          </div>
        </div>
      </div>
    </div>
  );
}
