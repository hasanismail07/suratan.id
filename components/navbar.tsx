import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-[#fdf2f8]">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4 pl-10">
          <Link href="#">
            <div className="relative h-10 w-36">
              <Image
                src="/LOGO-SURATAN.png"
                alt="Logo Suratan"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-bold transition-colors hover:text-[#db2778]">
            Fitur
          </Link>
          <Link href="#categories" className="text-sm font-bold transition-colors hover:text-[#db2778]">
            Kategori
          </Link>
          <Link href="#pricing" className="text-sm font-bold transition-colors hover:text-[#db2778]">
            Harga
          </Link>
          <Link href="#testimonials" className="text-sm font-bold transition-colors hover:text-[#db2778]">
            Testimoni
          </Link>
        </nav>
        <div className="flex items-center gap-4 pr-10">
          <Link href="https://wa.me/+6287741704737" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#db2778] hover:bg-[#c01e67] text-white px-4 py-2 rounded-md text-sm">
              Pesan Sekarang
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
