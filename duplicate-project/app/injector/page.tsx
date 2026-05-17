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
              <p className="text-xs tracking-[0.3em] text-teal uppercase mb-4 flex items-center gap-2 opacity-0 animate-fade-in-up">
                <span className="w-8 h-[1px] bg-teal"></span>
                Doctor-Led. Natural Results.
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy leading-[1.1] mb-6 text-balance opacity-0 animate-fade-in-up delay-100">
                A conservative approach to injectables.
              </h1>
              
              <p className="text-muted-foreground text-lg mb-4 max-w-md leading-relaxed opacity-0 animate-fade-in-up delay-200">
                My goal is simple — enhance your natural beauty while keeping your expression you.
              </p>

              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed opacity-0 animate-fade-in-up delay-300">
                Every treatment plan is personalized, thoughtful, and designed for long-term harmony.
              </p>

              <div className="border-l-2 border-teal pl-6 mb-8 opacity-0 animate-fade-in-up delay-400">
                <h3 className="text-xl font-serif text-teal mb-1">
                  Dr. Lalinda Wongsakul
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Medical Aesthetic Doctor
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
                    <credential.icon className="w-8 h-8 mx-auto mb-2 text-teal" />
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476150325_1077680777731051_3797646050005656885_n-JCPparzS9I3hqsxc8jlcr1QmMcIoaI.jpg"
                  alt="Doctor with patient at REVIZE Clinic"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30 lg:to-background/50"></div>
              </div>

              {/* Value Props Card */}
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl max-w-xs hidden lg:block opacity-0 animate-slide-in-right delay-600">
                <div className="space-y-3">
                  {valueProps.map((prop, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 bg-teal/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-luxury">
                        <Check className="w-4 h-4 text-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-teal">{prop.title}</p>
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
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl img-zoom">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-OkHFi7reDgbMNcin0BRiOTwLgERVGt.png"
                  alt="REVIZE Clinic Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.3em] text-teal uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-teal"></span>
                My philosophy
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6">
                Enhance, not change.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I believe subtle enhancements create the most beautiful and natural results. My approach focuses on balance, proportion, and facial harmony — never chasing trends.
              </p>

              <ul className="space-y-4">
                {philosophyPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 text-muted-foreground group">
                    <div className="w-8 h-8 rounded-full border border-teal flex items-center justify-center group-hover:bg-teal/10 transition-luxury">
                      <Check className="w-4 h-4 text-teal" />
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal/5 via-background to-teal/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs tracking-[0.3em] text-teal uppercase mb-4 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-teal"></span>
            Areas of Expertise
            <span className="w-8 h-[1px] bg-teal"></span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-border card-luxury"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="text-teal font-serif text-2xl">{area.icon}</span>
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
          <div className="bg-gradient-to-br from-teal/5 to-teal/10 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-navy mb-4">
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
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded border border-border hover:border-teal bg-white text-foreground transition-luxury group"
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
