import { useEffect, useState } from 'react'

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
  if (isTouchDevice) return null

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    let animFrame
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.4,
        y: prev.y + (pos.y - prev.y) * 0.4,
      }))
      animFrame = requestAnimationFrame(animate)
    }
    animFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrame)
  }, [pos])

  if (!visible) return null

  return (
    <>
      {/* Dot — follows cursor exactly */}
      <div style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        width: clicking ? '6px' : '8px',
        height: clicking ? '6px' : '8px',
        background: 'var(--accent)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.1s, height 0.1s',
      }} />

      {/* Ring — trails behind */}
      <div style={{
        position: 'fixed',
        top: trail.y,
        left: trail.x,
        width: hovering ? '48px' : '32px',
        height: hovering ? '48px' : '32px',
        border: `1px solid ${hovering ? 'var(--accent)' : 'rgba(0,255,136,0.4)'}`,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'width 0.2s, height 0.2s, border-color 0.2s',
      }} />
    </>
  )
}

export default Cursor