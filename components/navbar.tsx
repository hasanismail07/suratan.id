import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-40 border-b bg-[#fdf2f8] ">
            <div className="container flex h-16 items-center justify-between py-4 ">
                <div className="flex items-center gap-5 pl-10">
                    <Link href="#">
                        <Image src="LOGO-SURATAN.PNG" alt="Logo Suratan" width={140} height={150} />
                    </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link href="#features" className="text-sm font-bold transition-colors hover:text-primary">
                        Fitur
                    </Link>
                    <Link href="#categories" className="text-sm font-bold transition-colors hover:text-primary">
                        Kategori
                    </Link>
                    <Link href="#pricing" className="text-sm font-bold transition-colors hover:text-primary">
                        Harga
                    </Link>
                    <Link href="#testimonials" className="text-sm font-bold transition-colors hover:text-primary">
                        Testimoni
                    </Link>
                </nav>
                <div className="flex items-center gap-4 pr-10">
                    <Link href="/login">
                        <Button variant="outline">Masuk</Button>
                    </Link>
                    <Link href="/register">
                        <Button variant="pink">Daftar</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
