"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TemplatePreviewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center text-gray-700 hover:text-[#db2778]">
            <ChevronLeft className="mr-1 h-5 w-5" />
            <span>Kembali</span>
          </Link>
          <div className="flex items-center space-x-4"> 
            <Button size="sm" className="bg-blue-500 hover:bg-blue-700">
              Gunakan Template Ini
            </Button>
          </div>
        </div>
      </header>

      {/* Template Preview */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Template Khitanan 03</h1>
          <p className="mt-2 text-gray-600">Template undangan khitanan digital dengan desain modern dan minimalis</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Template Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Informasi Template</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Kategori</h3>
                  <p>Khitanan</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Fitur</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-[#db2778]" />
                      <span>Galeri Foto</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-[#db2778]" />
                      <span>Countdown Timer</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-[#db2778]" />
                      <span>Informasi Lokasi</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-[#db2778]" />
                      <span>RSVP</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-[#db2778]" />
                      <span>Ucapan & Doa</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tersedia di Paket</h3>
                  <p>Premium, Exclusive</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-blue-500 hover:bg-blue-700">Gunakan Template Ini</Button>
              </div>
            </div>
          </div>

          {/* Template Preview */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <div className="relative min-h-screen flex items-center justify-center overflow-hidden">  {/* Updated to match full-demo */}
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

                  <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">  {/* Updated text color to white */}
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
                    <h3 className="text-xl md:text-2xl font-medium mb-2 text-white">Khitanan</h3>
                    <h1 className="font-bold text-4xl md:text-6xl mb-6 text-white">Ahmad Faisal</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg md:text-xl mb-8 text-white">We invite you to celebrate this special occasion</p>
                    <p className="text-2xl md:text-3xl font-bold mb-10 text-white">15.06.2025</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto mb-10">
                      <div className="bg-white p-4 rounded-xl shadow-md">
                        <div className="text-3xl font-bold text-blue-500">24</div>
                        <div className="text-sm text-blue-700">Days</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-md">
                        <div className="text-3xl font-bold text-blue-500">12</div>
                        <div className="text-sm text-blue-700">Hours</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-md">
                        <div className="text-3xl font-bold text-blue-500">30</div>
                        <div className="text-sm text-blue-700">Minutes</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-md">
                        <div className="text-3xl font-bold text-blue-500">45</div>
                        <div className="text-sm text-blue-700">Seconds</div>
                      </div>
                    </div>

                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full shadow-lg">
                      <a href="#rsvp">RSVP Now</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="demo" className="mt-4">
                <div className="flex h-[600px] flex-col items-center justify-center rounded-lg border p-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold">Demo Interaktif</h3>
                  <p className="mb-6 text-gray-600">
                    Lihat dan rasakan pengalaman undangan digital secara langsung dengan demo interaktif
                  </p>
                  <Link href="/preview/khitanan-03/demo">
                    <Button className="bg-blue-500 hover:bg-blue-700">Buka Demo Interaktif</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link href="/preview/khitanan-04/full-demo">
                <Button className="bg-blue-500 hover:bg-blue-700">Lihat Demo Lengkap</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
