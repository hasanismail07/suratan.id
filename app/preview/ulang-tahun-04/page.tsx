import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UlangTahun04Preview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/aset6/girl2.jpg"
            alt="Birthday background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-light mb-2 text-gray-300">Celebrate</h3>
          <h1 className="font-bold text-5xl md:text-7xl mb-6 tracking-tight text-white">
            30<sup>th</sup> Birthday
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-medium mb-8 text-white">Sarah Johnson</h2>
          <p className="text-2xl md:text-3xl font-light mb-10 text-gray-200">20.07.2025</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6">
              <Link href="/preview/ulang-tahun-04/full-demo">Preview Demo</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-gray-400">
        <p>Created with ❤️ by Suratan</p>
      </footer>
    </div>
  )
}
