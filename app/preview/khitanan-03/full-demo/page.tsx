import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, MapPin, Gift, Music, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import CountdownSection from "@/components/countdown-section"
import CelebrationSlider from "@/components/celebration-slider"
import { celebrations } from "@/types/celebration"

export const metadata: Metadata = {
  title: "Khitanan Rayyan - Teal Theme Demo",
  description: "Full demo of the Teal Theme Khitanan invitation",
}

export default function KhitananTealDemo() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container pt-4">
        <Link
          href="/preview/khitanan-03"
          className="inline-flex items-center text-teal-700 hover:text-teal-500 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Preview
        </Link>
      </div>

      {/* Header Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-teal-900 to-teal-800 text-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-8 inline-block">
              <div className="w-24 h-1 bg-teal-400 mx-auto mb-8"></div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Khitanan</h1>
              <div className="w-24 h-1 bg-teal-400 mx-auto mt-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Muhammad Rayyan</h2>
            <p className="text-lg text-teal-100 mb-8">Putra dari Bapak Ridwan & Ibu Anisa</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
              <div className="flex items-center bg-teal-800/50 backdrop-blur-sm px-6 py-3 rounded-md border border-teal-700">
                <Calendar className="h-5 w-5 text-teal-300 mr-3" />
                <span>Sabtu, 12 Juli 2025</span>
              </div>
              <div className="flex items-center bg-teal-800/50 backdrop-blur-sm px-6 py-3 rounded-md border border-teal-700">
                <Clock className="h-5 w-5 text-teal-300 mr-3" />
                <span>09:00 - 15:00 WIB</span>
              </div>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="p-6 bg-teal-800/50 backdrop-blur-sm rounded-md border border-teal-700">
                <p className="text-teal-100 italic mb-4">
                  "Sesungguhnya Allah menyukai orang-orang yang bertaubat dan menyukai orang-orang yang menyucikan
                  diri."
                </p>
                <p className="text-teal-300 font-medium">- QS. Al-Baqarah: 222</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-900 mb-10">Menghitung Hari</h2>
          <CountdownSection targetDate="2025-07-12T09:00:00" textColor="text-teal-900" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Tentang Rayyan</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-md shadow-lg border border-teal-100">
              <div className="mb-8 flex justify-center">
                <div className="w-40 h-40 overflow-hidden rounded-md border-4 border-teal-500">
                  <Image
                    src="/assets/aset5/boy2.jpg"
                    alt="Muhammad Rayyan"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Muhammad Rayyan</h3>
              <p className="text-teal-600 text-center mb-4">Putra dari Bapak Ridwan & Ibu Anisa</p>
              <div className="space-y-2 text-center">
                <p className="text-teal-600">
                  <span className="font-medium">Lahir:</span> 5 Juli 2019
                </p>
                <p className="text-teal-600">
                  <span className="font-medium">Sekolah:</span> TK Al-Furqan
                </p>
                <p className="text-teal-600">
                  <span className="font-medium">Hobi:</span> Menggambar, Berenang
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-md shadow-lg border border-teal-100">
              <h3 className="text-xl font-bold text-teal-800 mb-6">Tentang Khitanan</h3>
              <p className="text-teal-600 mb-4 leading-relaxed">
                Khitanan adalah salah satu ajaran Islam yang merupakan sunnah Nabi Ibrahim AS dan diteruskan oleh Nabi
                Muhammad SAW.
              </p>
              <p className="text-teal-600 mb-4 leading-relaxed">
                Khitanan memiliki banyak manfaat kesehatan dan merupakan bagian dari fitrah manusia yang dianjurkan
                dalam Islam.
              </p>
              <p className="text-teal-600 leading-relaxed">
                Kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara khitanan putra kami dan memberikan doa restu
                untuk kesehatan dan masa depannya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4 bg-teal-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Detail Acara</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="bg-white p-10 rounded-md shadow-lg border border-teal-100">
            <Tabs defaultValue="main" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-10">
                <TabsTrigger value="main" className="text-lg">
                  Acara Utama
                </TabsTrigger>
                <TabsTrigger value="additional" className="text-lg">
                  Rangkaian Acara
                </TabsTrigger>
              </TabsList>
              <TabsContent value="main">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-3 rounded-md">
                        <Calendar className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-teal-800 mb-2">Tanggal & Waktu</h3>
                        <p className="text-teal-600">Sabtu, 12 Juli 2025</p>
                        <p className="text-teal-600">09:00 - 15:00 WIB</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-3 rounded-md">
                        <Users className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-teal-800 mb-2">Dress Code</h3>
                        <p className="text-teal-600">Putih & Tosca</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-3 rounded-md">
                        <MapPin className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-teal-800 mb-2">Lokasi</h3>
                        <p className="text-teal-600 mb-2">Aula Masjid Nurul Iman</p>
                        <p className="text-teal-600 mb-4">Jl. Menteng Raya No. 45, Jakarta Pusat</p>
                        <a
                          href="https://wa.me/+6287741704737"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                        >
                          Pesan Sekarang
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="additional">
                <div className="space-y-8">
                  <div className="bg-teal-50 p-6 rounded-md">
                    <h3 className="text-xl font-bold text-teal-800 mb-6">Rundown Acara</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-teal-600 hover:bg-teal-600">09:00</Badge>
                        <span className="ml-3 text-teal-700">Penyambutan Tamu</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-teal-600 hover:bg-teal-600">10:00</Badge>
                        <span className="ml-3 text-teal-700">Pembukaan & Tilawah Al-Qur'an</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-teal-600 hover:bg-teal-600">10:30</Badge>
                        <span className="ml-3 text-teal-700">Prosesi Khitanan</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-teal-600 hover:bg-teal-600">12:00</Badge>
                        <span className="ml-3 text-teal-700">Makan Siang & Ramah Tamah</span>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mt-1 bg-teal-600 hover:bg-teal-600">13:30</Badge>
                        <span className="ml-3 text-teal-700">Hiburan & Doa Bersama</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-teal-50 p-6 rounded-md">
                      <div className="flex items-center mb-4">
                        <Music className="h-5 w-5 text-teal-600 mr-2" />
                        <h3 className="text-lg font-bold text-teal-800">Hiburan</h3>
                      </div>
                      <ul className="space-y-2 text-teal-700">
                        <li>• Tilawah Al-Qur'an</li>
                        <li>• Penampilan Qasidah</li>
                        <li>• Dongeng Islami</li>
                        <li>• Sulap untuk Anak-anak</li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 p-6 rounded-md">
                      <div className="flex items-center mb-4">
                        <Gift className="h-5 w-5 text-teal-600 mr-2" />
                        <h3 className="text-lg font-bold text-teal-800">Hadiah</h3>
                      </div>
                      <p className="text-teal-700 mb-4">Bagi yang ingin memberikan hadiah, Rayyan menyukai:</p>
                      <ul className="space-y-2 text-teal-700">
                        <li>• Buku cerita anak</li>
                        <li>• Mainan edukatif</li>
                        <li>• Peralatan menggambar</li>
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
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Galeri Foto</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-md shadow-md">
                <Image
                  src={`/assets/aset5/boy${item}.jpg`}
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
      <section className="py-20 px-4 bg-teal-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Konfirmasi Kehadiran</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="bg-white p-10 rounded-md shadow-lg border border-teal-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-teal-800">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-teal-800">
                    Nomor Telepon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full p-3 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="attendance" className="text-sm font-medium text-teal-800">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-yes" name="attendance" className="w-4 h-4 text-teal-600" />
                    <label htmlFor="attend-yes" className="text-teal-700">
                      Ya, saya akan hadir
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-no" name="attendance" className="w-4 h-4 text-teal-600" />
                    <label htmlFor="attend-no" className="text-teal-700">
                      Maaf, saya tidak bisa hadir
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-maybe" name="attendance" className="w-4 h-4 text-teal-600" />
                    <label htmlFor="attend-maybe" className="text-teal-700">
                      Mungkin
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium text-teal-800">
                  Jumlah Tamu
                </label>
                <select
                  id="guests"
                  className="w-full p-3 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="1">1 orang</option>
                  <option value="2">2 orang</option>
                  <option value="3">3 orang</option>
                  <option value="4">4 orang</option>
                  <option value="5">5 orang</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-teal-800">
                  Pesan atau Doa
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tuliskan pesan atau doa untuk Rayyan"
                ></textarea>
              </div>
              <a
                href="https://wa.me/+6287741704737"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors font-medium"
              >
                Kirim Konfirmasi
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* Celebration Messages */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Ucapan & Doa</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <CelebrationSlider celebrations={celebrations} />
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal-800 to-teal-900 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Terima Kasih</h2>
          <p className="text-xl mb-10 text-teal-100">Atas doa dan kehadiran Anda dalam acara khitanan putra kami</p>
          <div className="mb-10">
            <p className="text-lg mb-2 text-teal-200">Hormat kami,</p>
            <p className="text-2xl font-bold">Keluarga Bapak Ridwan & Ibu Anisa</p>
          </div>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-10"></div>
          <p className="italic text-teal-100">
            "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya."
          </p>
          <p className="mt-2 font-medium text-teal-300">- HR. Ahmad</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-teal-950 text-teal-300 text-center">
        <div className="container">
          <p>© 2025 Khitanan Muhammad Rayyan. All rights reserved.</p>
          <p className="mt-2">
            Created with ❤️ by{" "}
            <a href="#" className="text-white hover:underline">
              Suratan
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
