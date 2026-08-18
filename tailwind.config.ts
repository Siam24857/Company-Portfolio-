import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ideon-black': '#0A0E17',
        'ideon-navy': '#0F172A',
        'ideon-blue': '#3B82F6',
        'ideon-cyan': '#06B6D4',
        'ideon-purple': '#8B5CF6',
        'ideon-orange': '#FF8A3D',
        'ideon-white': '#F8FAFC',
        'ideon-gray': '#94A3B8',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 70% 30%, rgba(59,142,147,0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(255,138,61,0.07) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
export default config
