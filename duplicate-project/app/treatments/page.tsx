import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"
import { Star, MapPin, ArrowRight, Check, Plus } from "lucide-react"

const popularTreatments = [
  {
    title: "V-shape lifting",
    description: "Lift and contour for a slimmer, more defined look.",
  },
  {
    title: "Skin brightening",
    description: "Improve dullness and uneven tone for radiant skin.",
  },
  {
    title: "Under-eye rejuvenation",
    description: "Reduce dark circles and restore a refreshed look.",
  },
  {
    title: "Lip hydration / balance",
    description: "Enhance shape and hydration for natural-looking lips.",
  },
]

const botoxBenefits = [
  "Softens expression lines",
  "Helps prevent new lines from forming",
  "Natural-looking results",
  "Treatment time 15-30 minutes",
]

const otherTreatments = [
  { name: "Skin Booster", icon: "S" },
  { name: "Acne Scar Laser", icon: "A" },
  { name: "Under Eye Treatment", icon: "U" },
  { name: "Jawline Contouring", icon: "J" },
  { name: "Chemical Peel", icon: "C" },
  { name: "HIFU / RF Lifting", icon: "H" },
]

export default function TreatmentsPage() {
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
                Treatments
              </p>
              
              <h1 className="text-4xl sm:text-5xl font-serif text-navy leading-tight mb-6 text-balance">
                Treatments for brighter skin, V-shape lifting, and natural facial balance.
              </h1>
              
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Doctor-led Botox, filler, laser, skin booster, and skin rejuvenation treatments designed to enhance your unique features with subtle, natural results.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal" />
                  <span>Asok, Bangkok</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>15+ years experience</span>
                <span className="hidden sm:inline">•</span>
                <span>500+ happy clients</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <LineButton size="lg" />
                <Link 
                  href="/before-after" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border hover:border-teal bg-white text-foreground transition-colors"
                >
                  See Before & After
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-teal text-teal" />
                  ))}
                </div>
                <span><strong className="text-foreground">5.0</strong> Google Reviews</span>
                <span>•</span>
                <span>Near BTS Asok</span>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative min-h-[400px] lg:min-h-[600px] order-1 lg:order-2 bg-gradient-to-br from-teal/5 via-cream to-teal/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.41.31-TSh68SpfdoqKyV2R6cULWu9IbMVh9s.png"
                    alt="REVIZE Logo"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-6"
                  />
                  <span className="text-3xl tracking-wide text-navy font-sans font-semibold block mb-2">REVIZE</span>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground">CLINIC ASOK</p>
                  <p className="text-sm text-muted-foreground mt-6">Hero Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs tracking-[0.2em] text-teal uppercase mb-8 text-center">
            What Clients Usually Come In For
          </p>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-teal/10 via-teal/5 to-navy/80">
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  <h3 className="text-2xl font-serif text-white mb-2">Subtle care.</h3>
                  <h3 className="text-2xl font-serif text-white mb-4">Beautiful results.</h3>
                  <p className="text-white/80 text-sm text-center">
                    Natural-looking treatments tailored to your goals and lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {popularTreatments.map((treatment, index) => (
                <Link 
                  key={index}
                  href={`/treatments#${treatment.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-teal/5 transition-colors"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-teal/10 to-teal/20 shrink-0 flex items-center justify-center">
                    <span className="text-teal font-serif text-2xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground group-hover:text-teal transition-colors">
                      {treatment.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {treatment.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-teal mt-2">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Botox Section */}
      <section id="botox" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Before/After Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal/5 to-teal/10">
              <div className="absolute inset-0 flex">
                <div className="flex-1 relative bg-teal/5 flex items-center justify-center">
                  <span className="text-teal/50 font-serif text-xl">Before</span>
                </div>
                <div className="flex-1 relative bg-teal/10 flex items-center justify-center">
                  <span className="text-teal/50 font-serif text-xl">After</span>
                </div>
              </div>
              {/* Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex">
                <div className="flex-1 py-2 text-center text-sm font-medium bg-navy/80 text-white">
                  BEFORE
                </div>
                <div className="flex-1 py-2 text-center text-sm font-medium bg-teal text-white">
                  AFTER
                </div>
              </div>
              {/* Arrow indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-5 h-5 text-teal" />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-3">
                Botox (Botulinum Toxin)
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
                Smooth expression lines.<br />
                Keep your natural expression.
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Botox relaxes targeted muscles to soften dynamic lines like forehead lines, frown lines, and crow&apos;s feet—while keeping your natural expressions.
              </p>

              <ul className="space-y-3 mb-6">
                {botoxBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-teal" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground italic mb-6">
                Results last 3–6 months.
              </p>

              <LineButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Treatments */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs tracking-[0.2em] text-teal uppercase mb-8">
            Other Treatments
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {otherTreatments.map((treatment, index) => (
              <Link
                key={index}
                href={`/treatments#${treatment.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-teal transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal font-serif">
                    {treatment.icon}
                  </span>
                  <span className="font-medium text-foreground group-hover:text-teal transition-colors">
                    {treatment.name}
                  </span>
                </div>
                <Plus className="w-5 h-5 text-muted-foreground group-hover:text-teal transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal/5 to-teal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-teal/10 to-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-16%20at%2017.41.31-TSh68SpfdoqKyV2R6cULWu9IbMVh9s.png"
                    alt="REVIZE Logo"
                    width={60}
                    height={60}
                    className="rounded-full mx-auto mb-3"
                  />
                  <span className="text-xl tracking-wide text-navy font-sans font-semibold">REVIZE</span>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground">CLINIC</p>
                  <p className="text-sm text-muted-foreground mt-4">Clinic Interior</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-xs tracking-[0.2em] text-teal uppercase mb-3">
                Not Sure Where to Start?
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
                We&apos;ll guide you.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                During your consultation, we&apos;ll discuss your goals and create a plan that makes sense for you.
              </p>
              <LineButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
