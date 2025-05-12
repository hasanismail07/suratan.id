import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageSquare, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TemplatePreview from "@/components/template-preview" // Ensure this path is correct

// Define your template data
const weddingTemplates = [
  {
    id: "template-01",
    image: "/assets/pernikahan1.png",
    title: "Template Pernikahan 1",
    description: "Desain elegan untuk hari spesial Anda",
    featured: true,
  },
  {
    id: "template-02",
    image: "/assets/pernikahan2.png",
    title: "Template Pernikahan 2",
    description: "Desain elegan untuk hari spesial Anda",
  },
  {
    id: "template-03",
    image: "/assets/pernikahan3.png",
    title: "Template Pernikahan 3",
    description: "Desain elegan untuk hari spesial Anda",
  },
  {
    id: "template-04",
    image: "/assets/pernikahan4.png",
    title: "Template Pernikahan 4",
    description: "Desain elegan untuk hari spesial Anda",
  },
  {
    id: "template-05",
    image: "/assets/pernikahan5.png",
    title: "Template Pernikahan 5",
    description: "Desain elegan untuk hari spesial Anda",
  },
];

const khitanTemplates = [
  {
    id: "khitanan-01",
    image: "/assets/khitanan1.png",
    title: "Template Khitanan 1",
    description: "Desain menarik untuk acara khitanan",
  },
  {
    id: "khitanan-02",
    image: "/assets/khitanan2.png",
    title: "Template Khitanan 2",
    description: "Desain menarik untuk acara khitanan",
    featured: true,
  },
  {
    id: "khitanan-03",
    image: "/assets/khitanan3.png",
    title: "Template Khitanan 3",
    description: "Desain menarik untuk acara khitanan",
  },
  {
    id: "khitanan-04",
    image: "/assets/khitanan4.png",
    title: "Template Khitanan 4",
    description: "Desain menarik untuk acara khitanan",
  },
];

const birthdayTemplates = [
  {
    id: "ulang-tahun-01",
    image: "/assets/ultah1.png",
    title: "Template Ulang Tahun 1",
    description: "Desain ceria untuk perayaan ulang tahun",
  },
  {
    id: "ulang-tahun-02",
    image: "/assets/ultah2.png",
    title: "Template Ulang Tahun 2",
    description: "Desain ceria untuk perayaan ulang tahun",
  },
  {
    id: "ulang-tahun-03",
    image: "/assets/ultah3.png",
    title: "Template Ulang Tahun 3",
    description: "Desain ceria untuk perayaan ulang tahun",
    featured: true,
  },
  {
    id: "ulang-tahun-04",
    image: "/assets/ultah4.png",
    title: "Template Ulang Tahun 4",
    description: "Desain ceria untuk perayaan ulang tahun",
  },
];


export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section (KEEP AS IS) */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-8 px-4 md:px-20 bg-[#fdf3f8]">
          {/* ... hero content ... */}
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
                  <Link href="https://wa.me/+6287741704737" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="px-8 bg-[#db2778] hover:bg-[#c01e67]">
                      Buat Undangan Sekarang
                    </Button>
                  </Link>
                  <Link href="#categories"> {/* Changed from #templates to #categories to match section ID */}
                    <Button size="lg" variant="outline" className="px-8">
                      Lihat Contoh
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full">
                <Image
                  src="/GIF COVER.gif"
                  alt="Contoh undangan digital"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (KEEP AS IS) */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          {/* ... features content ... */}
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fdf2f8]">
                  <Heart className="h-8 w-8 text-[#db2778]" />
                </div>
                <h3 className="text-xl font-bold">Desain Menarik</h3>
                <p className="text-muted-foreground">
                  Pilihan template desain yang elegan dan menarik untuk berbagai jenis acara
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fdf2f8]">
                  <Users className="h-8 w-8 text-[#db2778]" />
                </div>
                <h3 className="text-xl font-bold">Konfirmasi Kehadiran</h3>
                <p className="text-muted-foreground">
                  Fitur RSVP terintegrasi untuk memudahkan tamu mengkonfirmasi kehadiran
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fdf2f8]">
                  <MessageSquare className="h-8 w-8 text-[#db2778]" />
                </div>
                <h3 className="text-xl font-bold">Ucapan & Doa</h3>
                <p className="text-muted-foreground">
                  Fitur komentar untuk tamu memberikan ucapan dan doa secara online
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section - MODIFIED */}
        <section id="categories" className="w-full py-12 md:py-24 lg:py-32 bg-[#fdf2f8]">
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
              <TabsList className="grid w-full grid-cols-3 bg-pink-200">
                <TabsTrigger value="wedding">Pernikahan</TabsTrigger>
                <TabsTrigger value="khitan">Khitanan</TabsTrigger>
                <TabsTrigger value="birthday">Ulang Tahun</TabsTrigger>
              </TabsList>
              <TabsContent value="wedding" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> {/* Adjusted grid for more items */}
                  {weddingTemplates.map((template) => (
                    <TemplatePreview
                      key={template.id}
                      image={template.image}
                      title={template.title}
                      description={template.description}
                      featured={template.featured}
                      slug={template.id} // Pass the id as the slug
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="khitan" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> {/* Adjusted grid */}
                  {khitanTemplates.map((template) => (
                    <TemplatePreview
                      key={template.id}
                      image={template.image}
                      title={template.title}
                      description={template.description}
                      featured={template.featured}
                      slug={template.id} // Pass the id as the slug
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="birthday" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"> {/* Adjusted grid */}
                  {birthdayTemplates.map((template) => (
                    <TemplatePreview
                      key={template.id}
                      image={template.image}
                      title={template.title}
                      description={template.description}
                      featured={template.featured}
                      slug={template.id} // Pass the id as the slug
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
            </div>
          </div>
        </section>

        {/* Pricing Section (KEEP AS IS) */}
        <section className="py-16 bg-gray-50">
          {/* ... pricing content ... */}
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pilih Paket Anda</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menawarkan berbagai paket untuk memenuhi kebutuhan dan anggaran Anda. Semua paket mencakup desain
                yang responsif dan dukungan pelanggan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Basic"
                price="Rp 99.000"
                features={[
                  "1 Halaman Undangan",
                  "Desain Responsif",
                  "Countdown Timer",
                  "Galeri Foto (3 foto)",
                  "Peta Lokasi",
                  "Masa Aktif 1 Bulan",
                ]}
                buttonText="Pilih Paket"
              />
              <PricingCard
                title="Standard"
                price="Rp 199.000"
                features={[
                  "Semua fitur Basic",
                  "3 Halaman Undangan",
                  "Galeri Foto (10 foto)",
                  "Form RSVP",
                  "Musik Latar",
                  "Masa Aktif 3 Bulan",
                ]}
                buttonText="Pilih Paket"
                popular={true}
              />
              <PricingCard
                title="Premium"
                price="Rp 299.000"
                features={[
                  "Semua fitur Standard",
                  "5 Halaman Undangan",
                  "Galeri Foto Tak Terbatas",
                  "Video Background",
                  "Animasi Kustom",
                  "Masa Aktif 6 Bulan",
                ]}
                buttonText="Pilih Paket"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section (KEEP AS IS) */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#fdf2f8]">
          {/* ... testimonials content ... */}
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
                    "Fitur RSVP sangat membantu kami memperkirakan jumlah tamu yang hadir. Terima kasih Suratan!",
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
                      <div className="rounded-full bg-[#fdf2f8] p-1">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                          <Users className="h-6 w-6 text-[#db2778]" />
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

        {/* CTA Section (KEEP AS IS) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
         {/* ... cta content ... */}
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Siap Membuat Undangan Digital?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Buat undangan digital Anda sekarang dan bagikan momen spesial dengan cara yang lebih modern
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button size="lg" className="px-8 bg-[#db2778] hover:bg-[#c01e67]" asChild>
                <a href="https://wa.me/+6287741704737" target="_blank" rel="noopener noreferrer">Hubungi Kami</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  buttonText: string
  popular?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, buttonText, popular = false }) => {
  // IMPORTANT: Replace with your actual WhatsApp number
  const yourWhatsAppNumber = "+6287741704737"; // Example, use your number
  const whatsappMessage = `Saya tertarik dengan paket ${title} seharga ${price}. Bisakah saya mendapatkan informasi lebih lanjut?`
  const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Card
      className={`flex flex-col ${popular ? "border-[#db2778] shadow-md relative" : "hover:border-[#db2778] hover:border"}`}
    >
      {popular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <Badge className="bg-[#db2778]">POPULER</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Untuk acara {title.toLowerCase()}</CardDescription>
        <div className="mt-4 text-4xl font-bold">{price}</div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-[#db2778]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-[#db2778] hover:bg-[#c01e67]">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}