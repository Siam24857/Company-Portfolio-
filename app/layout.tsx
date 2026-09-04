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
  title: 'IDEONS — Engineering Digital Ideas Into Reality',
  description: 'IDEONS is a technology-focused software company building modern, scalable, and intelligent digital solutions. Specializing in web development, AI, cloud solutions, and software engineering.',
  keywords: ['IDEONS', 'software development', 'web development', 'AI', 'cloud solutions', 'IT consulting', 'digital transformation', 'full-stack development'],
  authors: [{ name: 'IDEONS' }],
  openGraph: {
    title: 'IDEONS — Engineering Digital Ideas Into Reality',
    description: 'Technology-focused software company building modern, scalable, and intelligent digital solutions.',
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
