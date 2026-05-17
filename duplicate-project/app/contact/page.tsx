"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, MessageCircle, Stethoscope, Shield, FileText } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "098-854-5623",
  },
  {
    icon: Clock,
    title: "Open Daily",
    value: "10:00 – 20:00",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Times Square, FL2",
  },
]

const valueProps = [
  {
    icon: MessageCircle,
    title: "Quick Reply",
    description: "We reply within minutes",
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
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-4">
                We&apos;d Love to Hear From You
              </p>
              
              <h1 className="text-4xl sm:text-5xl font-serif text-charcoal leading-tight mb-6 text-balance">
                Let&apos;s create your best version.
              </h1>
              
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                Have a question or ready to book a consultation? Our team is here to help you feel confident and cared for.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-rose-gold flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-rose-gold" />
                    </div>
                    <p className="text-xs text-muted-foreground">{method.title}</p>
                    <p className="text-sm font-medium text-foreground">{method.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image - Clinic Interior */}
            <div className="relative min-h-[300px] lg:min-h-[400px] order-1 lg:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-BnoouyqZ4eVLkmN7pw6zQw9pUM5Uc5.png"
                alt="MATRIX Clinic Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20"></div>
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
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-3">
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-rose-gold transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-rose-gold transition-colors"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-rose-gold transition-colors"
                />

                <select
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-rose-gold transition-colors text-muted-foreground"
                >
                  <option value="">Preferred Contact Method</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>

                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-rose-gold transition-colors resize-none"
                />

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-border text-rose-gold focus:ring-rose-gold"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the <Link href="#" className="underline hover:text-rose-gold">Privacy Policy</Link> and <Link href="#" className="underline hover:text-rose-gold">Terms of Service</Link>.
                  </span>
                </label>

                <Link 
                  href="tel:0988545623" 
                  className="w-full flex items-center justify-center gap-2 bg-rose-gold hover:bg-rose-gold-dark text-white px-6 py-3 rounded btn-luxury"
                >
                  <Phone className="w-4 h-4" />
                  โทรนัดหมาย 098-854-5623
                </Link>

                <p className="text-sm text-muted-foreground text-center">
                  หรือเดินทางมาพบเราได้ที่คลินิก
                </p>
              </form>
            </div>

            {/* Location Info */}
            <div>
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-3">
                Visit Our Clinic
              </p>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                MATRIX Clinic
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground">MATRIX Clinic</p>
                    <p className="text-sm text-muted-foreground">
                      Times Square Building Mall<br />
                      ห้องเลขที่ 212 ชั้น 2<br />
                      246 Sukhumvit Rd, Khlong Toei<br />
                      Bangkok 10110
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-rose-gold bg-rose-gold/10 rounded">B</span>
                  <p className="text-sm text-muted-foreground">BTS Asok (Exit 6) – 2 min walk</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-rose-gold bg-rose-gold/10 rounded">M</span>
                  <p className="text-sm text-muted-foreground">MRT Sukhumvit – 3 min walk</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-rose-gold bg-rose-gold/10 rounded">P</span>
                  <p className="text-sm text-muted-foreground">Parking Available</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-rose-gold" />
                  <p className="text-sm text-muted-foreground">098-854-5623</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br from-rose-gold/5 to-rose-gold/10 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-rose-gold rounded-full mx-auto mb-2 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                      <p className="text-sm font-medium">MATRIX Clinic</p>
                      <p className="text-xs text-muted-foreground">Times Square Building, FL2</p>
                      <p className="text-xs text-muted-foreground">246 Sukhumvit Rd</p>
                      <Link 
                        href="https://maps.google.com/?q=Times+Square+Building+246+Sukhumvit+Rd+Khlong+Toei+Bangkok" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-rose-gold hover:underline"
                      >
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
      <section className="py-12 bg-gradient-to-br from-rose-gold/5 to-rose-gold/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center shrink-0">
                  <prop.icon className="w-5 h-5 text-rose-gold" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.1em] text-rose-gold uppercase mb-1">
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
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden col-span-2 row-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-BnoouyqZ4eVLkmN7pw6zQw9pUM5Uc5.png"
                alt="MATRIX Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.43.21-VjvCXHJsCLcZ0HqjlxRZ46p9u4oLcK.png"
                alt="MATRIX Treatments"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.44.45-LaTRcGZBu1oyP1036fSCeWOX7Fddxm.png"
                alt="Sculpt & Collagen Program"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.38-ycls4AGsJmFp33hisSoseNxANitwNn.png"
                alt="Before After Results"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482139185_1057097646224927_7823904874730714511_n-qJ2vl7nFqAEOAeF9sgLz6s8bsIGXKi.jpg"
                alt="MATRIX Brand"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
