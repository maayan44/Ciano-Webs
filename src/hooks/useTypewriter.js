import { useState, useEffect } from 'react'

/**
 * Cycles through an array of phrases with a typing/pausing/deleting animation.
 * @param {string[]} phrases - phrases to type out in sequence
 * @param {object} [options]
 * @param {number} [options.typeSpeed=60] - ms per character while typing
 * @param {number} [options.deleteSpeed=30] - ms per character while deleting
 * @param {number} [options.pauseTime=2000] - ms to pause after a phrase is fully typed
 * @returns {{ displayed: string, phraseIndex: number }}
 */
export function useTypewriter(phrases, options = {}) {
  const { typeSpeed = 60, deleteSpeed = 30, pauseTime = 2000 } = options

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (paused) {
      const timeout = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, pauseTime)
      return () => clearTimeout(timeout)
    }

    if (!deleting && displayed.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, typeSpeed)
      return () => clearTimeout(timeout)
    }

    if (!deleting && displayed.length === current.length) {
      setPaused(true)
      return
    }

    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, deleteSpeed)
      return () => clearTimeout(timeout)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }
  }, [displayed, deleting, paused, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseTime])

  return { displayed, phraseIndex }
}