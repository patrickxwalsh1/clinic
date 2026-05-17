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
    title: "Chin Filler",
    titleThai: "ฟิลเลอร์คาง",
    description: "ช่วยให้รูปหน้าให้สมดุลขึ้น คางได้สัดส่วน รูปหน้าเรียว สวยละมุน",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659014755_948772930869003_6740018651243625603_n-AcCedmHCdriEy4n62TLj2Qce0K3obY.jpg",
    benefits: ["Balanced Profile", "V-Shape Face", "Natural Results"],
    date: "November 2025",
  },
  {
    id: 2,
    category: "Under Eye",
    title: "Under Eyes Filler",
    titleThai: "ฟิลเลอร์ใต้ตา",
    description: "Brighten. Smooth. Look Rested. Just 1cc, Big Difference.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.39.35.png-4S6rOVqXzbbpsIi6DuesHGOSFOwG9E.jpeg",
    benefits: ["Immediate Results", "No Downtime", "Natural Look"],
    date: "May 2026",
  },
  {
    id: 3,
    category: "Skin",
    title: "Skin Rejuvenation",
    titleThai: "รักษาผิวหน้า",
    description: "รีวิวจากผู้ใช้บริการจริง - ผิวเรียบเนียนขึ้นใน 6 สัปดาห์",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2018.13.09-tkFlEhEyFNqP5F86ezFAAwnB2VlNl1.png",
    benefits: ["Smoother Texture", "Reduced Pores", "Even Tone"],
    date: "September - October 2025",
  },
  {
    id: 4,
    category: "Sculptra",
    title: "Sculptra Collagen",
    titleThai: "สคัลป์ตร้า",
    description: "ปรับรูปหน้า กระชับผิว ด้วย Collagen Biostimulator",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.47.49-8BUSTG51yKUg8vczwf4eNFSotmOP8b.png",
    benefits: ["4-Month Results", "Collagen Boost", "Long-lasting"],
    date: "June - October 2025",
  },
  {
    id: 5,
    category: "Double Chin",
    title: "Double Chin Clear",
    titleThai: "ลดเหนียง",
    description: "3 in 1 Program: Doublo 2.0, Mesoi Fat, Lifting Botox",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.48.28-rHMqVnEz62PkLYG7M3DxrcqCOKW68V.png",
    benefits: ["V-Line Jaw", "Fat Reduction", "Lifting Effect"],
    date: "April - May 2026",
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
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-4 animate-fade-in-up">
                Before & After
              </p>
              
              <h1 className="text-4xl sm:text-5xl font-serif text-navy leading-tight mb-4 text-balance animate-fade-in-up delay-100">
                Real results.<br />
                Thoughtful, natural beauty.
              </h1>
              
              <p className="text-muted-foreground mb-6 max-w-md animate-fade-in-up delay-200">
                ผลลัพธ์จากผู้เข้ารับบริการจริง ดูแลโดยแพทย์ผู้เชี่ยวชาญ<br />
                ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 animate-fade-in-up delay-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal" />
                  <span>Asok, Bangkok</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-teal" />
                  <span>Doctor-led care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-teal" />
                  <span>500+ happy clients</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
                <LineButton size="lg" />
                <Link 
                  href="/treatments" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border hover:border-teal bg-white text-foreground transition-all duration-300 group"
                >
                  View Treatments
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image - Chin Filler (new featured image) */}
            <div className="relative min-h-[400px] lg:min-h-[550px] order-1 lg:order-2 animate-fade-in">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659014755_948772930869003_6740018651243625603_n-AcCedmHCdriEy4n62TLj2Qce0K3obY.jpg"
                alt="Chin Filler Before and After"
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
      <section className="py-12 bg-gradient-to-r from-navy to-navy/90">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-2">
                Featured Program
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-white">
                Chin Filler - ฟิลเลอร์คาง
              </h2>
              <p className="text-white/70 mt-2">รูปหน้าเรียว สวยละมุน ได้สัดส่วน</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-teal" />
                <span className="text-sm">30 Minutes</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-5 h-5 text-teal" />
                <span className="text-sm">Same Day Results</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles className="w-5 h-5 text-teal" />
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
                      ? "bg-teal text-white shadow-md"
                      : "bg-cream text-foreground hover:bg-teal/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-teal transition-colors">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {result.benefits.map((benefit, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-teal/80 text-white rounded-full flex items-center gap-1">
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
                  <h3 className="font-medium text-foreground group-hover:text-teal transition-colors duration-300">
                    {result.title}
                  </h3>
                  <p className="text-sm text-teal font-medium">{result.titleThai}</p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case - Under Eye Filler */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-teal/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.39.35.png-4S6rOVqXzbbpsIi6DuesHGOSFOwG9E.jpeg"
                alt="Under Eyes Filler - Before and After"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-3">
                Featured Treatment
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
                Under Eyes Filler Program
              </h2>
              <p className="text-xl text-teal font-medium mb-2">
                1cc HA Filler
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Brighten. Smooth. Look Rested. Just 1cc makes a big difference.
                Immediate results with little to no downtime.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-white rounded-lg border border-border text-center hover:border-teal transition-colors duration-300">
                  <Clock className="w-6 h-6 text-teal mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Immediate</p>
                  <p className="text-sm font-medium">Results</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-border text-center hover:border-teal transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-teal mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">No</p>
                  <p className="text-sm font-medium">Downtime</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-border text-center hover:border-teal transition-colors duration-300">
                  <Sparkles className="w-6 h-6 text-teal mx-auto mb-2" />
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

      {/* Featured Case - Skin Rejuvenation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-3">
                Skin Treatment
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
                Skin Rejuvenation
              </h2>
              <p className="text-xl text-teal font-medium mb-2">
                รีวิวจากผู้ใช้บริการจริง
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                See visible improvement in skin texture in just 6 weeks. 
                Smoother, brighter skin with reduced pore size and even tone.
              </p>

              <div className="space-y-3 mb-8">
                {["Smoother skin texture", "Reduced pore size", "Even skin tone", "Natural glow"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-teal" />
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border hover:border-teal text-foreground transition-all duration-300 group"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2018.13.09-tkFlEhEyFNqP5F86ezFAAwnB2VlNl1.png"
                alt="Skin Rejuvenation - Before and After"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case - Double Chin */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-teal/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.48.28-rHMqVnEz62PkLYG7M3DxrcqCOKW68V.png"
                alt="Double Chin Program Before and After"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-3">
                Special Program
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-2">
                Double Chin Clear Program
              </h2>
              <p className="text-xl mb-4">
                <span className="text-teal font-semibold">฿9,900</span>
                <span className="text-sm text-muted-foreground line-through ml-2">฿15,990</span>
                <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-1 rounded font-medium">38% OFF</span>
              </p>
              <p className="text-muted-foreground mb-8">
                Complete 3-in-1 program for V-line jawline with visible results in just 1 month.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-teal transition-colors duration-300">
                  <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <p className="font-medium">New Doublo 2.0</p>
                    <p className="text-sm text-muted-foreground">300 shots - HIFU lifting</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-teal transition-colors duration-300">
                  <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <p className="font-medium">Sisi Face Mesoi Fat</p>
                    <p className="text-sm text-muted-foreground">1 bottle - Fat dissolving</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-teal transition-colors duration-300">
                  <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <p className="font-medium">Lifting Botox</p>
                    <p className="text-sm text-muted-foreground">20 units - Jawline contouring</p>
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
          <p className="text-xs tracking-[0.2em] text-teal uppercase mb-4">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/30 text-white hover:bg-white hover:text-navy transition-all duration-300 w-full sm:w-auto justify-center group"
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
