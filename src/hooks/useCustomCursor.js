import { useState, useEffect } from 'react'

/**
 * Tracks the mouse position, click state, and whether the pointer is
 * currently over an interactive element such as a link or button. Also
 * produces a smoothed trailing position that follows the raw pointer
 * position with a slight delay, used to animate a ring style cursor.
 */

export function useCustomCursor(options = {}) {
  const followSpeed = options.followSpeed ?? 0.4

  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

  // Attaches listeners for pointer movement, clicks, and hover state
  useEffect(() => {
    if (isTouchDevice) return

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseDown = () => setClicking(true)
    const handleMouseUp = () => setClicking(false)
    // Window blur/focus (not document mouseleave/mouseenter) is what reliably tells us the
    // pointer left the browser window — mouseleave also fires when the cursor crosses into a
    // cross-origin iframe (e.g. a live site preview), with no matching mouseenter on the way
    // back out, which would permanently hide the cursor the moment it touched one.
    const handleBlur = () => setVisible(false)
    const handleFocus = () => setVisible(true)
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
    window.addEventListener('blur', handleBlur)
    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleUnhover)
      })
    }
  }, [isTouchDevice])

  // Runs an animation loop that eases the trail position toward the raw position
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