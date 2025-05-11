"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Heart,
  Users,
  Gift,
  Copy,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import CelebrationSlider from "@/components/celebration-slider";
import type { CelebrationMessage } from "@/types/celebration";
import CountdownSection from "@/components/countdown-section";

export default function FullTemplateDemo() {
  const weddingDate = new Date("2024-01-24T00:00:00");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "attending",
    guests: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [celebrations, setCelebrations] = useState<CelebrationMessage[]>([
    {
      name: "John Doe",
      message:
        "Congratulations on your special day! Wishing you a lifetime of happiness together.",
    },
    {
      name: "Jane Smith",
      message:
        "May your love grow stronger with each passing day. Best wishes!",
    },
    {
      name: "Robert Johnson",
      message: "So happy to celebrate this day with you both. Congratulations!",
    },
  ]);

  // Countdown timer

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attendance: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add celebration message
    if (formData.name && formData.message) {
      setCelebrations((prev) => [
        ...prev,
        {
          name: formData.name,
          message: formData.message,
        },
      ]);
    }

    // Show success message
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        attendance: "attending",
        guests: "1",
        message: "",
      });
    }, 3000);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const giftOptions = [
    {
      id: "bank1",
      type: "Bank Transfer",
      name: "Bank Mandiri",
      details: "1234-5678-9012-3456",
      accountName: "Dilan Purnama",
    },
    {
      id: "bank2",
      type: "Bank Transfer",
      name: "Bank BCA",
      details: "0987-6543-2109-8765",
      accountName: "Milea Saputri",
    },
    {
      id: "address",
      type: "Gift Delivery",
      name: "Home Address",
      details: "Jl. Cendrawasih No. 12, Bandung, Jawa Barat, 40115",
      accountName: "Dilan & Milea",
    },
  ];

  const timelineEvents = [
    {
      date: "August 15, 2018",
      title: "First Meeting",
      description:
        "We first met at a mutual friend's birthday party. Dilan spilled his drink on Milea's dress, and that's how our conversation started.",
      image: "/assets/aset4/prewed1.jpg",
    },
    {
      date: "October 10, 2018",
      title: "First Date",
      description:
        "Our first official date was at a small coffee shop downtown. We talked for hours and didn't realize the shop was closing.",
      image: "/assets/aset4/prewed8.jpg",
    },
    {
      date: "February 14, 2019",
      title: "Officially Together",
      description:
        "On Valentine's Day, Dilan asked Milea to be his girlfriend with a handwritten letter and her favorite flowers.",
      image: "/assets/aset4/prewed2.jpg",
    },
    {
      date: "December 25, 2022",
      title: "The Proposal",
      description:
        "During a family Christmas dinner, Dilan surprised everyone by getting down on one knee and proposing to Milea.",
      image: "/assets/aset4/prewed5.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/preview/template-03"
            className="flex items-center text-gray-700 hover:text-[#db2778]"
          >
            <ChevronLeft className="mr-1 h-5 w-5" />
            <span>Kembali ke Preview</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-[#db2778] hover:bg-[#c01e67]">
              Gunakan Template Ini
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative min-h-screen w-full">
        <Image
          src="/assets/aset4/header2.gif"
          alt="Floral background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-6 text-sm uppercase tracking-widest text-pink-700">
            The Wedding of
          </div>
          <h1 className="font-serif text-5xl italic text-pink-800 md:text-7xl">
            Dilan <span className="font-serif">&</span> Milea
          </h1>
          <div className="mt-6 text-sm text-pink-700">January 24, 2024</div>
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px w-16 bg-pink-300"></div>
            <Heart className="mx-4 h-5 w-5 text-pink-500" />
            <div className="h-px w-16 bg-pink-300"></div>
          </div>
          <p className="mt-8 max-w-md text-pink-700">
            "And of His signs is that He created for you from yourselves mates
            that you may find tranquility in them; and He placed between you
            affection and mercy."
          </p>
          <div className="mt-12">
            <Button
              className="mt-8 border-white bg-transparent text-white hover:bg-white hover:text-black md:mt-12"
              onClick={() => {
                const coupleSection = document.getElementById("couple-section");
                if (coupleSection) {
                  coupleSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Scroll Down
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="couple-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl italic text-pink-800">
              Save the Date
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-pink-300"></div>
              <Heart className="mx-4 h-4 w-4 text-pink-500" />
              <div className="h-px w-12 bg-pink-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <CountdownSection
              targetDate="2024-01-24T00:00:00"
              textColor="text-pink-800"
            />
          </div>
        </div>
      </section>

      {/* Couple Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl italic text-pink-800">
              Bride & Groom
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-pink-300"></div>
              <Heart className="mx-4 h-4 w-4 text-pink-500" />
              <div className="h-px w-12 bg-pink-300"></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
            {/* Bride */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image
                  src="/assets/aset4/bride2.jpg"
                  alt="Bride"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl italic text-pink-800">
                Milea Saputri
              </h3>
              <p className="mt-2 text-pink-700">Putri dari</p>
              <p className="text-pink-700">
                Bapak Lorem Ipsum
                <br />& Ibu Lorem Ipsum
              </p>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-pink-300 text-pink-700 hover:bg-pink-100"
                >
                  <a
                    href="https://www.instagram.com/" // Added https://
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center" // Make the <a> tag a flex container
                  >
                    <Users size={16} className="mr-2" />
                    @instagram
                  </a>
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center justify-center">
              <div className="font-serif text-6xl italic text-pink-800">&</div>
            </div>

            {/* Groom */}
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image
                  src="/assets/aset4/groom.jpg"
                  alt="Groom"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl italic text-pink-800">
                Dilan Purnama
              </h3>
              <p className="mt-2 text-pink-700">Putra dari</p>
              <p className="text-pink-700">
                Bapak Lorem Ipsum
                <br />& Ibu Lorem Ipsum
              </p>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-pink-300 text-pink-700 hover:bg-pink-100"
                >
                  <a
                    href="https://www.instagram.com/" // Added https://
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center" // Make the <a> tag a flex container
                  >
                    <Users size={16} className="mr-2" />
                    @instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl italic text-pink-800">
              Wedding Events
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-pink-300"></div>
              <Heart className="mx-4 h-4 w-4 text-pink-500" />
              <div className="h-px w-12 bg-pink-300"></div>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:flex-row">
            {/* Akad Nikah */}
            <div className="flex flex-1 flex-col items-center rounded-lg bg-pink-50 p-8 text-center shadow-sm">
              <h3 className="font-serif text-2xl italic text-pink-800">
                Akad Nikah
              </h3>
              <div className="mt-6 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-pink-500" />
                <p className="ml-2 text-pink-700">January 24, 2024</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Clock className="h-5 w-5 text-pink-500" />
                <p className="ml-2 text-pink-700">08:00 - 10:00 WIB</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-pink-500" />
                <p className="ml-2 text-pink-700">Grand Ballroom Hotel Mulia</p>
              </div>
              <p className="mt-2 text-pink-600">
                Jl. Asia Afrika No. 8, Senayan, Jakarta
              </p>
              <Button className="mt-6 rounded-full bg-pink-600 text-white hover:bg-pink-700">
                Get Directions
              </Button>
            </div>

            {/* Resepsi */}
            <div className="flex flex-1 flex-col items-center rounded-lg bg-pink-50 p-8 text-center shadow-sm">
              <h3 className="font-serif text-2xl italic text-pink-800">
                Resepsi
              </h3>
              <div className="mt-6 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-pink-500" />
                <p className="ml-2 text-pink-700">January 24, 2024</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Clock className="h-5 w-5 text-pink-500" />
                <p className="ml-2 text-pink-700">11:00 - 14:00 WIB</p>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-pink-500" />
                <p className="ml-2 text-pink-700">Grand Ballroom Hotel Mulia</p>
              </div>
              <p className="mt-2 text-pink-600">
                Jl. Asia Afrika No. 8, Senayan, Jakarta
              </p>
              <Button className="mt-6 rounded-full bg-pink-600 text-white hover:bg-pink-700">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl italic text-pink-800">
              Our Gallery
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-pink-300"></div>
              <Heart className="mx-4 h-4 w-4 text-pink-500" />
              <div className="h-px w-12 bg-pink-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-sm"
              >
                <Image
                  src={`/assets/aset4/prewed${i}.jpg`}
                  alt={`Gallery photo ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl italic text-pink-800">
              Our Love Story
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-pink-300"></div>
              <Heart className="mx-4 h-4 w-4 text-pink-500" />
              <div className="h-px w-12 bg-pink-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden rounded-lg bg-pink-50 shadow-sm md:flex-row"
                >
                  <div className="md:w-1/3">
                    <div className="relative h-64 w-full md:h-full">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="mb-2 text-sm font-medium text-pink-500">
                      {event.date}
                    </div>
                    <h3 className="mb-2 font-serif text-2xl italic text-pink-800">
                      {event.title}
                    </h3>
                    <p className="text-pink-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gift Registry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl italic text-pink-800">
              Gift Registry
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-pink-300"></div>
              <Heart className="mx-4 h-4 w-4 text-pink-500" />
              <div className="h-px w-12 bg-pink-300"></div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-pink-700">
              Your presence at our wedding is the greatest gift of all. However,
              if you wish to honor us with a gift, we have provided some options
              below.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {giftOptions.map((option) => (
              <div
                key={option.id}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-pink-500" />
                  <h3 className="font-medium text-pink-800">{option.type}</h3>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-pink-600">{option.name}</p>
                  <p className="font-medium text-pink-800">{option.details}</p>
                  <p className="text-sm text-pink-600">
                    a.n. {option.accountName}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex w-full items-center justify-center gap-2 rounded-full border-pink-300 text-pink-700 hover:bg-pink-100"
                  onClick={() => handleCopy(option.details, option.id)}
                >
                  <Copy className="h-4 w-4" />
                  {copied === option.id ? "Copied!" : "Copy"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl italic text-pink-800">RSVP</h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-12 bg-pink-300"></div>
              <Heart className="mx-4 h-4 w-4 text-pink-500" />
              <div className="h-px w-12 bg-pink-300"></div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-pink-700">
              Please let us know if you can make it to our special day by
              filling out the form below.
            </p>
          </div>

          <div className="mx-auto max-w-xl rounded-lg bg-pink-50 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 font-serif text-2xl italic text-pink-800">
                  Thank You!
                </h3>
                <p className="text-pink-700">
                  Your RSVP has been submitted successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-4">
                  <Label htmlFor="name" className="text-pink-800">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1 border-pink-200 bg-white focus-visible:ring-pink-500"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="phone" className="text-pink-800">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="mt-1 border-pink-200 bg-white focus-visible:ring-pink-500"
                  />
                </div>

                <div className="mb-4">
                  <Label className="text-pink-800">Will you attend?</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={handleRadioChange}
                    className="mt-2 flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="attending"
                        id="attending"
                        className="text-pink-500"
                      />
                      <Label htmlFor="attending" className="text-pink-700">
                        Yes, I'll be there
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="not-attending"
                        id="not-attending"
                        className="text-pink-500"
                      />
                      <Label htmlFor="not-attending" className="text-pink-700">
                        Sorry, I can't make it
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attendance === "attending" && (
                  <div className="mb-4">
                    <Label htmlFor="guests" className="text-pink-800">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="mt-1 border-pink-200 bg-white focus-visible:ring-pink-500"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <Label htmlFor="message" className="text-pink-800">
                    Celebration Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your wishes for the couple..."
                    className="mt-1 min-h-[120px] border-pink-200 bg-white focus-visible:ring-pink-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-pink-600 text-white hover:bg-pink-700"
                >
                  Submit RSVP
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Celebration Messages */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-2xl italic text-pink-800">
              Celebration Messages
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-8 bg-pink-300"></div>
              <Heart className="mx-3 h-3 w-3 text-pink-500" />
              <div className="h-px w-8 bg-pink-300"></div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm">
            <CelebrationSlider celebrations={celebrations} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl italic text-pink-800">
            Dilan & Milea
          </h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-pink-700">
            24.01.2024
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-pink-300"></div>
          <p className="mt-6 text-sm text-pink-600">
            Thank you for being part of our special day
          </p>
          <p className="mt-4 text-sm text-pink-600">
            Created with ❤️ by{" "}
            <span className="text-pink-800 hover:underline">Suratan</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
