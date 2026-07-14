import { useCustomCursor } from '../hooks/useCustomCursor'

const Cursor = () => {
  const { pos, trail, visible, clicking, hovering, isTouchDevice } = useCustomCursor()

  if (isTouchDevice || !visible) return null

  return (
    <>
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