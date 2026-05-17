import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MATRIX Clinic | The Freedom of Beauty - Premium Aesthetic Care Bangkok',
  description: 'Doctor-led Botox, filler, laser, and skin-rejuvenation treatments designed to enhance your unique features with subtle, natural results. Located at Times Square Building, Sukhumvit.',
  keywords: 'aesthetic clinic, botox, filler, laser treatment, skin rejuvenation, bangkok, sukhumvit, matrix clinic, freedom of beauty',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
