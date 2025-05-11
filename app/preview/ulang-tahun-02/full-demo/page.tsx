import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, MapPin, Gift, Cake, Music, Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import CountdownSection from "@/components/countdown-section"
import CelebrationSlider from "@/components/celebration-slider"
import { celebrations } from "@/types/celebration"

export const metadata: Metadata = {
  title: "Ulang Tahun Dina - Orange Theme Demo",
  description: "Full demo of the Orange Theme Birthday invitation",
}

export default function UlangTahunOrangeDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Back Button */}
      <div className="container pt-4">
        <Link
          href="/preview/ulang-tahun-02"
          className="inline-flex items-center text-orange-600 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Preview
        </Link>
      </div>

      {/* Header Section */}
      <section className="relative py-16 px-4 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('/placeholder.svg?height=800&width=800&text=🎈🎁🎂')] bg-repeat opacity-20"></div>
        </div>
        <div className="container relative z-10 max-w-3xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
              <Cake className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">Ulang Tahun</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Dina Putri</h2>
          <p className="text-2xl text-orange-600 mb-4">Ke-7</p>
          <p className="text-lg text-orange-700 mb-8">Putri dari Bapak Budi & Ibu Sari</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <Calendar className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-orange-700">Sabtu, 20 Agustus 2025</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <Clock className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-orange-700">14:00 - 17:00 WIB</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
            <p className="text-orange-600 text-lg mb-2">Ayo datang dan rayakan hari spesial Dina bersama-sama!</p>
            <p className="text-orange-500 font-semibold">
              Ada banyak permainan seru, kue yang lezat, dan hadiah menarik! 🎁🎈🎂
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Menuju Hari Spesial</h2>
          <CountdownSection targetDate="2025-08-20T14:00:00" textColor="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Tentang Dina</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-200">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-400">
                  <Image
                    src="/assets/aset7/girl3.jpg"
                    alt="Dina Putri"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2 text-center">Dina Putri</h3>
              <p className="text-orange-600 text-center mb-4">Putri dari Bapak Budi & Ibu Sari</p>
              <div className="space-y-2 text-center">
                <p className="text-orange-500">
                  <span className="font-medium">Lahir:</span> 20 Agustus 2018
                </p>
                <p className="text-orange-500">
                  <span className="font-medium">Sekolah:</span> SD Ceria Mandiri
                </p>
                <p className="text-orange-500">
                  <span className="font-medium">Hobi:</span> Menari, Menggambar, Bermain Boneka
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-200">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Pesan dari Dina</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-orange-500" />
                    </div>
                  </div>
                  <p className="text-orange-600">
                    Halo teman-teman! Aku sangat senang bisa mengundang kalian ke pesta ulang tahunku yang ke-7!
                  </p>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Cake className="h-4 w-4 text-orange-500" />
                    </div>
                  </div>
                  <p className="text-orange-600">
                    Akan ada banyak kue, es krim, dan makanan lezat lainnya. Juga ada badut dan permainan seru!
                  </p>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Gift className="h-4 w-4 text-orange-500" />
                    </div>
                  </div>
                  <p className="text-orange-600">
                    Aku tidak sabar untuk bermain bersama kalian semua! Sampai jumpa di pestaku ya! 🎈🎉
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Detail Acara</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
            <Tabs defaultValue="main" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="main" className="text-lg">
                  Acara Utama
                </TabsTrigger>
                <TabsTrigger value="additional" className="text-lg">
                  Aktivitas & Games
                </TabsTrigger>
              </TabsList>
              <TabsContent value="main">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">Tanggal & Waktu</h3>
                      <p className="text-orange-600">Sabtu, 20 Agustus 2025</p>
                      <p className="text-orange-600">14:00 - 17:00 WIB</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">Lokasi</h3>
                      <p className="text-orange-600 mb-2">Kidz Fun Party House</p>
                      <p className="text-orange-600 mb-4">Jl. Taman Bermain No. 45, Jakarta Selatan</p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-yellow-600 transition-colors"
                      >
                        Lihat Lokasi
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="additional">
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-orange-600 mb-4">Rundown Acara</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-500 hover:to-yellow-500">
                          14:00
                        </Badge>
                        <span className="ml-3 text-orange-600">Penyambutan Tamu & Registrasi</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-500 hover:to-yellow-500">
                          14:30
                        </Badge>
                        <span className="ml-3 text-orange-600">Pembukaan & Penampilan Badut</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-500 hover:to-yellow-500">
                          15:00
                        </Badge>
                        <span className="ml-3 text-orange-600">Permainan & Kompetisi</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-500 hover:to-yellow-500">
                          16:00
                        </Badge>
                        <span className="ml-3 text-orange-600">Tiup Lilin & Potong Kue</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-500 hover:to-yellow-500">
                          16:30
                        </Badge>
                        <span className="ml-3 text-orange-600">Makan & Pembagian Goodie Bag</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <div className="flex items-center mb-4">
                        <Music className="h-5 w-5 text-orange-500 mr-2" />
                        <h3 className="text-lg font-bold text-orange-600">Aktivitas</h3>
                      </div>
                      <ul className="space-y-2 text-orange-600">
                        <li>• Face Painting</li>
                        <li>• Balloon Art</li>
                        <li>• Storytelling</li>
                        <li>• Dance Party</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <div className="flex items-center mb-4">
                        <Gift className="h-5 w-5 text-orange-500 mr-2" />
                        <h3 className="text-lg font-bold text-orange-600">Hadiah</h3>
                      </div>
                      <p className="text-orange-600 mb-4">Dina menyukai:</p>
                      <ul className="space-y-2 text-orange-600">
                        <li>• Boneka</li>
                        <li>• Buku cerita</li>
                        <li>• Peralatan menggambar</li>
                        <li>• Mainan edukasi</li>
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
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Galeri Foto</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-2xl border-2 border-orange-200">
                <Image
                  src={`/assets/aset7/girl${item}.jpg`}
                  alt={`Gallery image ${item}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Konfirmasi Kehadiran</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-orange-600">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-orange-600">
                    Nomor Telepon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full p-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="attendance" className="text-sm font-medium text-orange-600">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-yes" name="attendance" className="w-4 h-4 text-orange-500" />
                    <label htmlFor="attend-yes" className="text-orange-600">
                      Ya, kami akan hadir
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-no" name="attendance" className="w-4 h-4 text-orange-500" />
                    <label htmlFor="attend-no" className="text-orange-600">
                      Maaf, kami tidak bisa hadir
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="children" className="text-sm font-medium text-orange-600">
                  Jumlah Anak
                </label>
                <select
                  id="children"
                  className="w-full p-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="1">1 anak</option>
                  <option value="2">2 anak</option>
                  <option value="3">3 anak</option>
                  <option value="4">4 anak</option>
                  <option value="5">5 anak</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-orange-600">
                  Pesan atau Ucapan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Tuliskan pesan atau ucapan untuk Dina"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-colors font-medium"
              >
                Kirim Konfirmasi
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Celebration Messages */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Ucapan & Doa</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          </div>
          <CelebrationSlider celebrations={celebrations} />
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Terima Kasih</h2>
          <p className="text-xl mb-8">Atas doa dan kehadiran Anda di pesta ulang tahun Dina</p>
          <div className="mb-8">
            <p className="text-lg mb-2">Hormat kami,</p>
            <p className="text-xl font-bold">Keluarga Bapak Budi & Ibu Sari</p>
          </div>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="italic">"Setiap anak adalah hadiah terindah dari Tuhan"</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-orange-600 text-orange-100 text-center">
        <div className="container">
          <p>© 2025 Ulang Tahun Dina Putri. All rights reserved.</p>
          <p className="mt-2">
              Created with ❤️ by <span className="text-orange-100 hover:underline">Suratan</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
