import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"
import { Info, Stethoscope, Award, Sparkles, Shield } from "lucide-react"

const pricingCategories = [
  {
    title: "Injectables",
    icon: "I",
    treatments: [
      { name: "Botox", price: "฿8,900 / 100 units" },
      { name: "Filler", price: "฿13,900 / 1 cc" },
      { name: "Jawline Contouring", price: "฿16,900" },
      { name: "Lip Filler", price: "฿9,900" },
      { name: "Under Eye Filler", price: "฿12,900" },
      { name: "Skin Booster (HA)", price: "฿8,900 / 1 cc" },
    ],
  },
  {
    title: "Skin & Collagen",
    icon: "S",
    treatments: [
      { name: "Skin Booster", price: "฿6,900 / 1 cc" },
      { name: "Rejuran", price: "฿14,900 / 2 cc" },
      { name: "Sculptra", price: "฿22,900 / vial" },
      { name: "Exosome Therapy", price: "฿12,900" },
      { name: "Vitamin IV Drip", price: "฿2,900" },
      { name: "Collagen Stimulator", price: "฿16,900" },
    ],
  },
  {
    title: "Laser & Skin",
    icon: "L",
    treatments: [
      { name: "Picosecond Laser", price: "฿4,900 / session" },
      { name: "Pico Bright", price: "฿3,900 / session" },
      { name: "Thermage FLX", price: "฿39,900 / session" },
      { name: "Ultherapy", price: "฿39,900 / session" },
      { name: "HIFU (MPT)", price: "฿19,900 / session" },
      { name: "Fractional RF", price: "฿9,900 / session" },
    ],
  },
  {
    title: "Facial & Wellness",
    icon: "F",
    treatments: [
      { name: "Hydrafacial", price: "฿3,900" },
      { name: "LED Therapy", price: "฿1,500" },
      { name: "Chemical Peel", price: "฿3,900" },
      { name: "Acne Program", price: "฿4,900" },
      { name: "Oxygen Facial", price: "฿2,900" },
      { name: "Hair Growth Program", price: "฿6,900" },
    ],
  },
]

const valueProps = [
  {
    icon: Stethoscope,
    title: "Doctor-Led Care",
    description: "All treatments by experienced doctors",
  },
  {
    icon: Award,
    title: "Premium Products",
    description: "Only FDA-approved, top-quality brands",
  },
  {
    icon: Sparkles,
    title: "Natural Results",
    description: "Enhance your beauty, never overdone",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety and comfort are our top priority",
  },
]

export default function PricingPage() {
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
                Clear Pricing
              </p>
              
              <h1 className="text-4xl sm:text-5xl font-serif text-charcoal leading-tight mb-6 text-balance">
                Transparent pricing.<br />
                Personalized care.
              </h1>
              
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                Our prices are straightforward and competitive. Your <strong className="text-foreground">treatment plan</strong> will be tailored to your <strong className="text-foreground">goals</strong>, facial anatomy, and the best approach for you.
              </p>

              <div className="bg-rose-gold/5 rounded-lg p-4 max-w-md border border-rose-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-rose-gold font-serif">?</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Not sure what you need?
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Call us for an initial recommendation from our doctor.
                    </p>
                    <LineButton size="sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Clinic Interior */}
            <div className="relative min-h-[300px] lg:min-h-[500px] order-1 lg:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.43.21-VjvCXHJsCLcZ0HqjlxRZ46p9u4oLcK.png"
                alt="MATRIX Clinic Treatments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-border" />
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Treatment Pricing
              </p>
              <div className="h-px w-12 bg-border" />
            </div>
            <p className="text-muted-foreground">
              All treatments are performed by a medical doctor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center">
                    <span className="text-rose-gold font-serif text-lg">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-medium text-rose-gold">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.treatments.map((treatment, idx) => (
                    <div key={idx} className="flex justify-between items-baseline">
                      <span className="text-sm text-foreground">{treatment.name}</span>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground block">Starting from</span>
                        <span className="text-sm font-medium text-foreground">{treatment.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-rose-gold/5 rounded-lg flex items-start gap-3 border border-rose-gold/20">
            <Info className="w-5 h-5 text-rose-gold shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Prices vary depending on the product, amount used, treatment area, and individual concerns. Final price will be confirmed after consultation with our doctor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-gold/5 to-rose-gold/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image & CTA */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-BnoouyqZ4eVLkmN7pw6zQw9pUM5Uc5.png"
                  alt="MATRIX Clinic Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg max-w-xs hidden lg:block">
                <p className="text-lg font-serif text-charcoal mb-2">
                  Not sure where to start?
                </p>
                <h3 className="text-2xl font-serif text-charcoal mb-3">
                  We&apos;ll guide you.
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us and our doctor will recommend the best treatment plan for your goals and budget.
                </p>
                <LineButton size="md" />
              </div>
            </div>

            {/* Right - Value Props */}
            <div className="grid sm:grid-cols-2 gap-4 lg:pl-12">
              {valueProps.map((prop, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-border">
                  <prop.icon className="w-8 h-8 text-rose-gold mb-3" />
                  <p className="text-xs tracking-[0.1em] text-rose-gold uppercase mb-1">
                    {prop.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
