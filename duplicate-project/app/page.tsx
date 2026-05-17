"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"
import { SectionHeader } from "@/components/section-header"
import { TestimonialCard } from "@/components/testimonial-card"
import { Star, MapPin, ArrowRight, Sparkles, Shield, Heart, ChevronLeft, ChevronRight, Phone } from "lucide-react"

const heroSlides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.38-ycls4AGsJmFp33hisSoseNxANitwNn.png",
    title: "Program Neura 4cc",
    subtitle: "Natural facial rejuvenation",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.14-QKz4SMhuQqDAZbQFXocqagHd4r01nY.png",
    title: "Program Juvé 2cc",
    subtitle: "Natural enhancement for all",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.44.45-LaTRcGZBu1oyP1036fSCeWOX7Fddxm.png",
    title: "Sculpt & Collagen",
    subtitle: "Lift, tighten, rejuvenate",
  },
]

const beforeAfterResults = [
  { 
    title: "Neura Program", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.38-ycls4AGsJmFp33hisSoseNxANitwNn.png",
    hasImage: true 
  },
  { 
    title: "Filler Treatment", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.53-RAcrOnallJeaC4CppIrhPa3KMqlrQQ.png",
    hasImage: true 
  },
  { 
    title: "Juvé Program", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.45.14-QKz4SMhuQqDAZbQFXocqagHd4r01nY.png",
    hasImage: true 
  },
  { 
    title: "Acne Treatment", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.44.58-84gfwT3Z8zs82GIla8zF4w6tbZHmWh.png",
    hasImage: true 
  },
]

const features = [
  { icon: Sparkles, title: "Natural Results", desc: "Enhance, never overdone" },
  { icon: Shield, title: "Doctor-Led", desc: "Medical expertise always" },
  { icon: Heart, title: "Personalized", desc: "Tailored to your goals" },
]

const promotions = [
  { title: "Laser Hair Removal", price: "390", desc: "Safe, fast, almost painless" },
  { title: "Immune Booster Drip", price: "990", desc: "Strengthen immunity" },
  { title: "PRP Hair Regeneration", price: "2,900", desc: "Activate follicles" },
  { title: "Holiday Rejuvenation", price: "7,999", desc: "Glow facial, lift & firm" },
  { title: "Facial Lift & Tighten", price: "8,999", desc: "Reshape contours" },
  { title: "Matrix Glass Skin", price: "9,999", desc: "Hydrated glow" },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Premium with Real Results */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-140px)]">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-20 order-2 lg:order-1 relative z-10">
              <div className="animate-fade-in-up">
                <p className="text-xs tracking-[0.3em] text-rose-gold uppercase mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-rose-gold"></span>
                  The Freedom of Beauty
                </p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal leading-[1.1] mb-6 text-balance animate-fade-in-up delay-100">
                Premium aesthetic care for natural beauty and confidence.
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed animate-fade-in-up delay-200">
                Doctor-led Botox, filler, laser, and skin-rejuvenation treatments designed to enhance your unique features with subtle, natural results.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-6 mb-8 animate-fade-in-up delay-300">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-rose-gold/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-rose-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up delay-400">
                <Link 
                  href="tel:0988545623" 
                  className="inline-flex items-center gap-2 bg-rose-gold hover:bg-rose-gold-dark text-white px-6 py-3 rounded btn-luxury"
                >
                  <Phone className="w-4 h-4" />
                  โทรนัดหมาย 098-854-5623
                </Link>
                <Link 
                  href="/before-after" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border hover:border-rose-gold bg-white text-foreground transition-luxury group"
                >
                  See Before & After
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-fade-in-up delay-500">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                <span><strong className="text-foreground">5.0</strong> Google Reviews</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>500+ clients</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block"></span>
                <div className="hidden sm:flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-gold" />
                  <span>Times Square, Sukhumvit</span>
                </div>
              </div>
            </div>

            {/* Right - Image Carousel with Real Results */}
            <div className="relative min-h-[500px] lg:min-h-full order-1 lg:order-2 animate-fade-in delay-200">
              {/* Main Image Slider */}
              <div className="absolute inset-0 overflow-hidden">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/40 lg:to-background/60"></div>
                  </div>
                ))}
              </div>

              {/* Slide Navigation */}
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5 text-charcoal" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5 text-charcoal" />
                  </button>
                </div>
                
                {/* Slide Info */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-sm font-medium text-charcoal">{heroSlides[currentSlide].title}</p>
                  <p className="text-xs text-muted-foreground">{heroSlides[currentSlide].subtitle}</p>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute top-8 right-8 flex gap-2 z-10">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'w-8 bg-rose-gold' 
                        : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating Testimonial */}
              <div className="absolute top-1/2 -translate-y-1/2 right-8 hidden xl:block animate-float">
                <TestimonialCard
                  name="คุณเอ"
                  location="Sukhumvit"
                  rating={5}
                  text="ผลลัพธ์เป็นธรรมชาติมากค่ะ แพทย์ให้คำแนะนำดีมาก"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cream to-rose-gold/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Special Promotions"
            title="Exclusive treatments at special prices"
            description="Premium treatments with exceptional value."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {promotions.map((promo, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 border border-border hover:border-rose-gold hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-sm font-medium text-charcoal mb-1 group-hover:text-rose-gold transition-colors">{promo.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{promo.desc}</p>
                <p className="text-2xl font-serif text-rose-gold">
                  {promo.price}<span className="text-sm ml-1">THB</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Real Before/After Images */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Real Results . Natural Beauty"
            title="Subtle changes, beautiful results"
            description="Doctor-designed treatments tailored to your unique features."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {beforeAfterResults.map((result, index) => (
              <Link 
                key={index} 
                href="/before-after"
                className="group cursor-pointer card-luxury rounded-xl overflow-hidden bg-white"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm">{result.title}</p>
                    <p className="text-white/70 text-xs mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      View results <ArrowRight className="w-3 h-3" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link 
              href="/before-after"
              className="px-8 py-3 border border-border rounded-full hover:border-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-300 text-sm group inline-flex items-center gap-2"
            >
              ดูผลลัพธ์เพิ่มเติม
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-rose-gold/5 via-background to-rose-gold/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Doctor Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482139185_1057097646224927_7823904874730714511_n-qJ2vl7nFqAEOAeF9sgLz6s8bsIGXKi.jpg"
                  alt="MATRIX - The Freedom of Beauty"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-gold flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Doctor-Led Care</p>
                    <p className="text-xs text-muted-foreground">Every treatment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.3em] text-rose-gold uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-rose-gold"></span>
                The Freedom of Beauty
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 text-balance">
                Expertise you can trust.
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our doctors bring extensive experience in aesthetic medicine, with advanced training from top institutions worldwide.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every treatment is personally performed by our medical doctors, ensuring the highest standards of safety and natural-looking results.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-lg border border-border hover:border-rose-gold hover:shadow-lg transition-all duration-300">
                  <p className="text-2xl font-serif text-rose-gold mb-1">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-border hover:border-rose-gold hover:shadow-lg transition-all duration-300">
                  <p className="text-2xl font-serif text-rose-gold mb-1">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>

              <Link 
                href="/injector"
                className="inline-flex items-center gap-2 text-rose-gold hover:text-rose-gold-dark transition-colors duration-300 group"
              >
                Learn more about our doctors
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Clinic Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-BnoouyqZ4eVLkmN7pw6zQw9pUM5Uc5.png"
                  alt="MATRIX Clinic Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Location Info */}
            <div>
              <p className="text-xs tracking-[0.3em] text-rose-gold uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-rose-gold"></span>
                Visit Us
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
                Conveniently located in Sukhumvit
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                เดินทางสะดวก ใจกลางสุขุมวิท ใกล้ BTS Asok<br />
                Times Square Building, Floor 2
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg hover:bg-rose-gold/5 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">MATRIX Clinic</p>
                    <p className="text-sm text-muted-foreground">
                      Times Square Building, Room 212, Floor 2<br />
                      246 Sukhumvit Rd, Khlong Toei, Bangkok 10110
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-rose-gold/5 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-rose-gold">B</span>
                  </div>
                  <p className="text-sm text-muted-foreground">BTS Asok ทางออก 6 (เดิน 2 นาที)</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-rose-gold/5 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-rose-gold" />
                  </div>
                  <p className="text-sm text-muted-foreground">098-854-5623</p>
                </div>
              </div>

              <Link 
                href="https://maps.google.com/?q=Times+Square+Building+246+Sukhumvit+Rd+Khlong+Toei+Bangkok"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-300 text-sm group"
              >
                ดูเส้นทางบน Google Maps
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
