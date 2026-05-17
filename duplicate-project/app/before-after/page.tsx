"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"
import { TestimonialCard } from "@/components/testimonial-card"
import { MapPin, Users, Stethoscope, ArrowRight, ChevronDown, Clock, Calendar, Sparkles, Check } from "lucide-react"

const filters = ["All Results", "Filler", "Sculptra", "Double Chin", "Skin", "Under Eye"]

const results = [
  {
    id: 1,
    category: "Filler",
    title: "Neura Program",
    titleThai: "โปรแกรม Neura 4cc",
    description: "ฟิลเลอร์กระชับรูปหน้า เติมเต็มร่องแก้ม ผลลัพธ์เป็นธรรมชาติ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.38-ycls4AGsJmFp33hisSoseNxANitwNn.png",
    benefits: ["Natural Results", "V-Shape Face", "Long-lasting"],
    date: "July 2025",
  },
  {
    id: 2,
    category: "Filler",
    title: "Filler ร่องแก้ม",
    titleThai: "ฟิลเลอร์ร่องแก้ม 2cc",
    description: "เติมเต็มร่องแก้ม หน้าเรียว สวยได้สัดส่วน",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.53-RAcrOnallJeaC4CppIrhPa3KMqlrQQ.png",
    benefits: ["Immediate Results", "No Downtime", "Natural Look"],
    date: "May 2026",
  },
  {
    id: 3,
    category: "Filler",
    title: "Juvé Program",
    titleThai: "โปรแกรม Juvé 2cc",
    description: "ฟิลเลอร์เติมเต็ม กระชับรูปหน้า สำหรับผู้ชาย",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.14-QKz4SMhuQqDAZbQFXocqagHd4r01nY.png",
    benefits: ["For Men", "Natural Look", "Subtle Enhancement"],
    date: "August 2025",
  },
  {
    id: 4,
    category: "Skin",
    title: "Sculpt & Collagen",
    titleThai: "ยกกระชับ",
    description: "Long-lasting lift & non-surgical tightening",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.44.45-LaTRcGZBu1oyP1036fSCeWOX7Fddxm.png",
    benefits: ["Lift & Firm", "Tighten Skin", "Long-lasting"],
    date: "June 2025",
  },
  {
    id: 5,
    category: "Skin",
    title: "Pico Laser",
    titleThai: "บอกลารอยสิว",
    description: "รักษารอยสิว ผิวเรียบเนียน เพียง ฿1,899",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.49.38-CFHPFIbcZejUuAIwF4k80fNGAfiCPp.png",
    benefits: ["Acne Scars", "Even Tone", "Smooth Skin"],
    date: "May - July 2025",
  },
]

export default function BeforeAfterPage() {
  const [activeFilter, setActiveFilter] = useState("All Results")

  const filteredResults = activeFilter === "All Results" 
    ? results 
    : results.filter(r => r.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-16 order-2 lg:order-1">
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-4 animate-fade-in-up">
                Before & After
              </p>
              
              <h1 className="text-4xl sm:text-5xl font-serif text-charcoal leading-tight mb-4 text-balance animate-fade-in-up delay-100">
                Real results.<br />
                Thoughtful, natural beauty.
              </h1>
              
              <p className="text-muted-foreground mb-6 max-w-md animate-fade-in-up delay-200">
                ผลลัพธ์จากผู้เข้ารับบริการจริง ดูแลโดยแพทย์ผู้เชี่ยวชาญ<br />
                ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 animate-fade-in-up delay-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-gold" />
                  <span>Sukhumvit, Bangkok</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-rose-gold" />
                  <span>Doctor-led care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-rose-gold" />
                  <span>500+ happy clients</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
                <LineButton size="lg" />
                <Link 
                  href="/treatments" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border hover:border-rose-gold bg-white text-foreground transition-all duration-300 group"
                >
                  View Treatments
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image - Neura Program (new featured image) */}
            <div className="relative min-h-[400px] lg:min-h-[550px] order-1 lg:order-2 animate-fade-in">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.38-ycls4AGsJmFp33hisSoseNxANitwNn.png"
                alt="Neura Program Before and After"
                fill
                className="object-cover"
                priority
              />
              
              {/* Testimonial Overlay */}
              <div className="absolute bottom-8 right-8 hidden lg:block animate-slide-in-right delay-500">
                <TestimonialCard
                  name="คุณแอล"
                  location="Asok"
                  rating={5}
                  text="ผลลัพธ์เป็นธรรมชาติ รูปหน้าได้สัดส่วนขึ้นมากค่ะ"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Highlight */}
      <section className="py-12 bg-gradient-to-r from-charcoal to-charcoal/90">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-2">
                Featured Program
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-white">
                Neura Program - 4cc
              </h2>
              <p className="text-white/70 mt-2">กระชับรูปหน้า เติมเต็มร่องแก้ม ผลลัพธ์เป็นธรรมชาติ</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-rose-gold" />
                <span className="text-sm">30 Minutes</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-5 h-5 text-rose-gold" />
                <span className="text-sm">Same Day Results</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles className="w-5 h-5 text-rose-gold" />
                <span className="text-sm">Natural Look</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-rose-gold text-white shadow-md"
                      : "bg-cream text-foreground hover:bg-rose-gold/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-rose-gold transition-colors">
                Newest
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((result, index) => (
              <div 
                key={result.id} 
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {result.benefits.map((benefit, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-rose-gold/80 text-white rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/80 text-sm">{result.date}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-foreground group-hover:text-rose-gold transition-colors duration-300">
                    {result.title}
                  </h3>
                  <p className="text-sm text-rose-gold font-medium">{result.titleThai}</p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case - Filler Program */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-rose-gold/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.53-RAcrOnallJeaC4CppIrhPa3KMqlrQQ.png"
                alt="Filler ร่องแก้ม - Before and After"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-3">
                Featured Treatment
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
                Filler ร่องแก้ม Program
              </h2>
              <p className="text-xl text-rose-gold font-medium mb-2">
                2cc HA Filler
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                เติมเต็มร่องแก้ม หน้าเรียว สวยได้สัดส่วน
                ผลลัพธ์ทันทีหลังทำ ไม่ต้องพักฟื้น
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-white rounded-lg border border-border text-center hover:border-rose-gold transition-colors duration-300">
                  <Clock className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Immediate</p>
                  <p className="text-sm font-medium">Results</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-border text-center hover:border-rose-gold transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">No</p>
                  <p className="text-sm font-medium">Downtime</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-border text-center hover:border-rose-gold transition-colors duration-300">
                  <Sparkles className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Natural</p>
                  <p className="text-sm font-medium">Look</p>
                </div>
              </div>

              <LineButton size="lg">
                Book Consultation
              </LineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case - Pico Laser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-3">
                Skin Treatment
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
                Pico Laser
              </h2>
              <p className="text-xl text-rose-gold font-medium mb-2">
                บอกลารอยสิว เ���ียง ฿1,899
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                รักษารอยสิว ผิวเรียบเนียน ผลลัพธ์เห็นได้ชัด
                ลดเลือนรอยดำ รอยแดง จากสิว
              </p>

              <div className="space-y-3 mb-8">
                {["Acne scar treatment", "Reduce dark spots", "Even skin tone", "Smooth texture"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-gold/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-rose-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <LineButton size="lg">
                  Book Consultation
                </LineButton>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border hover:border-rose-gold text-foreground transition-all duration-300 group"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.49.38-CFHPFIbcZejUuAIwF4k80fNGAfiCPp.png"
                alt="Pico Laser - Before and After"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case - Sculpt & Collagen */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-rose-gold/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.44.45-LaTRcGZBu1oyP1036fSCeWOX7Fddxm.png"
                alt="Sculpt & Collagen Program Before and After"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-3">
                Special Program
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-2">
                Sculpt & Collagen Program
              </h2>
              <p className="text-xl mb-4">
                <span className="text-rose-gold font-semibold">Lift & Tighten</span>
              </p>
              <p className="text-muted-foreground mb-8">
                Long-lasting lift with non-surgical tightening. Reshape contours, firm skin, natural lifting results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-rose-gold transition-colors duration-300">
                  <div className="w-10 h-10 bg-rose-gold text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <p className="font-medium">Long-lasting Lift</p>
                    <p className="text-sm text-muted-foreground">Glow facial - Lift & firm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-rose-gold transition-colors duration-300">
                  <div className="w-10 h-10 bg-rose-gold text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <p className="font-medium">Non-surgical Tightening</p>
                    <p className="text-sm text-muted-foreground">Reshape contours - Firm skin</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-rose-gold transition-colors duration-300">
                  <div className="w-10 h-10 bg-rose-gold text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <p className="font-medium">Natural Lifting</p>
                    <p className="text-sm text-muted-foreground">Smooth fine lines</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <LineButton size="lg">
                  Book Now - Limited Offer
                </LineButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-4">
            Not Sure Where to Start?
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {"We'll guide you."}
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            ปรึกษาแพทย์ของเรา เพื่อวางแผนการรักษาที่เหมาะสมกับ
            ความต้องการและงบประมาณของคุณ
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LineButton size="lg" className="w-full sm:w-auto">
              จองปรึกษาฟรี ผ่าน LINE
            </LineButton>
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/30 text-white hover:bg-white hover:text-charcoal transition-all duration-300 w-full sm:w-auto justify-center group"
            >
              ดูโปรโมชั่นทั้งหมด
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
