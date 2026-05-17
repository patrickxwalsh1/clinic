"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"
import { MapPin, Phone, Clock, MessageCircle, Stethoscope, Shield, FileText } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "LINE Us",
    value: "@revizeclinic",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "061-361-2020",
  },
  {
    icon: Clock,
    title: "Open Daily",
    value: "10:00 – 20:00",
  },
]

const valueProps = [
  {
    icon: MessageCircle,
    title: "Quick Reply",
    description: "We reply on LINE within minutes",
  },
  {
    icon: Stethoscope,
    title: "Doctor-Led Care",
    description: "All treatments by experienced doctors",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    description: "Premium products and strict safety standards",
  },
  {
    icon: FileText,
    title: "Personalized Plan",
    description: "Tailored treatment plan just for you",
  },
]

const clinicImages = [
  { title: "Reception" },
  { title: "Treatment Room" },
  { title: "Consultation" },
  { title: "Lounge" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    contactMethod: "",
    message: "",
    agreed: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-16 order-2 lg:order-1">
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-4">
                We&apos;d Love to Hear From You
              </p>
              
              <h1 className="text-4xl sm:text-5xl font-serif text-navy leading-tight mb-6 text-balance">
                Let&apos;s create your best version.
              </h1>
              
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                Have a question or ready to book a consultation? Our team is here to help you feel confident and cared for.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-teal flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-teal" />
                    </div>
                    <p className="text-xs text-muted-foreground">{method.title}</p>
                    <p className="text-sm font-medium text-foreground">{method.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative min-h-[300px] lg:min-h-[400px] order-1 lg:order-2 bg-gradient-to-br from-teal/5 via-cream to-teal/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.41.31-TSh68SpfdoqKyV2R6cULWu9IbMVh9s.png"
                    alt="REVIZE Logo"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-6"
                  />
                  <span className="text-2xl tracking-wide text-navy font-sans font-semibold block mb-2">REVIZE</span>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground">CLINIC ASOK</p>
                  <p className="text-sm text-muted-foreground mt-6">Reception Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-3">
                Send Us a Message
              </p>
              <p className="text-muted-foreground mb-8">
                We&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-teal transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-teal transition-colors"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-teal transition-colors"
                />

                <select
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-teal transition-colors text-muted-foreground"
                >
                  <option value="">Preferred Contact Method</option>
                  <option value="line">LINE</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>

                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-teal transition-colors resize-none"
                />

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-border text-teal focus:ring-teal"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the <Link href="#" className="underline hover:text-teal">Privacy Policy</Link> and <Link href="#" className="underline hover:text-teal">Terms of Service</Link>.
                  </span>
                </label>

                <LineButton size="lg" className="w-full justify-center">
                  Send on LINE
                </LineButton>

                <p className="text-sm text-muted-foreground text-center">
                  or call us at 061-361-2020
                </p>
              </form>
            </div>

            {/* Location Info */}
            <div>
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-3">
                Visit Our Clinic
              </p>
              <h3 className="text-2xl font-serif text-navy mb-4">
                REVIZE Clinic Asok
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground">REVIZE Clinic Asok</p>
                    <p className="text-sm text-muted-foreground">
                      Times Square 1FL<br />
                      Next to Starbucks
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-teal bg-teal/10 rounded">B</span>
                  <p className="text-sm text-muted-foreground">BTS Asok (Exit 6) – 2 min walk</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-teal bg-teal/10 rounded">M</span>
                  <p className="text-sm text-muted-foreground">MRT Sukhumvit – 3 min walk</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-teal bg-teal/10 rounded">P</span>
                  <p className="text-sm text-muted-foreground">Parking Available</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br from-teal/5 to-teal/10 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-teal rounded-full mx-auto mb-2 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                      <p className="text-sm font-medium">REVIZE Clinic Asok</p>
                      <p className="text-xs text-muted-foreground">Times Square 1FL</p>
                      <p className="text-xs text-muted-foreground">Next to Starbucks</p>
                      <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-teal hover:underline">
                        View on Google Maps
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-gradient-to-br from-teal/5 to-teal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                  <prop.icon className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.1em] text-teal uppercase mb-1">
                    {prop.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-teal/5 to-teal/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.41.31-TSh68SpfdoqKyV2R6cULWu9IbMVh9s.png"
                      alt="REVIZE Logo"
                      width={30}
                      height={30}
                      className="rounded-full mx-auto mb-2"
                    />
                    <span className="text-sm tracking-wide text-navy font-sans font-semibold">REVIZE</span>
                    <p className="text-xs text-muted-foreground mt-1">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
