import Link from "next/link"
import { cn } from "@/lib/utils"

interface LineButtonProps {
  variant?: "primary" | "outline" | "white"
  size?: "sm" | "md" | "lg"
  className?: string
  children?: React.ReactNode
}

export function LineButton({ variant = "primary", size = "md", className, children }: LineButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 rounded font-medium relative overflow-hidden group"
  
  const variants = {
    primary: "bg-rose-gold hover:bg-rose-gold-dark text-white shadow-md hover:shadow-lg",
    outline: "border border-border hover:border-rose-gold bg-white text-foreground hover:shadow-md",
    white: "bg-white hover:bg-white/90 text-foreground shadow-md hover:shadow-lg",
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <Link 
      href="tel:0988545623" 
      className={cn(baseStyles, variants[variant], sizes[size], "transition-all duration-400 ease-out", className)}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
      
      <span className={cn(
        "rounded flex items-center justify-center font-bold shrink-0 relative z-10 transition-transform group-hover:scale-110",
        variant === "primary" ? "w-5 h-5 bg-white text-rose-gold text-[8px]" : "w-5 h-5 bg-rose-gold text-white text-[8px]"
      )}>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </span>
      <span className="relative z-10">{children || "โทรนัดหมาย"}</span>
    </Link>
  )
}
