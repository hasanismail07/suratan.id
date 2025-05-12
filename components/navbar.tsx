"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-[#fdf2f8]">
      <div className="container flex h-16 items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-4">
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
          <Link
            href="#features"
            className="text-sm font-bold transition-colors hover:text-[#db2778]"
          >
            Fitur
          </Link>
          <Link
            href="#categories"
            className="text-sm font-bold transition-colors hover:text-[#db2778]"
          >
            Kategori
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-bold transition-colors hover:text-[#db2778]"
          >
            Harga
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-bold transition-colors hover:text-[#db2778]"
          >
            Testimoni
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://wa.me/+6287741704737"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#db2778] hover:bg-[#c01e67] text-white px-4 py-2 rounded-md text-sm"
          >
            Pesan Sekarang
          </Link>
          <button
            className="md:hidden text-[#db2778] text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fdf2f8] border-t">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link
              href="#features"
              className="text-sm font-bold transition-colors hover:text-[#db2778]"
            >
              Fitur
            </Link>
            <Link
              href="#categories"
              className="text-sm font-bold transition-colors hover:text-[#db2778]"
            >
              Kategori
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-bold transition-colors hover:text-[#db2778]"
            >
              Harga
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-bold transition-colors hover:text-[#db2778]"
            >
              Testimoni
            </Link>
            <Link
              href="https://wa.me/+6287741704737"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#db2778] hover:bg-[#c01e67] text-white px-4 py-2 rounded-md text-sm"
            >
              Pesan Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Navbar;
