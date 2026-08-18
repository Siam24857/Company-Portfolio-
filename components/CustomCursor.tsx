'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const CURSOR_TRAIL_COUNT = 4
const TRAIL_DELAY = 8
const MAGNETIC_RADIUS = 60
const MAGNETIC_MAX_SHIFT = 6

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const [hoverType, setHoverType] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  
  const orbitRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const positions = useRef<{ x: number; y: number }[]>(Array(CURSOR_TRAIL_COUNT).fill({ x: -100, y: -100 }))
  const frameCount = useRef(0)
  const lastTime = useRef(0)
  const magneticRefs = useRef<Map<Element, { el: HTMLElement; initialX: number; initialY: number }>>(new Map())

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Magnetic button effect
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const magneticEl = target.closest('[data-magnetic]') as HTMLElement | null
      
      if (magneticEl) {
        setHoverType('button')
        setIsHovering(true)
        magneticRefs.current.set(magneticEl, {
          el: magneticEl,
          initialX: magneticEl.offsetLeft,
          initialY: magneticEl.offsetTop,
        })
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const magneticEl = target.closest('[data-magnetic]') as HTMLElement | null
      
      if (magneticEl) {
        setIsHovering(false)
        setHoverType(null)
        magneticRefs.current.delete(magneticEl)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    let animationId: number

    const animate = (time: number) => {
      frameCount.current++
      if (time - lastTime.current < 16) {
        animationId = requestAnimationFrame(animate)
        return
      }
      lastTime.current = time

      // Update orbit position (lerp 0.20)
      if (orbitRef.current) {
        const currentX = parseFloat(orbitRef.current.style.left || String(mousePos.x))
        const currentY = parseFloat(orbitRef.current.style.top || String(mousePos.y))
        const newX = currentX + (mousePos.x - currentX) * 0.20
        const newY = currentY + (mousePos.y - currentY) * 0.20
        orbitRef.current.style.left = `${newX}px`
        orbitRef.current.style.top = `${newY}px`
      }

      // Update glow position (lerp 0.15)
      if (glowRef.current) {
        const currentX = parseFloat(glowRef.current.style.left || String(mousePos.x))
        const currentY = parseFloat(glowRef.current.style.top || String(mousePos.y))
        const newX = currentX + (mousePos.x - currentX) * 0.15
        const newY = currentY + (mousePos.y - currentY) * 0.15
        glowRef.current.style.left = `${newX}px`
        glowRef.current.style.top = `${newY}px`
      }

      // Update trail positions with delay
      if (frameCount.current % TRAIL_DELAY === 0) {
        positions.current.unshift({ x: mousePos.x, y: mousePos.y })
        positions.current = positions.current.slice(0, CURSOR_TRAIL_COUNT)
      }

      positions.current.forEach((pos, index) => {
        if (trailRefs.current[index]) {
          trailRefs.current[index]!.style.left = `${pos.x}px`
          trailRefs.current[index]!.style.top = `${pos.y}px`
          trailRefs.current[index]!.style.opacity = `${0.6 - index * 0.12}`
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [mousePos.x, mousePos.y])

  // Magnetic button effect in animation loop
  useEffect(() => {
    const updateMagneticElements = () => {
      magneticRefs.current.forEach((data) => {
        const { el, initialX, initialY } = data
        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distX = mousePos.x - centerX
        const distY = mousePos.y - centerY
        const distance = Math.sqrt(distX * distX + distY * distY)

        if (distance < MAGNETIC_RADIUS && isHovering) {
          const factor = (MAGNETIC_RADIUS - distance) / MAGNETIC_RADIUS
          const shiftX = (distX / distance) * factor * MAGNETIC_MAX_SHIFT || 0
          const shiftY = (distY / distance) * factor * MAGNETIC_MAX_SHIFT || 0
          el.style.transform = `translate(${shiftX}px, ${shiftY}px)`
        } else {
          el.style.transform = ''
        }
      })

      requestAnimationFrame(updateMagneticElements)
    }

    const id = requestAnimationFrame(updateMagneticElements)
    return () => cancelAnimationFrame(id)
  }, [mousePos, isHovering])

  const getOrbitText = useCallback(() => {
    if (!hoverType) return null
    if (hoverType === 'button') return 'OPEN'
    if (hoverType === 'project') return 'VIEW'
    if (hoverType === 'link') return 'GO →'
    return null
  }, [hoverType])

  const getOrbitSize = useCallback(() => {
    if (!hoverType) return 40
    if (hoverType === 'button') return 80
    if (hoverType === 'project') return 90
    if (hoverType === 'link') return 60
    return 40
  }, [hoverType])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <style jsx global>{`
        body { cursor: none !important; }
        a, button, [data-magnetic], input, textarea, select { cursor: none !important; }
      `}</style>

      {/* Core Dot */}
      <div
        ref={coreRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-ideon-orange pointer-events-none z-[9999] transition-transform duration-150"
        style={{
          transform: `translate(${mousePos.x - 3}px, ${mousePos.y - 3}px)`,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? '0' : '1',
        }}
      />

      {/* Orbit Ring */}
      <div
        ref={orbitRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          width: `${getOrbitSize()}px`,
          height: `${getOrbitSize()}px`,
          transform: `translate(${mousePos.x - getOrbitSize() / 2}px, ${mousePos.y - getOrbitSize() / 2}px)`,
          borderRadius: '50%',
          border: `2px solid ${isHovering ? 'rgba(6,182,212,0.7)' : 'rgba(255,138,61,0.8)'}`,
          backgroundColor: isHovering ? 'rgba(255,138,61,0.08)' : 'transparent',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s',
          opacity: isVisible ? 1 : 0,
        }}
      >
        {getOrbitText() && (
          <span
            className="font-mono text-[8px] font-bold text-ideon-white whitespace-nowrap"
            style={{
              opacity: hoverType ? 1 : 0,
              transition: 'opacity 0.2s',
            }}
          >
            {getOrbitText()}
          </span>
        )}
      </div>

      {/* Glow Bloom */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          width: '100px',
          height: '100px',
          transform: `translate(${mousePos.x - 50}px, ${mousePos.y - 50}px)`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,138,61,0.10) 0%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Trail Ghosts */}
      {Array.from({ length: CURSOR_TRAIL_COUNT }).map((_, index) => (
        <div
          key={index}
           ref={(el) => { trailRefs.current[index] = el }}
          className="fixed top-0 left-0 w-[4px] h-[4px] rounded-full bg-ideon-orange pointer-events-none z-[9996]"
          style={{
            transform: `translate(${positions.current[index]?.x || -100}px, ${positions.current[index]?.y || -100}px)`,
            opacity: 0.6 - index * 0.12,
          }}
        />
      ))}
    </>
  )
}
