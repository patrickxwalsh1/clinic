import Link from "next/link"
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react"

const quickLinks = [
  { name: "Treatments", href: "/treatments" },
  { name: "Before & After", href: "/before-after" },
  { name: "Meet Your Injector", href: "/injector" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const treatments = [
  { name: "Botox", href: "/treatments#botox" },
  { name: "Filler", href: "/treatments#filler" },
  { name: "Skin Booster", href: "/treatments#skin-booster" },
  { name: "V-Shape Lifting", href: "/treatments#v-shape" },
  { name: "Laser & Skin", href: "/treatments#laser" },
  { name: "Under Eye Treatment", href: "/treatments#under-eye" },
]

export function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <path 
                    d="M30 5 L15 25 L30 45 L45 25 Z M30 20 L22 30 L30 40 L38 30 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-rose-gold"
                  />
                  <path 
                    d="M20 50 L30 35 L40 50" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-rose-gold"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl tracking-[0.15em] text-charcoal font-light">MATRIX</span>
                <span className="text-[7px] tracking-[0.3em] text-muted-foreground text-center">CLINIC</span>
              </div>
            </Link>
            <p className="text-xs tracking-[0.15em] text-rose-gold uppercase mb-2">The Freedom of Beauty</p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Doctor-led aesthetic care for natural beauty and long-term confidence.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center text-foreground hover:bg-rose-gold hover:text-white transition-luxury">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center text-foreground hover:bg-rose-gold hover:text-white transition-luxury">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.15em] text-foreground font-medium mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-rose-gold transition-luxury inline-flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-xs tracking-[0.15em] text-foreground font-medium mb-4">TREATMENTS</h4>
            <ul className="space-y-2">
              {treatments.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-rose-gold transition-luxury inline-flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] text-foreground font-medium mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground group">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-rose-gold group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">
                  MATRIX Clinic<br />
                  Times Square Building<br />
                  Room 212, Floor 2<br />
                  246 Sukhumvit Rd, Khlong Toei
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                <span className="w-4 h-4 flex items-center justify-center shrink-0 text-[8px] font-bold text-rose-gold">BTS</span>
                <span className="group-hover:text-foreground transition-colors">Asok (Exit 6) – 2 min walk</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                <Phone className="w-4 h-4 shrink-0 text-rose-gold group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">098-854-5623</span>
              </li>
            </ul>
          </div>

          {/* Hours & Map */}
          <div>
            <h4 className="text-xs tracking-[0.15em] text-foreground font-medium mb-4">HOURS</h4>
            <div className="flex items-start gap-3 text-sm text-muted-foreground mb-4 group">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-rose-gold group-hover:scale-110 transition-transform" />
              <span>Mon – Sat: 10:00 – 20:00<br />(Closed on Sundays)</span>
            </div>
            <div className="bg-white rounded-lg p-3 border border-border hover:border-rose-gold transition-luxury">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-gold/10 to-rose-gold/5 rounded flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="relative w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <path 
                        d="M30 5 L15 25 L30 45 L45 25 Z M30 20 L22 30 L30 40 L38 30 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        className="text-rose-gold"
                      />
                      <path 
                        d="M20 50 L30 35 L40 50" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        className="text-rose-gold"
                      />
                    </svg>
                  </div>
                  <span className="text-lg tracking-wide text-charcoal font-light">MATRIX</span>
                </div>
              </div>
              <Link 
                href="https://maps.google.com/?q=Times+Square+Building+246+Sukhumvit+Rd+Khlong+Toei+Bangkok" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center text-sm border border-border rounded py-2 mt-3 hover:border-rose-gold hover:text-rose-gold transition-luxury group"
              >
                GET DIRECTIONS
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MATRIX Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-rose-gold transition-luxury link-underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-rose-gold transition-luxury link-underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Floating LINE Button */}
      <Link 
        href="https://line.me/R/ti/p/@matrixclinic" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-line-green text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 btn-luxury hover:shadow-xl"
      >
        <span className="w-5 h-5 bg-white rounded flex items-center justify-center text-line-green text-[7px] font-bold">LINE</span>
        <span className="text-sm font-medium">จองผ่าน LINE</span>
      </Link>
    </footer>
  )
}
