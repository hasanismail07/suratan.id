import { Heart } from "lucide-react"
import Image from "next/image"

interface TimelineEvent {
  date: string
  title: string
  description: string
  image: string
  position: "left" | "right"
}

export default function RelationshipTimeline() {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "August 15, 2018",
      title: "First Meeting",
      description:
        "We first met at a mutual friend's birthday party. Dilan spilled his drink on Milea's dress, and that's how our conversation started.",
      image: "/placeholder.svg?height=300&width=400&text=First+Meeting",
      position: "left",
    },
    {
      date: "October 10, 2018",
      title: "First Date",
      description:
        "Our first official date was at a small coffee shop downtown. We talked for hours and didn't realize the shop was closing.",
      image: "/placeholder.svg?height=300&width=400&text=First+Date",
      position: "right",
    },
    {
      date: "February 14, 2019",
      title: "Officially Together",
      description:
        "On Valentine's Day, Dilan asked Milea to be his girlfriend with a handwritten letter and her favorite flowers.",
      image: "/placeholder.svg?height=300&width=400&text=Together",
      position: "left",
    },
    {
      date: "July 20, 2021",
      title: "Moving In Together",
      description:
        "After three years of dating, we decided to take the next step and move in together in our first apartment.",
      image: "/placeholder.svg?height=300&width=400&text=Moving+In",
      position: "right",
    },
    {
      date: "December 25, 2022",
      title: "The Proposal",
      description:
        "During a family Christmas dinner, Dilan surprised everyone by getting down on one knee and proposing to Milea.",
      image: "/placeholder.svg?height=300&width=400&text=Proposal",
      position: "left",
    },
    {
      date: "January 24, 2024",
      title: "Wedding Day",
      description: "The day we officially begin our journey as husband and wife, surrounded by our loved ones.",
      image: "/placeholder.svg?height=300&width=400&text=Wedding",
      position: "right",
    },
  ]

  return (
    <div className="px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl">Our Love Story</h2>
        <p className="mt-2 text-gray-600">The journey that led us to forever</p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200"></div>

        <div className="relative">
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-12">
              <div
                className={`flex flex-col items-center md:flex-row ${
                  event.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Date Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 transform">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Heart className="h-5 w-5 text-amber-900" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`mt-6 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:mt-0 md:w-5/12 ${
                    event.position === "left" ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="mb-2 text-sm font-medium text-amber-900">{event.date}</div>
                  <h3 className="mb-2 font-serif text-xl">{event.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">{event.description}</p>
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
