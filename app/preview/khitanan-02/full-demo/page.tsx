import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import CountdownSection from "@/components/countdown-section"
import CelebrationSlider from "@/components/celebration-slider"
import { celebrations } from "@/types/celebration"

export const metadata: Metadata = {
  title: "Khitanan Ahmad - Green Theme Demo",
  description: "Full demo of the Green Theme Khitanan invitation",
}

export default function KhitananGreenDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Back Button */}
      <div className="container pt-4">
        <Link
          href="/preview/khitanan-02"
          className="inline-flex items-center text-green-800 hover:text-green-600 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Preview
        </Link>
      </div>

      {/* Header Section */}
      <section className="relative py-16 px-4 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('/assets/aset5/boy1.jpg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container relative z-10 max-w-3xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-green-800 flex items-center justify-center">
              <span className="text-white text-2xl font-arabic">بسم الله</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 font-serif">Khitanan</h1>
          <p className="text-2xl md:text-3xl font-bold text-green-800 mb-6 font-arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">Ahmad Fauzan</h2>
          <p className="text-lg text-green-700 mb-8">Putra dari Bapak Hasan & Ibu Fatimah</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <Calendar className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800">Minggu, 15 Juni 2025</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <Clock className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800">08:00 - 14:00 WIB</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
            <p className="text-green-800 italic mb-4">
              "Dan hendaklah ada di antara kamu segolongan umat yang menyeru kepada kebajikan, menyuruh kepada yang
              ma'ruf dan mencegah dari yang munkar; merekalah orang-orang yang beruntung."
            </p>
            <p className="text-green-700 font-semibold">- QS. Ali Imran: 104</p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-green-800 text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Menuju Hari Bahagia</h2>
          <CountdownSection targetDate="2025-06-15T08:00:00" textColor="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Tentang Ahmad</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600">
                  <Image
                    src="/assets/aset5/boy4.jpg"
                    alt="Ahmad Fauzan"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2 text-center">Ahmad Fauzan</h3>
              <p className="text-green-700 text-center mb-4">Putra dari Bapak Hasan & Ibu Fatimah</p>
              <p className="text-green-600 text-center">Lahir: 10 Juni 2018</p>
              <p className="text-green-600 text-center">Hobi: Membaca, Bermain Sepak Bola</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Makna Khitanan</h3>
              <p className="text-green-700 mb-4">
                Khitanan merupakan salah satu syariat dalam Islam yang dilakukan sebagai bentuk ketaatan kepada Allah
                SWT dan mengikuti sunnah Nabi Ibrahim AS.
              </p>
              <p className="text-green-700 mb-4">
                Khitanan juga memiliki banyak manfaat kesehatan dan kebersihan, serta merupakan simbol kedewasaan bagi
                seorang anak laki-laki.
              </p>
              <p className="text-green-700">
                Kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara khitanan putra kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Detail Acara</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200">
            <Tabs defaultValue="main" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="main" className="text-lg">
                  Acara Utama
                </TabsTrigger>
                <TabsTrigger value="additional" className="text-lg">
                  Rincian Acara
                </TabsTrigger>
              </TabsList>
              <TabsContent value="main">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Tanggal & Waktu</h3>
                      <p className="text-green-700">Minggu, 15 Juni 2025</p>
                      <p className="text-green-700">08:00 - 14:00 WIB</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Lokasi</h3>
                      <p className="text-green-700 mb-2">Gedung Serbaguna Al-Hikmah</p>
                      <p className="text-green-700 mb-4">Jl. Masjid Raya No. 123, Jakarta Selatan</p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                      >
                        Lihat Lokasi
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="additional">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Rangkaian Acara</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-green-600 hover:bg-green-600">08:00</Badge>
                        <span className="ml-3 text-green-700">Pembukaan & Pembacaan Ayat Suci Al-Qur'an</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-green-600 hover:bg-green-600">09:00</Badge>
                        <span className="ml-3 text-green-700">Prosesi Khitanan</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-green-600 hover:bg-green-600">10:30</Badge>
                        <span className="ml-3 text-green-700">Tausiyah & Doa Bersama</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mt-1 bg-green-600 hover:bg-green-600">12:00</Badge>
                        <span className="ml-3 text-green-700">Makan Siang & Hiburan</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Hiburan</h3>
                    <ul className="space-y-2">
                      <li className="text-green-700">• Pembacaan Maulid</li>
                      <li className="text-green-700">• Penampilan Marawis</li>
                      <li className="text-green-700">• Dongeng Islami</li>
                      <li className="text-green-700">• Games untuk Anak-anak</li>
                    </ul>
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
            <h2 className="text-3xl font-bold text-green-900 mb-4">Galeri Foto</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg border-2 border-green-200">
                <Image
                  src={`/assets/aset5/boy${item}.jpg`}
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
      <section className="py-16 px-4 bg-green-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Konfirmasi Kehadiran</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-green-800">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-green-800">
                    Nomor Telepon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="attendance" className="text-sm font-medium text-green-800">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-yes" name="attendance" className="w-4 h-4 text-green-600" />
                    <label htmlFor="attend-yes" className="text-green-700">
                      Ya, saya akan hadir
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="attend-no" name="attendance" className="w-4 h-4 text-green-600" />
                    <label htmlFor="attend-no" className="text-green-700">
                      Maaf, saya tidak bisa hadir
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium text-green-800">
                  Jumlah Tamu
                </label>
                <select
                  id="guests"
                  className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="1">1 orang</option>
                  <option value="2">2 orang</option>
                  <option value="3">3 orang</option>
                  <option value="4">4 orang</option>
                  <option value="5">5 orang</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-green-800">
                  Pesan atau Doa
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tuliskan pesan atau doa untuk Ahmad"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-medium"
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
            <h2 className="text-3xl font-bold text-green-900 mb-4">Ucapan & Doa</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>
          <CelebrationSlider celebrations={celebrations} />
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4 bg-green-800 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-arabic">جزاكم الله خيرا</h2>
          <p className="text-xl mb-8">Terima kasih atas doa dan kehadiran Anda</p>
          <div className="mb-8">
            <p className="text-lg mb-2">Hormat kami,</p>
            <p className="text-xl font-bold">Keluarga Bapak Hasan & Ibu Fatimah</p>
          </div>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="italic">"Barangsiapa yang tidak menyayangi, maka tidak akan disayangi."</p>
          <p className="mt-2 font-semibold">- HR. Bukhari</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-green-900 text-green-200 text-center">
        <div className="container">
          <p>© 2025 Khitanan Ahmad Fauzan. All rights reserved.</p>
          <p className="mt-2">
            Created with ❤️ by{" "}
            <span className="text-white-800 hover:underline">Suratan</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
