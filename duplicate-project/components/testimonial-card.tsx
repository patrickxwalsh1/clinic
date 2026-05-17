import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
}

export function TestimonialCard({ name, location, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg max-w-xs">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-rose-gold/10 shrink-0 flex items-center justify-center text-rose-gold font-serif text-lg">
          {name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 ${i < rating ? 'fill-warm-gold text-warm-gold' : 'fill-gray-200 text-gray-200'}`} 
              />
            ))}
            <span className="text-sm font-medium ml-1">{rating.toFixed(1)}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {text}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            — {name}, {location}
          </p>
        </div>
      </div>
    </div>
  )
}
