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
            <Button size="sm" className="bg-[#db2778] hover:bg-[#c01e67]">
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
          <h1 className="text-3xl font-bold">Template Pernikahan 01</h1>
          <p className="mt-2 text-gray-600">Template undangan pernikahan digital dengan desain minimalis dan elegan</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Template Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Informasi Template</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Kategori</h3>
                  <p>Minimalis</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Fitur</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-amber-800" />
                      <span>Galeri Foto</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-amber-800" />
                      <span>Countdown Timer</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-amber-800" />
                      <span>Informasi Lokasi</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-amber-800" />
                      <span>RSVP</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-amber-800" />
                      <span>Ucapan & Doa</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-amber-800" />
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
                <Button className="w-full bg-[#db2778] hover:bg-[#c01e67]">
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
                  <div className="flex h-[600px] flex-col md:flex-row">
                    {/* Left Side - Fixed Header */}
                    <div className="relative h-full w-full md:w-1/2 bg-gray-600">
                      <div className="relative z-10 flex h-full flex-col justify-center p-8 text-white">
                        <p className="mb-2 font-serif text-sm uppercase tracking-widest sm:text-base">
                          OUR WEDDING INVITATION
                        </p>

                        <h1 className="font-serif text-4xl font-light tracking-wide">
                          Dilan <span className="font-serif">&</span> Milea
                        </h1>

                        <div className="mt-8 max-w-xl">
                          <p className="text-xs italic text-amber-200 sm:text-sm">
                            "What Counts In Making A Happy Marriage Is Not So Much How Compatible You Are, But How You
                            Deal With Incompatibility..."
                          </p>
                        </div>

                        <div className="mt-12">
                          <p className="text-sm sm:text-base">Kepada Yth. Bapak / Ibu / Saudara/i</p>
                          <h2 className="mt-2 font-serif text-3xl">Nama Tamu</h2>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Scrollable Content Preview */}
                    <div className="relative h-full w-full overflow-hidden md:w-1/2">
                      <div className="h-full overflow-y-auto">
                        <div className="bg-gray-100 p-8 text-center">
                          <h2 className="font-serif text-2xl text-amber-900">The Wedding of</h2>
                          <h1 className="font-serif text-3xl">Dilan & Milea</h1>
                        </div>

                        <div className="p-4 text-center">
                          <h2 className="font-serif text-xl text-amber-900">Milea Saputri</h2>
                          <p className="mt-1 text-xs text-gray-600">Putri dari</p>
                          <p className="text-sm text-gray-800">
                            Bapak Lorem Ipsum
                            <br />
                            dan Ibu Lorem Ipsum
                          </p>
                        </div>

                        <div className="flex justify-center py-2">
                          <span className="font-serif text-2xl">&</span>
                        </div>

                        {/* More sections would be shown here but truncated for preview */}
                        <div className="border-t border-gray-200 p-4 text-center">
                          <p className="text-sm text-gray-500">
                            * Preview terbatas. Lihat template lengkap dengan mengklik tombol di bawah.
                          </p>
                        </div>
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
                  <Link href="/preview/template-01/demo">
                    <Button className="bg-black hover:bg-black/80">Buka Demo Interaktif</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link href="/preview/template-01/full-demo">
                <Button className="bg-[#db2778] hover:bg-[#c01e67]">Lihat Demo Lengkap</Button>
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
