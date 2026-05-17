"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface BeforeAfterCardProps {
  beforeImage: string
  afterImage: string
  title: string
  description?: string
}

export function BeforeAfterCard({ beforeImage, afterImage, title, description }: BeforeAfterCardProps) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="group">
      <div 
        className="relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        <Image
          src={beforeImage}
          alt={`${title} - Before`}
          fill
          className={`object-cover transition-opacity duration-300 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
        />
        <Image
          src={afterImage}
          alt={`${title} - After`}
          fill
          className={`object-cover transition-opacity duration-300 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex">
          <div className={`flex-1 py-2 text-center text-sm font-medium transition-colors ${!showAfter ? 'bg-gold text-white' : 'bg-black/50 text-white/80'}`}>
            Before
          </div>
          <div className={`flex-1 py-2 text-center text-sm font-medium transition-colors ${showAfter ? 'bg-gold text-white' : 'bg-black/50 text-white/80'}`}>
            After
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
          <ArrowRight className="w-5 h-5 text-gold" />
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}
