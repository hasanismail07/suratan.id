import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, MapPin, Gift, Music, Wine } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import CountdownSection from "@/components/countdown-section"
import CelebrationSlider from "@/components/celebration-slider"
import { celebrations } from "@/types/celebration"

export const metadata: Metadata = {
  title: "Ulang Tahun Diana - Red/Gold Theme Demo",
  description: "Full demo of the Red/Gold Theme Birthday invitation",
}

export default function UlangTahunRedGoldDemo() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container pt-4">
        <Link
          href="/preview/ulang-tahun-03"
          className="inline-flex items-center text-red-700 hover:text-red-500 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Preview
        </Link>
      </div>

      {/* Header Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-red-900 to-red-800 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat opacity-20"></div>
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ulang Tahun</h1>
            <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Diana Wijaya</h2>
          <p className="text-2xl text-yellow-400 mb-4 font-serif">4th Birthday Celebration</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex items-center bg-red-800/50 backdrop-blur-sm px-6 py-3 rounded-none border border-yellow-500">
              <Calendar className="h-5 w-5 text-yellow-400 mr-3" />
              <span className="font-serif">Sabtu, 25 Oktober 2025</span>
            </div>
            <div className="flex items-center bg-red-800/50 backdrop-blur-sm px-6 py-3 rounded-none border border-yellow-500">
              <Clock className="h-5 w-5 text-yellow-400 mr-3" />
              <span className="font-serif">19:00 - 23:00 WIB</span>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="p-8 bg-red-800/50 backdrop-blur-sm rounded-none border border-yellow-500">
              <p className="text-white italic mb-4 font-serif">
                "Life is not measured by the number of breaths we take, but by the moments that take our breath away."
              </p>
              <p className="text-yellow-400 font-medium">- Maya Angelou</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-red-900 mb-10">
            Counting Down to the Celebration
          </h2>
          <CountdownSection targetDate="2025-10-25T19:00:00" textColor="text-red-900" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">About Diana</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-none shadow-lg border border-red-100">
              <div className="mb-8 flex justify-center">
                <div className="w-40 h-40 overflow-hidden rounded-none border-4 border-yellow-500">
                  <Image
                    src="/assets/aset7/girl3.jpg"
                    alt="Diana Wijaya"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-red-800 mb-3 text-center">Diana Wijaya</h3>
              <p className="text-red-700 text-center mb-6 font-serif">Celebrating 40 Years of Life</p>
              <div className="space-y-3 text-center">
                <p className="text-red-600 font-serif">
                  <span className="font-medium">Born:</span> October 25, 1985
                </p>
                <p className="text-red-600 font-serif">
                  <span className="font-medium">Profession:</span> Marketing Director
                </p>
                <p className="text-red-600 font-serif">
                  <span className="font-medium">Passions:</span> Travel, Photography, Wine Tasting
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-none shadow-lg border border-red-100">
              <h3 className="text-xl font-serif font-bold text-red-800 mb-6">A Message from Diana</h3>
              <div className="space-y-4">
                <p className="text-red-700 leading-relaxed font-serif">Dear friends and family,</p>
                <p className="text-red-700 leading-relaxed font-serif">
                  As I celebrate this milestone birthday, I am filled with gratitude for the amazing people who have
                  been part of my journey. Each of you has contributed to making my life richer and more meaningful.
                </p>
                <p className="text-red-700 leading-relaxed font-serif">
                  I would be honored if you would join me for an evening of celebration, reflection, and creating new
                  memories together.
                </p>
                <p className="text-red-700 leading-relaxed font-serif">With love and appreciation,</p>
                <p className="text-red-800 font-bold font-serif">Diana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4 bg-red-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">Event Details</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="bg-white p-10 rounded-none shadow-lg border border-red-100">
            <Tabs defaultValue="main" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-10">
                <TabsTrigger value="main" className="text-lg font-serif">
                  Main Event
                </TabsTrigger>
                <TabsTrigger value="additional" className="text-lg font-serif">
                  Program & Activities
                </TabsTrigger>
              </TabsList>
              <TabsContent value="main">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-none">
                        <Calendar className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-red-800 mb-2">Date & Time</h3>
                        <p className="text-red-700 font-serif">Saturday, October 25, 2025</p>
                        <p className="text-red-700 font-serif">7:00 PM - 11:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-none">
                        <Wine className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-red-800 mb-2">Dress Code</h3>
                        <p className="text-red-700 font-serif">Elegant Cocktail Attire</p>
                        <p className="text-red-700 font-serif">Red & Gold Accents Appreciated</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-none">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-red-800 mb-2">Venue</h3>
                        <p className="text-red-700 mb-2 font-serif">The Grand Ballroom, Luxury Hotel</p>
                        <p className="text-red-700 mb-4 font-serif">Jl. Sudirman No. 123, Jakarta Pusat</p>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-red-700 text-white px-4 py-2 rounded-none hover:bg-red-800 transition-colors font-serif"
                        >
                          View Location
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="additional">
                <div className="space-y-8">
                  <div className="bg-red-50 p-6 rounded-none border border-red-100">
                    <h3 className="text-xl font-serif font-bold text-red-800 mb-6">Event Program</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-red-700 hover:bg-red-700 rounded-none">19:00</Badge>
                        <span className="ml-3 text-red-700 font-serif">Welcome Reception & Cocktails</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-red-700 hover:bg-red-700 rounded-none">20:00</Badge>
                        <span className="ml-3 text-red-700 font-serif">Dinner Service</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-red-700 hover:bg-red-700 rounded-none">21:00</Badge>
                        <span className="ml-3 text-red-700 font-serif">Speeches & Toasts</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-red-700 hover:bg-red-700 rounded-none">21:30</Badge>
                        <span className="ml-3 text-red-700 font-serif">Cake Cutting Ceremony</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-red-700 hover:bg-red-700 rounded-none">22:00</Badge>
                        <span className="ml-3 text-red-700 font-serif">Dancing & Entertainment</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-none border border-red-100">
                      <div className="flex items-center mb-4">
                        <Music className="h-5 w-5 text-red-600 mr-2" />
                        <h3 className="text-lg font-serif font-bold text-red-800">Entertainment</h3>
                      </div>
                      <ul className="space-y-2 text-red-700 font-serif">
                        <li>• Live Jazz Band</li>
                        <li>• Professional Photographer</li>
                        <li>• Photo Booth</li>
                        <li>• Wine Tasting Station</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-none border border-red-100">
                      <div className="flex items-center mb-4">
                        <Gift className="h-5 w-5 text-red-600 mr-2" />
                        <h3 className="text-lg font-serif font-bold text-red-800">Gift Information</h3>
                      </div>
                      <p className="text-red-700 mb-4 font-serif">
                        Your presence is the greatest gift. However, if you wish to give something:
                      </p>
                      <ul className="space-y-2 text-red-700 font-serif">
                        <li>• Wine or Champagne</li>
                        <li>• Travel Vouchers</li>
                        <li>• Photography Equipment</li>
                        <li>• Charitable Donations in Diana's Name</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">Photo Gallery</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-none shadow-md border border-red-100">
                <Image
                  src={`/assets/aset7/girl${item}.jpg`}
                  alt={`Gallery image ${item}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-red-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">RSVP</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="bg-white p-10 rounded-none shadow-lg border border-red-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-red-800 font-serif">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border border-red-200 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 font-serif"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-red-800 font-serif">
                  Phone Number
                  </label>
                  <input
                  id="phone"
                  type="tel"
                  className="w-full p-3 border border-red-200 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 font-serif"
                  placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="attendance" className="text-sm font-medium text-red-800 font-serif">
                  Attendance
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-yes" name="attendance" className="w-4 h-4 text-red-600" />
                    <label htmlFor="attend-yes" className="text-red-700 font-serif">
                      I will attend
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-no" name="attendance" className="w-4 h-4 text-red-600" />
                    <label htmlFor="attend-no" className="text-red-700 font-serif">
                      I cannot attend
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium text-red-800 font-serif">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  className="w-full p-3 border border-red-200 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 font-serif"
                >
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="dietary" className="text-sm font-medium text-red-800 font-serif">
                  Dietary Restrictions
                </label>
                <input
                  id="dietary"
                  type="text"
                  className="w-full p-3 border border-red-200 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 font-serif"
                  placeholder="Please specify any dietary restrictions"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-red-800 font-serif">
                  Message for Diana
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-red-200 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 font-serif"
                  placeholder="Write a message or birthday wish for Diana"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3 px-6 rounded-none hover:bg-red-800 transition-colors font-medium font-serif"
              >
                Send RSVP
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Celebration Messages */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">Wishes & Messages</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <CelebrationSlider celebrations={celebrations} />
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-800 to-red-900 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Thank You</h2>
          <p className="text-xl mb-10 text-yellow-200 font-serif">For celebrating this milestone with me</p>
          <div className="mb-10">
            <p className="text-lg mb-2 text-yellow-100 font-serif">With love,</p>
            <p className="text-2xl font-bold font-serif">Diana Wijaya</p>
          </div>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-10"></div>
          <p className="italic text-yellow-100 font-serif">"The best is yet to come."</p>
          <p className="mt-2 font-medium text-yellow-300 font-serif">- Frank Sinatra</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-red-950 text-red-200 text-center">
        <div className="container">
          <p className="font-serif">© 2025 Diana Wijaya's 4th Birthday Celebration. All rights reserved.</p>
          <p className="mt-2 font-serif">
              Created with ❤️ by <span className="text-yellow-300 hover:underline">Suratan</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
