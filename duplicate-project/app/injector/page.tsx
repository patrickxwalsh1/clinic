import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineButton } from "@/components/line-button"
import { Check, GraduationCap, Award, Globe, BookOpen, ArrowRight } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    title: "Doctor of Medicine",
    description: "Chulalongkorn University",
  },
  {
    icon: Award,
    title: "Advanced Injectable",
    description: "Training (USA)",
  },
  {
    icon: Globe,
    title: "Member, Thai Society of",
    description: "Aesthetic Physicians",
  },
  {
    icon: BookOpen,
    title: "Continuing Education",
    description: "Worldwide",
  },
]

const philosophyPoints = [
  "We listen to your goals",
  "We assess your unique facial structure",
  "We create a plan that fits your lifestyle",
  "We review and refine over time",
]

const expertiseAreas = [
  { title: "Facial Balance", subtitle: "& Proportion", icon: "F" },
  { title: "V-Shape", subtitle: "Lifting", icon: "V" },
  { title: "Botox", subtitle: "Anti-wrinkle", icon: "B" },
  { title: "Fillers", subtitle: "& Contouring", icon: "F" },
  { title: "Skin Quality", subtitle: "& Rejuvenation", icon: "S" },
  { title: "Under Eye", subtitle: "Rejuvenation", icon: "U" },
]

const valueProps = [
  { title: "Natural Results", description: "Never overdone." },
  { title: "Doctor-Led Care", description: "Every treatment by a medical doctor." },
  { title: "Premium Products", description: "Only trusted, high-quality brands." },
  { title: "Safety First", description: "Your safety is always our priority." },
]

export default function InjectorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-140px)]">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-16 order-2 lg:order-1 relative z-10">
              <p className="text-xs tracking-[0.3em] text-rose-gold uppercase mb-4 flex items-center gap-2 opacity-0 animate-fade-in-up">
                <span className="w-8 h-[1px] bg-rose-gold"></span>
                Doctor-Led. Natural Results.
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal leading-[1.1] mb-6 text-balance opacity-0 animate-fade-in-up delay-100">
                A conservative approach to injectables.
              </h1>
              
              <p className="text-muted-foreground text-lg mb-4 max-w-md leading-relaxed opacity-0 animate-fade-in-up delay-200">
                My goal is simple — enhance your natural beauty while keeping your expression you.
              </p>

              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed opacity-0 animate-fade-in-up delay-300">
                Every treatment plan is personalized, thoughtful, and designed for long-term harmony.
              </p>

              <div className="border-l-2 border-rose-gold pl-6 mb-8 opacity-0 animate-fade-in-up delay-400">
                <h3 className="text-xl font-serif text-rose-gold mb-1">
                  MATRIX Clinic Medical Team
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Medical Aesthetic Doctors
                </p>
                <p className="text-sm text-muted-foreground">
                  15+ Years of Experience
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-in-up delay-500">
                {credentials.map((credential, index) => (
                  <div 
                    key={index} 
                    className="text-center p-4 bg-white rounded-lg border border-border card-luxury"
                  >
                    <credential.icon className="w-8 h-8 mx-auto mb-2 text-rose-gold" />
                    <p className="text-xs font-medium text-foreground">{credential.title}</p>
                    <p className="text-xs text-muted-foreground">{credential.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Doctor Image */}
            <div className="relative min-h-[500px] lg:min-h-full order-1 lg:order-2 opacity-0 animate-fade-in delay-200">
              <div className="absolute inset-0 img-zoom">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202569-05-17%20at%2016.55.13%201-oE1cV4LsD3e5hsIwFvAZiXIbSNa5rf.png"
                  alt="MATRIX Clinic Doctor"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30 lg:to-background/50"></div>
              </div>

              {/* Value Props Card */}
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl max-w-xs hidden lg:block opacity-0 animate-slide-in-right delay-600">
                <div className="space-y-3">
                  {valueProps.map((prop, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-rose-gold/20 transition-luxury">
                        <Check className="w-4 h-4 text-rose-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-rose-gold">{prop.title}</p>
                        <p className="text-xs text-muted-foreground">{prop.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl img-zoom">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-BnoouyqZ4eVLkmN7pw6zQw9pUM5Uc5.png"
                  alt="MATRIX Clinic Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.3em] text-rose-gold uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-rose-gold"></span>
                My philosophy
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6">
                Enhance, not change.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I believe subtle enhancements create the most beautiful and natural results. My approach focuses on balance, proportion, and facial harmony — never chasing trends.
              </p>

              <ul className="space-y-4">
                {philosophyPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 text-muted-foreground group">
                    <div className="w-8 h-8 rounded-full border border-rose-gold flex items-center justify-center group-hover:bg-rose-gold/10 transition-luxury">
                      <Check className="w-4 h-4 text-rose-gold" />
                    </div>
                    <span className="group-hover:text-foreground transition-colors">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-rose-gold/5 via-background to-rose-gold/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs tracking-[0.3em] text-rose-gold uppercase mb-4 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-rose-gold"></span>
            Areas of Expertise
            <span className="w-8 h-[1px] bg-rose-gold"></span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-border card-luxury"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-gold/10 flex items-center justify-center">
                  <span className="text-rose-gold font-serif text-2xl">{area.icon}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{area.title}</p>
                <p className="text-xs text-muted-foreground">{area.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-rose-gold/5 to-rose-gold/10 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
                  Ready to create a plan that&apos;s right for you?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  During your consultation, we&apos;ll discuss your goals and design a personalized treatment plan for natural, confident results.
                </p>
              </div>
              <div className="space-y-4">
                <LineButton size="lg" className="w-full justify-center btn-luxury" />
                <Link 
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded border border-border hover:border-rose-gold bg-white text-foreground transition-luxury group"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-muted-foreground text-center">
                  No pressure. Just clear medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
