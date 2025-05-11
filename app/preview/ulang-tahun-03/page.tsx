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
            <Button size="sm" className="bg-red-700 hover:bg-red-800">
              <Link
                href="https://wa.me/+6287741704737"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Gunakan Template Ini
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Template Preview */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Template Ulang Tahun 03</h1>
          <p className="mt-2 text-gray-600">Template undangan ulang tahun digital dengan desain elegan untuk dewasa</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Template Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Informasi Template</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Kategori</h3>
                  <p>Ulang Tahun</p>
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
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-[#db2778]" />
                      <span>Wishlist Hadiah</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tersedia di Paket</h3>
                  <p>Premium, Exclusive</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-red-700 hover:bg-red-800">
                  <Link
                    href="https://wa.me/+6287741704737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Gunakan Template Ini
                  </Link>
                </Button>
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
                <div className="overflow-hidden rounded-lg border">
                  <div className="flex h-[600px] flex-col">
                    {/* Header */}
                    <div className="relative h-1/2 w-full bg-red-900">
                      <Image
                        src="/assets/aset7/girl4.jpg"
                        alt="Elegant background"
                        fill
                        className="object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <div className="mb-4 text-sm uppercase tracking-widest text-red-300">You're Invited</div>
                        <h1 className="font-serif text-4xl italic text-white">
                          Diana's 4th <br /> Birthday Celebration
                        </h1>
                        <div className="mt-4 text-sm text-red-300">January 24, 2024 | 7:00 PM</div>
                        <div className="mt-6 flex items-center justify-center">
                          <div className="h-px w-12 bg-red-500"></div>
                          <div className="mx-4 h-10 w-10 rounded-full border border-red-500"></div>
                          <div className="h-px w-12 bg-red-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="flex h-1/2 flex-col bg-white p-6 text-center">
                      <h2 className="font-serif text-2xl italic text-red-900">Join Us for an Evening of Celebration</h2>
                      <p className="mt-4 text-red-700">
                        Please join us for cocktails, dinner, and dancing as we celebrate Diana's 40th birthday
                      </p>
                      <div className="mt-6 flex justify-center space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-none border border-red-200 text-xl font-light text-red-900">
                            24
                          </div>
                          <p className="mt-2 text-sm text-red-700">Days</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-none border border-red-200 text-xl font-light text-red-900">
                            12
                          </div>
                          <p className="mt-2 text-sm text-red-700">Hours</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-none border border-red-200 text-xl font-light text-red-900">
                            30
                          </div>
                          <p className="mt-2 text-sm text-red-700">Minutes</p>
                        </div>
                      </div>

                      {/* Preview Note */}
                      <div className="mt-auto border-t border-red-100 pt-4 text-center">
                        <p className="text-sm text-red-700">
                          * Preview terbatas. Lihat template lengkap dengan mengklik tombol di bawah.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="demo" className="mt-4">
                <div className="flex h-[600px] flex-col items-center justify-center rounded-lg border p-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold">Demo Interaktif</h3>
                  <p className="mb-6 text-gray-600">
                    Lihat dan rasakan pengalaman undangan digital secara langsung dengan demo interaktif
                  </p>
                  <Link href="/preview/ulang-tahun-03/demo">
                    <Button className="bg-red-700 hover:bg-red-800">
                      <Link
                        href="https://wa.me/+6287741704737"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        Buka Demo Interaktif
                      </Link>
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link href="/preview/ulang-tahun-03/full-demo">
                <Button className="bg-red-700 hover:bg-red-800">
                    Lihat Demo Lengkap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Templates */}
      <div className="bg-[#fdf2f8] py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Template Lainnya</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Template+${i}`}
                    alt={`Template ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">
                    Template {i === 1 ? "Pernikahan" : i === 2 ? "Khitanan" : "Ulang Tahun"} {i}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Undangan digital dengan tema {i === 1 ? "pernikahan" : i === 2 ? "khitanan" : "ulang tahun"}
                  </p>
                  <Button variant="outline" className="mt-3 w-full text-sm">
                    <Link
                      href="https://wa.me/+6287741704737"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      Lihat Detail
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
