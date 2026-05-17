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
    primary: "bg-line-green hover:bg-line-green/90 text-white shadow-md hover:shadow-lg",
    outline: "border border-border hover:border-line-green bg-white text-foreground hover:shadow-md",
    white: "bg-white hover:bg-white/90 text-foreground shadow-md hover:shadow-lg",
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <Link 
      href="https://line.me/R/ti/p/@matrixclinic" 
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], sizes[size], "transition-all duration-400 ease-out", className)}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
      
      <span className={cn(
        "rounded flex items-center justify-center font-bold shrink-0 relative z-10 transition-transform group-hover:scale-110",
        variant === "primary" ? "w-5 h-5 bg-white text-line-green text-[8px]" : "w-5 h-5 bg-line-green text-white text-[8px]"
      )}>
        LINE
      </span>
      <span className="relative z-10">{children || "จองผ่าน LINE"}</span>
    </Link>
  )
}
