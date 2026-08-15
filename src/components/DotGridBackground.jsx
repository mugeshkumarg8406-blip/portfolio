import { useEffect, useRef } from 'react'

const SPACING = 30
const BASE_R = 1.1
const MAX_R = 2.6
const INFLUENCE = 130
const REPEL = 10
const EASE = 0.12

export default function DotGridBackground({ theme }) {
  const canvasRef = useRef(null)
  const themeRef = useRef(theme)

  useEffect(() => {
    themeRef.current = theme
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0, h = 0
    let dots = []
    let rafId = null
    let resizeTimer = null

    const pointer = { x: -9999, y: -9999, active: false }

    function colors() {
      return themeRef.current === 'light'
        ? { bg: '#f6f6f4', dot: '9,9,11' }
        : { bg: '#09090b', dot: '240,240,238' }
    }

    function buildGrid() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const cols = Math.ceil(w / SPACING) + 1
      const rows = Math.ceil(h / SPACING) + 1
      const offX = (w - (cols - 1) * SPACING) / 2
      const offY = (h - (rows - 1) * SPACING) / 2

      dots = []
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const ox = offX + i * SPACING
          const oy = offY + j * SPACING
          dots.push({ ox, oy, x: ox, y: oy, r: BASE_R })
        }
      }
    }

    function setPointer(x, y, active) {
      pointer.x = x
      pointer.y = y
      pointer.active = active
    }

    function onMouseMove(e) { setPointer(e.clientX, e.clientY, true) }
    function onMouseLeave() { pointer.active = false }
    function onTouchMove(e) {
      if (e.touches && e.touches[0]) {
        setPointer(e.touches[0].clientX, e.touches[0].clientY, true)
      }
    }
    function onTouchStart(e) {
      if (e.touches && e.touches[0]) {
        setPointer(e.touches[0].clientX, e.touches[0].clientY, true)
      }
    }
    function onTouchEnd() { pointer.active = false }
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(buildGrid, 120)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('resize', onResize)

    function frame() {
      const { bg, dot } = colors()
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      const px = pointer.active ? pointer.x : -9999
      const py = pointer.active ? pointer.y : -9999

      for (let k = 0; k < dots.length; k++) {
        const d = dots[k]
        const dx = d.ox - px
        const dy = d.oy - py
        const dist = Math.sqrt(dx * dx + dy * dy)

        let tx = d.ox, ty = d.oy, tr = BASE_R

        if (dist < INFLUENCE) {
          const t = 1 - dist / INFLUENCE
          const falloff = t * t * (3 - 2 * t)
          const push = falloff * REPEL
          const len = dist || 1
          tx = d.ox + (dx / len) * push
          ty = d.oy + (dy / len) * push
          tr = BASE_R + falloff * (MAX_R - BASE_R)
        }

        d.x += (tx - d.x) * EASE
        d.y += (ty - d.y) * EASE
        d.r += (tr - d.r) * EASE

        const brightness = 0.10 + (d.r - BASE_R) / (MAX_R - BASE_R) * 0.85
        ctx.beginPath()
        ctx.fillStyle = `rgba(${dot},${Math.min(brightness, 0.95).toFixed(3)})`
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = requestAnimationFrame(frame)
    }

    buildGrid()

    if (reduceMotion) {
      const { bg, dot } = colors()
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)
      dots.forEach(d => {
        ctx.beginPath()
        ctx.fillStyle = `rgba(${dot},0.14)`
        ctx.arc(d.x, d.y, BASE_R, 0, Math.PI * 2)
        ctx.fill()
      })
    } else {
      rafId = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(resizeTimer)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas id="field" ref={canvasRef} aria-hidden="true" />
}
