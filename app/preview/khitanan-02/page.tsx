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
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
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
          <h1 className="text-3xl font-bold">Template Khitanan 02</h1>
          <p className="mt-2 text-gray-600">Template undangan khitanan digital dengan desain tradisional dan islami</p>
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
                <Button className="bg-green-600 hover:bg-green-700 w-full">
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
                    <div className="relative h-1/2 w-full bg-green-50">
                      <Image
                        src="/assets/aset5/boy1.jpg"
                        alt="Islamic pattern background"
                        fill
                        className="object-cover opacity-70"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <div className="mb-4 font-serif text-sm uppercase tracking-widest text-green-800">
                          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                        </div>
                        <h1 className="font-serif text-4xl font-bold text-green-800">Walimatul Khitan</h1>
                        <h2 className="mt-2 font-serif text-2xl text-green-700">Muhammad Farhan</h2>
                        <div className="mt-4 text-sm text-green-700">Ahad, 24 Januari 2024</div>
                        <div className="mt-6 flex items-center justify-center">
                          <div className="h-px w-12 bg-green-300"></div>
                          <div className="mx-4 h-10 w-10 rounded-full border-2 border-green-300 p-1">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-green-600 text-white">
                              <span className="text-xs">MF</span>
                            </div>
                          </div>
                          <div className="h-px w-12 bg-green-300"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="flex h-1/2 flex-col bg-green-50/50 p-6 text-center">
                      <h2 className="font-serif text-2xl font-bold text-green-800">Undangan Walimatul Khitan</h2>
                      <p className="mt-4 text-green-700">
                        Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri
                        acara Walimatul Khitan putra kami
                      </p>
                      <div className="mt-6 flex justify-center space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                            24
                          </div>
                          <p className="mt-2 text-sm text-green-700">Hari</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                            12
                          </div>
                          <p className="mt-2 text-sm text-green-700">Jam</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                            30
                          </div>
                          <p className="mt-2 text-sm text-green-700">Menit</p>
                        </div>
                      </div>

                      {/* Preview Note */}
                      <div className="mt-auto border-t border-green-200 pt-4 text-center">
                        <p className="text-sm text-green-700">
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
                  <Link href="/preview/khitanan-02/demo">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Link href="https://wa.me/+6287741704737" target="_blank" rel="noopener noreferrer">
                        Buka Demo Interaktif
                      </Link>
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link href="/preview/khitanan-02/full-demo">
                <Button className="bg-green-600 hover:bg-green-700">
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
                    <Link href="https://wa.me/+6287741704737" target="_blank" rel="noopener noreferrer">
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
