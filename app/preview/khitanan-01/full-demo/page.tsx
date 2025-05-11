"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Gift, Copy, MapPin, Calendar, Clock, CheckCircle, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import CelebrationSlider from "@/components/celebration-slider"
import type { CelebrationMessage } from "@/types/celebration"
import CountdownSection from "@/components/countdown-section"

export default function FullTemplateDemo() {
  const eventDate = new Date("2024-01-24T00:00:00")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "attending",
    guests: "1",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [celebrations, setCelebrations] = useState<CelebrationMessage[]>([
    { name: "Keluarga Budi", message: "Selamat atas khitanan Ahmad! Semoga menjadi anak yang sholeh." },
    { name: "Pak Dedi", message: "Selamat untuk Ahmad. Semoga cepat sembuh dan menjadi anak yang berbakti." },
    { name: "Ibu Siti", message: "Alhamdulillah, selamat atas khitanan Ahmad. Semoga menjadi anak yang sholeh." },
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attendance: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Add celebration message
    if (formData.name && formData.message) {
      setCelebrations((prev) => [
        ...prev,
        {
          name: formData.name,
          message: formData.message,
        },
      ])
    }

    // Show success message
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        attendance: "attending",
        guests: "1",
        message: "",
      })
    }, 3000)
  }

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const giftOptions = [
    {
      id: "bank1",
      type: "Bank Transfer",
      name: "Bank Mandiri",
      details: "1234-5678-9012-3456",
      accountName: "Bapak Ahmad",
    },
    {
      id: "address",
      type: "Gift Delivery",
      name: "Home Address",
      details: "Jl. Cendrawasih No. 12, Bandung, Jawa Barat, 40115",
      accountName: "Keluarga Ahmad",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/preview/khitanan-01" className="flex items-center text-gray-700 hover:text-[#db2778]">
            <ChevronLeft className="mr-1 h-5 w-5" />
            <span>Kembali ke Preview</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Khitanan-01
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative min-h-screen w-full">
        <Image
          src="/assets/aset5/boy1.jpg"
          alt="Khitanan background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-6 text-sm uppercase tracking-widest text-blue-700">Undangan Khitanan</div>
          <h1 className="font-sans text-5xl font-bold text-blue-800 md:text-7xl">Ahmad Rizky</h1>
          <div className="mt-6 text-sm text-blue-700">Minggu, 24 Januari 2024</div>
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px w-16 bg-blue-300"></div>
            <div className="mx-4 h-8 w-8 rounded-full bg-blue-100 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                <span className="text-xs">AR</span>
              </div>
            </div>
            <div className="h-px w-16 bg-blue-300"></div>
          </div>
          <p className="mt-8 max-w-md text-blue-700">
            "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan khitanan putra kami"
          </p>
          <div className="mt-12">
            <Button
              className="rounded-full border-blue-300 bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => {
                const childSection = document.getElementById("child");
                if (childSection) {
                  childSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Scroll Down
            </Button>
          </div>
        </div>
      </section>

      {/* Child Info Section */}
      <section id="child" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-blue-800">Putra Kami</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-blue-300"></div>
              <div className="mx-4 h-6 w-6 rounded-full bg-blue-100 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-xs">AR</span>
                </div>
              </div>
              <div className="h-px w-12 bg-blue-300"></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src="/assets/aset5/boy2.jpg"
                alt="Ahmad"
                width={256}
                height={256}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-6 font-sans text-2xl font-bold text-blue-800">Ahmad Rizky</h3>
            <p className="mt-2 text-blue-700">Putra dari</p>
            <p className="text-blue-700">
              Bapak Budi Santoso
              <br />& Ibu Siti Rahayu
            </p>
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                <User size={16} className="mr-2" />
                Anak ke-2 dari 3 bersaudara
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-blue-800">Save the Date</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-blue-300"></div>
              <div className="mx-4 h-6 w-6 rounded-full bg-blue-100 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-xs">AR</span>
                </div>
              </div>
              <div className="h-px w-12 bg-blue-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <CountdownSection targetDate="2024-01-24T00:00:00" textColor="text-blue-800" />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-blue-800">Acara Khitanan</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-blue-300"></div>
              <div className="mx-4 h-6 w-6 rounded-full bg-blue-100 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-xs">AR</span>
                </div>
              </div>
              <div className="h-px w-12 bg-blue-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col rounded-lg bg-white p-8 text-center shadow-sm">
              <h3 className="font-sans text-2xl font-bold text-blue-800">Khitanan & Syukuran</h3>
              <div className="mt-6 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-blue-500" />
                <p className="ml-2 text-blue-700">Minggu, 24 Januari 2024</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-500" />
                <p className="ml-2 text-blue-700">08:00 - 14:00 WIB</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-500" />
                <p className="ml-2 text-blue-700">Gedung Serbaguna Al-Hidayah</p>
              </div>
              <p className="mt-2 text-blue-600">Jl. Asia Afrika No. 8, Bandung, Jawa Barat</p>
              <Button className="mx-auto mt-6 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-blue-800">Galeri Foto</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-blue-300"></div>
              <div className="mx-4 h-6 w-6 rounded-full bg-blue-100 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-xs">AR</span>
                </div>
              </div>
              <div className="h-px w-12 bg-blue-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={`/assets/aset5/boy${i}.jpg`}
                  alt={`Gallery photo ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Registry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-blue-800">Kado & Hadiah</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-blue-300"></div>
              <div className="mx-4 h-6 w-6 rounded-full bg-blue-100 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-xs">AR</span>
                </div>
              </div>
              <div className="h-px w-12 bg-blue-300"></div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-blue-700">
              Kehadiran Bapak/Ibu/Saudara/i sudah merupakan hadiah terindah bagi kami. Namun jika ingin memberikan
              hadiah, dapat melalui:
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {giftOptions.map((option) => (
              <div key={option.id} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium text-blue-800">{option.type}</h3>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-blue-600">{option.name}</p>
                  <p className="font-medium text-blue-800">{option.details}</p>
                  <p className="text-sm text-blue-600">a.n. {option.accountName}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex w-full items-center justify-center gap-2 rounded-full border-blue-300 text-blue-700 hover:bg-blue-100"
                  onClick={() => handleCopy(option.details, option.id)}
                >
                  <Copy className="h-4 w-4" />
                  {copied === option.id ? "Copied!" : "Copy"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-3xl font-bold text-blue-800">RSVP</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-blue-300"></div>
              <div className="mx-4 h-6 w-6 rounded-full bg-blue-100 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-xs">AR</span>
                </div>
              </div>
              <div className="h-px w-12 bg-blue-300"></div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-blue-700">
              Mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i dengan mengisi form di bawah ini.
            </p>
          </div>

          <div className="mx-auto max-w-xl rounded-lg bg-blue-50 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 font-sans text-2xl font-bold text-blue-800">Terima Kasih!</h3>
                <p className="text-blue-700">RSVP Anda telah berhasil dikirim.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-4">
                  <Label htmlFor="name" className="text-blue-800">
                    Nama Lengkap
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    required
                    className="mt-1 border-blue-200 bg-white focus-visible:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email" className="text-blue-800">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email"
                    required
                    className="mt-1 border-blue-200 bg-white focus-visible:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="phone" className="text-blue-800">
                    Nomor Telepon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Masukkan nomor telepon"
                    required
                    className="mt-1 border-blue-200 bg-white focus-visible:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <Label className="text-blue-800">Apakah akan hadir?</Label>
                  <RadioGroup value={formData.attendance} onValueChange={handleRadioChange} className="mt-2 flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="attending" id="attending" className="text-blue-500" />
                      <Label htmlFor="attending" className="text-blue-700">
                        Ya, saya akan hadir
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-attending" id="not-attending" className="text-blue-500" />
                      <Label htmlFor="not-attending" className="text-blue-700">
                        Maaf, saya tidak bisa hadir
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attendance === "attending" && (
                  <div className="mb-4">
                    <Label htmlFor="guests" className="text-blue-800">
                      Jumlah Tamu
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="mt-1 border-blue-200 bg-white focus-visible:ring-blue-500"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <Label htmlFor="message" className="text-blue-800">
                    Ucapan & Doa
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Berikan ucapan dan doa untuk Ahmad..."
                    className="mt-1 min-h-[120px] border-blue-200 bg-white focus-visible:ring-blue-500"
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-full bg-blue-500 text-white hover:bg-blue-600">
                  Kirim RSVP
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Celebration Messages */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-sans text-2xl font-bold text-blue-800">Ucapan & Doa</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-8 bg-blue-300"></div>
              <div className="mx-3 h-4 w-4 rounded-full bg-blue-100 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-[8px]">AR</span>
                </div>
              </div>
              <div className="h-px w-8 bg-blue-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm">
            <CelebrationSlider celebrations={celebrations} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sans text-2xl font-bold text-blue-800">Ahmad Rizky</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-blue-700">24.01.2024</p>
          <div className="mx-auto mt-6 h-px w-16 bg-blue-300"></div>
          <p className="mt-6 text-sm text-blue-600">Terima kasih atas doa dan kehadiran Anda</p>
          <p className="mt-4 text-sm text-blue-600">
            Created with ❤️ by <span className="text-blue-800 hover:underline">Suratan</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
