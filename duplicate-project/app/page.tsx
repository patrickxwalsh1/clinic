"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"
import { SectionHeader } from "@/components/section-header"
import { TestimonialCard } from "@/components/testimonial-card"
import { Star, MapPin, ArrowRight, Sparkles, Shield, Heart, ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659014755_948772930869003_6740018651243625603_n-AcCedmHCdriEy4n62TLj2Qce0K3obY.jpg",
    title: "Chin Filler",
    subtitle: "Balanced jawline, natural results",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.39.35.png-4S6rOVqXzbbpsIi6DuesHGOSFOwG9E.jpeg",
    title: "Under Eyes Filler",
    subtitle: "Look refreshed, naturally",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2018.13.09-tkFlEhEyFNqP5F86ezFAAwnB2VlNl1.png",
    title: "Skin Rejuvenation",
    subtitle: "Smoother, brighter skin",
  },
]

const beforeAfterResults = [
  { 
    title: "Chin Filler", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659014755_948772930869003_6740018651243625603_n-AcCedmHCdriEy4n62TLj2Qce0K3obY.jpg",
    hasImage: true 
  },
  { 
    title: "Under Eye Filler", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.39.35.png-4S6rOVqXzbbpsIi6DuesHGOSFOwG9E.jpeg",
    hasImage: true 
  },
  { 
    title: "Skin Rejuvenation", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2018.13.09-tkFlEhEyFNqP5F86ezFAAwnB2VlNl1.png",
    hasImage: true 
  },
  { 
    title: "Sculptra", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.47.49-8BUSTG51yKUg8vczwf4eNFSotmOP8b.png",
    hasImage: true 
  },
]

const features = [
  { icon: Sparkles, title: "Natural Results", desc: "Enhance, never overdone" },
  { icon: Shield, title: "Doctor-Led", desc: "Medical expertise always" },
  { icon: Heart, title: "Personalized", desc: "Tailored to your goals" },
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
                <p className="text-xs tracking-[0.3em] text-teal uppercase mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-teal"></span>
                  Natural Lifting . V-Shape . Glass Skin
                </p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy leading-[1.1] mb-6 text-balance animate-fade-in-up delay-100">
                Premium aesthetic care for brighter skin and natural facial balance.
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed animate-fade-in-up delay-200">
                Doctor-led Botox, filler, laser, and skin-rejuvenation treatments designed to enhance your unique features with subtle, natural results.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-6 mb-8 animate-fade-in-up delay-300">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up delay-400">
                <LineButton size="lg" className="btn-luxury" />
                <Link 
                  href="/before-after" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border hover:border-teal bg-white text-foreground transition-luxury group"
                >
                  See Before & After
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-fade-in-up delay-500">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-teal text-teal" />
                  ))}
                </div>
                <span><strong className="text-foreground">5.0</strong> Google Reviews</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>500+ clients</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block"></span>
                <div className="hidden sm:flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal" />
                  <span>Near BTS Asok</span>
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
                    <ChevronLeft className="w-5 h-5 text-navy" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5 text-navy" />
                  </button>
                </div>
                
                {/* Slide Info */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-sm font-medium text-navy">{heroSlides[currentSlide].title}</p>
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
                        ? 'w-8 bg-teal' 
                        : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating Testimonial */}
              <div className="absolute top-1/2 -translate-y-1/2 right-8 hidden xl:block animate-float">
                <TestimonialCard
                  name="คุณแอล"
                  location="Asok"
                  rating={5}
                  text="ผลลัพธ์เป็นธรรมชาติมากค่ะ แพทย์ให้คำแนะนำดีมาก"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
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
              className="px-8 py-3 border border-border rounded-full hover:border-teal hover:bg-teal hover:text-white transition-all duration-300 text-sm group inline-flex items-center gap-2"
            >
              ดูผลลัพธ์เพิ่มเติม
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal/5 via-background to-teal/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Doctor Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476150325_1077680777731051_3797646050005656885_n-JCPparzS9I3hqsxc8jlcr1QmMcIoaI.jpg"
                  alt="Doctor with patient at REVIZE Clinic"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center">
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
              <p className="text-xs tracking-[0.3em] text-teal uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-teal"></span>
                Meet Your Doctor
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 text-balance">
                Expertise you can trust.
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our doctor brings over 15 years of experience in aesthetic medicine, with advanced training from top institutions worldwide.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every treatment is personally performed by our medical doctor, ensuring the highest standards of safety and natural-looking results.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-lg border border-border hover:border-teal hover:shadow-lg transition-all duration-300">
                  <p className="text-2xl font-serif text-teal mb-1">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-border hover:border-teal hover:shadow-lg transition-all duration-300">
                  <p className="text-2xl font-serif text-teal mb-1">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>

              <Link 
                href="/injector"
                className="inline-flex items-center gap-2 text-teal hover:text-teal-dark transition-colors duration-300 group"
              >
                Learn more about our doctor
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-OkHFi7reDgbMNcin0BRiOTwLgERVGt.png"
                  alt="REVIZE Clinic Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Location Info */}
            <div>
              <p className="text-xs tracking-[0.3em] text-teal uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-teal"></span>
                Visit Us
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
                Conveniently located in Asok
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                เดินทางสะดวก ใจกลางอโศก ใกล้ BTS Asok<br />
                Times Square 1FL. Next to Starbucks
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg hover:bg-teal/5 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">REVIZE Clinic Asok</p>
                    <p className="text-sm text-muted-foreground">
                      Times Square 1FL, Next to Starbucks<br />
                      Asok, Bangkok
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-teal/5 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-teal">B</span>
                  </div>
                  <p className="text-sm text-muted-foreground">BTS Asok ทางออก 6 (เดิน 2 นาที)</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-teal/5 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-teal">M</span>
                  </div>
                  <p className="text-sm text-muted-foreground">MRT Sukhumvit (เดิน 3 นาที)</p>
                </div>
              </div>

              <Link 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-teal hover:bg-teal hover:text-white transition-all duration-300 text-sm group"
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
