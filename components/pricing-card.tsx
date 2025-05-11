import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({ title, price, features, buttonText, popular = false }: PricingCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        popular ? "border-pink-500 shadow-md" : ""
      }`}
    >
      {popular && (
        <div className="absolute right-0 top-0">
          <Badge className="rounded-bl-lg rounded-tr-lg rounded-br-none rounded-tl-none bg-pink-500 px-3 py-1">
            Populer
          </Badge>
        </div>
      )}
      <CardHeader className="pb-0 pt-6 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pb-6">
        <a
          href={`https://wa.me/+6287741704737?text=Halo%20saya%20ingin%20pesan%20paket%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className={`w-full ${popular ? "bg-pink-500 hover:bg-pink-600" : "bg-gray-900 hover:bg-gray-800"}`}>
            {buttonText}
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
