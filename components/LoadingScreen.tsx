'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loader"
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-ideon-black"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        onAnimationComplete={() => onComplete()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Phase 1: SVG Text Drawing (0-0.8s) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <svg
              width="400"
              height="80"
              viewBox="0 0 400 80"
              className="font-syne"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="none"
                stroke="#3B8E93"
                strokeWidth="2"
                fontSize="72"
                fontWeight="800"
                fontFamily="Syne, sans-serif"
                className="animate-stroke-draw"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: 0,
                  animation: 'stroke-draw 0.8s ease forwards',
                }}
              >
                IDEON
              </text>
            </svg>
          </motion.div>

          {/* Phase 2: Line Sweep (0.8-1.6s) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[60px] h-[2px] bg-ideon-orange origin-left"
          />

          {/* Phase 3: Split Panels (1.6-2.2s) */}
          <motion.div
            className="absolute inset-0 flex flex-col"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 1.6 }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: '-100vh' }}
              transition={{ duration: 0.6, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
              className="h-1/2 bg-ideon-black"
            />
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: '100vh' }}
              transition={{ duration: 0.6, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
              className="h-1/2 bg-ideon-black"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
