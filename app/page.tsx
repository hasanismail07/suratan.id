import Link from "next/link"
import Image from "next/image"
import { Heart, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Footer } from "react-day-picker"
import Foter from "@/components/foter"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <main className="flex-1 bg-[#fdf3f8].0">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-8 px-4 md:px-20">
          <div className="container px-2 md:px-4">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-6">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Buat Undangan Digital yang Mengesankan
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Undangan online untuk berbagai acara spesial Anda. Mudah dibuat, mudah dibagikan, dan tampil elegan.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/create">
                    <Button size="lg" className="px-8">
                      Buat Undangan Sekarang
                    </Button>
                  </Link>
                  <Link href="#categories">
                    <Button size="lg" variant="outline" className="px-8">
                      Lihat Contoh
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="GIF COVER.gif"
                width={550}
                height={550}
                alt="Contoh undangan digital"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#fdf2f8]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fitur Unggulan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Buat undangan digital dengan fitur lengkap untuk berbagai kebutuhan acara spesial Anda
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Desain Menarik</h3>
                <p className="text-muted-foreground">
                  Pilihan template desain yang elegan dan menarik untuk berbagai jenis acara
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Konfirmasi Kehadiran</h3>
                <p className="text-muted-foreground">
                  Fitur RSVP terintegrasi untuk memudahkan tamu mengkonfirmasi kehadiran
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Ucapan & Doa</h3>
                <p className="text-muted-foreground">
                  Fitur komentar untuk tamu memberikan ucapan dan doa secara online
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kategori Undangan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami menyediakan berbagai jenis undangan digital untuk setiap momen spesial Anda
                </p>
              </div>
            </div>

            <Tabs defaultValue="wedding" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="wedding">Pernikahan</TabsTrigger>
                <TabsTrigger value="khitan">Khitanan</TabsTrigger>
                <TabsTrigger value="birthday">Ulang Tahun</TabsTrigger>
              </TabsList>
              <TabsContent value="wedding" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={`wedding-${i}`} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Wedding+Template+${i}`}
                          width={400}
                          height={300}
                          alt={`Template pernikahan ${i}`}
                          className="h-48 w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg">Template Pernikahan {i}</CardTitle>
                        <CardDescription>Desain elegan untuk hari spesial Anda</CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full">
                          Lihat Detail
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="khitan" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={`khitan-${i}`} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Khitan+Template+${i}`}
                          width={400}
                          height={300}
                          alt={`Template khitanan ${i}`}
                          className="h-48 w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg">Template Khitanan {i}</CardTitle>
                        <CardDescription>Desain menarik untuk acara khitanan</CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full">
                          Lihat Detail
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="birthday" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={`birthday-${i}`} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Birthday+Template+${i}`}
                          width={400}
                          height={300}
                          alt={`Template ulang tahun ${i}`}
                          className="h-48 w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg">Template Ulang Tahun {i}</CardTitle>
                        <CardDescription>Desain ceria untuk perayaan ulang tahun</CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full">
                          Lihat Detail
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#fdf2f8]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Paket Harga</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pilih paket yang sesuai dengan kebutuhan Anda
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="flex flex-col hover:border-[#db2778] hover:border">
              <CardHeader>
                <CardTitle>Paket Basic</CardTitle>
                <CardDescription>Untuk acara sederhana</CardDescription>
                <div className="mt-4 text-4xl font-bold">Rp 99.000</div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>1 Desain Template</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Fitur RSVP</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Galeri Foto (max 5)</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Aktif 30 hari</span>
                </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Pilih Paket</Button>
              </CardFooter>
              </Card>

              <Card className="flex flex-col hover:border-[#db2778] hover:border">
              <CardHeader>
                <div className="px-4 py-1 text-xs font-bold bg-[#db2778] text-primary-foreground rounded-full w-fit mx-auto mb-2">
                POPULER
                </div>
                <CardTitle>Paket Premium</CardTitle>
                <CardDescription>Untuk acara spesial</CardDescription>
                <div className="mt-4 text-4xl font-bold">Rp 199.000</div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>3 Desain Template</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Fitur RSVP</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Galeri Foto (max 15)</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Background Musik</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Peta Lokasi</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Aktif 90 hari</span>
                </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Pilih Paket</Button>
              </CardFooter>
              </Card>

              <Card className="flex flex-col hover:border-[#db2778] hover:border">
              <CardHeader>
                <CardTitle>Paket Exclusive</CardTitle>
                <CardDescription>Untuk acara mewah</CardDescription>
                <div className="mt-4 text-4xl font-bold">Rp 299.000</div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>5 Desain Template</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Fitur RSVP</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Galeri Foto (unlimited)</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Background Musik</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Peta Lokasi</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Video Streaming</span>
                </li>
                <li className="flex items-center">
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
                  className="mr-2 h-4 w-4 text-primary"
                  >
                  <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Aktif 180 hari</span>
                </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Pilih Paket</Button>
              </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimoni Pelanggan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Apa kata mereka yang telah menggunakan layanan kami
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  name: "Andi & Sari",
                  role: "Pernikahan",
                  content:
                    "Undangan online kami sangat elegan dan mudah dibagikan. Tamu-tamu kami sangat terkesan dengan desainnya yang menarik.",
                },
                {
                  name: "Budi Santoso",
                  role: "Khitanan",
                  content:
                    "Fitur RSVP sangat membantu kami memperkirakan jumlah tamu yang hadir. Terima kasih InviteEase!",
                },
                {
                  name: "Dina Maulida",
                  role: "Ulang Tahun",
                  content:
                    "Desain yang ceria dan sesuai dengan tema pesta ulang tahun anak saya. Semua teman-temannya menyukai undangan digitalnya.",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-1">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                          <Users className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fdf2f8]">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Siap Membuat Undangan Digital?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Buat undangan digital Anda sekarang dan bagikan momen spesial dengan cara yang lebih modern
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button size="lg" className="px-8">
                Buat Undangan Sekarang
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </section>
        <Foter></Foter>
      </main>
    </div>
  )
}

