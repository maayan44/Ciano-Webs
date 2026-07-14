import { useState, useEffect } from 'react'

/**
 * Tracks cursor position, click state, and hover-over-interactive-element state,
 * with a smoothed "trailing" position for a lagging cursor ring effect.
 * Automatically disables itself on touch devices.
 * @param {object} [options]
 * @param {number} [options.followSpeed=0.4] - trail lerp factor (0-1, higher = snappier)
 * @returns {{ pos, trail, visible, clicking, hovering, isTouchDevice }}
 */
export function useCustomCursor(options = {}) {
  const { followSpeed = 0.4 } = options

  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

  useEffect(() => {
    if (isTouchDevice) return

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseDown = () => setClicking(true)
    const handleMouseUp = () => setClicking(false)
    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)
    const handleHover = () => setHovering(true)
    const handleUnhover = () => setHovering(false)

    const interactables = document.querySelectorAll('a, button')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleUnhover)
    })

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    document.documentElement.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      document.documentElement.removeEventListener('mouseenter', handleEnter)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleUnhover)
      })
    }
  }, [isTouchDevice])

  useEffect(() => {
    if (isTouchDevice) return
    let animFrame
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * followSpeed,
        y: prev.y + (pos.y - prev.y) * followSpeed,
      }))
      animFrame = requestAnimationFrame(animate)
    }
    animFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrame)
  }, [pos, isTouchDevice, followSpeed])

  return { pos, trail, visible, clicking, hovering, isTouchDevice }
}