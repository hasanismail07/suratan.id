import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge" // Assuming you might use this later
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TemplatePreview {
  image: string
  title: string
  description: string
  slug: string; // <--- ADD THIS PROP for the unique URL part
  featured?: boolean
}

export default function TemplatePreview({ 
  image, 
  title, 
  description, 
  slug,  // <--- ADD slug to destructuring
  featured = false 
}: TemplatePreview) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
        {/* If you want to use the featured badge, uncomment this section
        {featured && (
          <div className="absolute right-2 top-2">
            <Badge className="bg-[#db2778]">Terlaris</Badge>
          </div>
        )}
        */}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        {/* Use the slug to create a dynamic link */}
        <Link href={`/preview/${slug}`} className="w-full"> {/* <--- MODIFIED HREF */}
          <Button variant="outline" className="w-full">
            Lihat Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}