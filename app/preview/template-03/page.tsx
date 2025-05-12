"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RelatedTemplates from "@/components/related-template"

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
            <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
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
          <h1 className="text-3xl font-bold">Template Floral 03</h1>
          <p className="mt-2 text-gray-600">Template undangan pernikahan digital dengan desain floral yang romantis</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Template Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Informasi Template</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Kategori</h3>
                  <p>Floral</p>
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
                      <span>Love Story Timeline</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tersedia di Paket</h3>
                  <p>Premium, Exclusive</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-pink-500 hover:bg-pink-600">
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
                    <div className="relative h-1/2 w-full bg-pink-50">
                      <Image
                        src="/assets/aset4/header2.gif"
                        alt="Floral background"
                        fill
                        className="object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <div className="mb-4 text-sm uppercase tracking-widest text-pink-700">The Wedding of</div>
                        <h1 className="font-serif text-4xl italic text-pink-800">
                          Dilan <span className="font-serif">&</span> Milea
                        </h1>
                        <div className="mt-4 text-sm text-pink-700">January 24, 2024</div>
                        <div className="mt-6 flex items-center justify-center">
                          <div className="h-px w-12 bg-pink-300"></div>
                          <Heart className="mx-4 h-4 w-4 text-pink-500" />
                          <div className="h-px w-12 bg-pink-300"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="flex h-1/2 flex-col p-6 text-center">
                      <h2 className="font-serif text-2xl italic text-pink-800">Save the Date</h2>
                      <p className="mt-4 text-gray-600">
                        We joyfully invite you to share in our celebration of love and commitment.
                      </p>
                      <div className="mt-6 flex justify-center space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-xl font-light text-pink-800">
                            24
                          </div>
                          <p className="mt-2 text-sm text-gray-600">Days</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-xl font-light text-pink-800">
                            12
                          </div>
                          <p className="mt-2 text-sm text-gray-600">Hours</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-xl font-light text-pink-800">
                            30
                          </div>
                          <p className="mt-2 text-sm text-gray-600">Minutes</p>
                        </div>
                      </div>

                      {/* Preview Note */}
                      <div className="mt-auto border-t border-gray-200 pt-4 text-center">
                        <p className="text-sm text-gray-500">
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
                  <Link href="/preview/template-03/demo">
                    <Button className="bg-pink-500 hover:bg-pink-600">Buka Demo Interaktif</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link href="/preview/template-03/full-demo">
                <Button className="bg-pink-500 hover:bg-pink-600">Lihat Demo Lengkap</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Templates */}
      <RelatedTemplates />
      </div>
  )
}
