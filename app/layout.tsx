import type { Metadata } from 'next'
import { Syne, Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
})

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'IDEON — Digital Innovation & Technology Company',
  description: 'IDEON is a premium technology company specializing in web development, mobile apps, AI solutions, and digital transformation. We build digital experiences that move businesses forward.',
  keywords: ['web development', 'mobile development', 'AI', 'UI/UX design', 'digital transformation', 'software solutions', 'IDEON', 'technology company'],
  authors: [{ name: 'IDEON' }],
  openGraph: {
    title: 'IDEON — Digital Innovation & Technology Company',
    description: 'We Build Digital Experiences That Move Businesses Forward.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-inter bg-ideon-black text-ideon-white antialiased">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img
            src="/Companypicter.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
            style={{ mixBlendMode: 'screen' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ideon-black/80 via-ideon-black/60 to-ideon-black/90" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
