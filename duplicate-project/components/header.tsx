"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

const treatments = [
  { name: "Botox", href: "/treatments#botox" },
  { name: "Filler", href: "/treatments#filler" },
  { name: "Skin Booster", href: "/treatments#skin-booster" },
  { name: "V-Shape Lifting", href: "/treatments#v-shape" },
  { name: "Laser & Skin", href: "/treatments#laser" },
  { name: "Under Eye", href: "/treatments#under-eye" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-rose-gold to-rose-gold-dark text-white py-2.5 px-4 text-center text-sm flex items-center justify-center gap-3 relative">
        <span className="text-white/90 animate-pulse-soft">✦</span>
        <span>Holiday Rejuvenation: Glow Facial + Lift & Firm <strong>฿7,999</strong></span>
        <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-xs transition-luxury">
          ดูรายละเอียด
        </button>
        <button className="absolute right-4 text-white/70 hover:text-white transition-colors hidden md:block">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Header */}
      <header className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-luxury ${scrolled ? 'shadow-md border-b border-transparent' : 'border-b border-border/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
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
                <span className="text-xl md:text-2xl tracking-[0.15em] text-charcoal font-light">MATRIX</span>
                <span className="text-[8px] tracking-[0.3em] text-muted-foreground text-center">CLINIC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-sm text-foreground hover:text-rose-gold transition-luxury link-underline py-2"
                  onMouseEnter={() => setTreatmentsOpen(true)}
                  onMouseLeave={() => setTreatmentsOpen(false)}
                >
                  TREATMENTS
                  <ChevronDown className={`w-4 h-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`absolute top-full left-0 pt-2 transition-all ${treatmentsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  onMouseEnter={() => setTreatmentsOpen(true)}
                  onMouseLeave={() => setTreatmentsOpen(false)}
                >
                  <div className="bg-white shadow-xl rounded-xl py-2 min-w-48 border border-border/50 overflow-hidden">
                    {treatments.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-rose-gold/5 hover:text-rose-gold transition-luxury"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/before-after" className="text-sm text-foreground hover:text-rose-gold transition-luxury link-underline py-2">
                BEFORE & AFTER
              </Link>
              <Link href="/injector" className="text-sm text-foreground hover:text-rose-gold transition-luxury link-underline py-2">
                MEET YOUR INJECTOR
              </Link>
              <Link href="/pricing" className="text-sm text-foreground hover:text-rose-gold transition-luxury link-underline py-2">
                PRICING
              </Link>
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="hover:text-rose-gold transition-colors cursor-pointer">ภาษาไทย</span>
                <span>|</span>
                <span className="font-medium text-foreground">EN</span>
              </div>
              <Link 
                href="tel:0988545623" 
                className="flex items-center gap-2 text-sm border border-border rounded-full px-3 py-1.5 hover:border-rose-gold hover:shadow-md transition-luxury"
              >
                <span className="w-5 h-5 bg-rose-gold rounded-full flex items-center justify-center text-white text-[10px]">
                  ☎
                </span>
                098-854-5623
              </Link>
              <Link 
                href="https://line.me/R/ti/p/@matrixclinic" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#06C755] hover:bg-[#05a847] text-white px-5 py-2 rounded text-sm btn-luxury flex items-center gap-2"
              >
                <span className="w-4 h-4 bg-white rounded flex items-center justify-center text-[#06C755] text-[7px] font-bold">LINE</span>
                จองผ่าน LINE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-rose-gold/5 rounded-lg transition-luxury"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`w-6 h-6 absolute transition-all ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-border overflow-hidden transition-all duration-500 ease-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-1">
            {[
              { name: 'Treatments', href: '/treatments' },
              { name: 'Before & After', href: '/before-after' },
              { name: 'Meet Your Injector', href: '/injector' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Contact', href: '/contact' },
            ].map((item, index) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="block py-3 text-foreground hover:text-rose-gold hover:pl-2 transition-luxury border-b border-border/30"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="https://line.me/R/ti/p/@matrixclinic" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#06C755] text-white text-center py-3 rounded mt-4 btn-luxury"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 bg-white rounded flex items-center justify-center text-[#06C755] text-[7px] font-bold">LINE</span>
                จองผ่าน LINE
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
