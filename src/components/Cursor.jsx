import { useCustomCursor } from '../hooks/useCustomCursor'

/**
 * Cursor
 *
 * Renders a custom animated cursor made of two parts: a small dot that
 * follows the mouse instantly, and a larger ring that trails behind it
 * with a smoothing effect. The ring grows when hovering over an
 * interactive element like a link or button.
 *
 * This component renders nothing on touch devices, since there is no
 * mouse pointer to track.
 *
 * All rendered elements are purely decorative and carry no semantic
 * meaning, so they are marked with aria hidden to keep them invisible
 * to assistive technology such as screen readers.
 */

const Cursor = () => {
  const { pos, trail, visible, clicking, hovering, isTouchDevice } = useCustomCursor()

  if (isTouchDevice || !visible) return null

  return (
    <>
      {/* Small dot that tracks the raw mouse position */}
      <div
        aria-hidden="true"
        style={{
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
        }}
      />

      {/* Larger ring that trails behind the dot and expands on hover */}
      <div
        aria-hidden="true"
        style={{
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
        }}
      />
    </>
  )
}

export default Cursor