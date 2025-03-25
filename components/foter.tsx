import Link from 'next/link';
import { Calendar, Heart, Mail, MessageSquare, Users } from "lucide-react"


const Foter = () => {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 pl-5">
                        <img src="/LOGO-SURATAN.png" alt="Suratan Logo" className="h-16 w-auto" />
                    </div>
                    <p className="text-sm text-muted-foreground pl-5">Solusi undangan digital untuk setiap momen spesial Anda</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">Produk</h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Pernikahan
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Khitanan
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Ulang Tahun
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Acara Lainnya
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">Perusahaan</h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Karir
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">Bantuan</h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Panduan Pengguna
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Dukungan
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium">Hubungi Kami</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span className="text-sm text-muted-foreground">info@inviteease.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm text-muted-foreground">Senin - Jumat, 09:00 - 17:00</span>
                            </li>
                        </ul>
                        <div className="mt-2 flex gap-2">
                            <Link href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        &copy; {new Date().getFullYear()} InviteEase. Hak Cipta Dilindungi.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Syarat & Ketentuan
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Kebijakan Privasi
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Foter;