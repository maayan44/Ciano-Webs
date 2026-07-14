import { useState, useEffect } from 'react'

/**
 * Cycles through a list of phrases, animating each one letter by
 * letter as if it were being typed, then pausing, then deleting it
 * before moving on to the next phrase in the list. The cycle repeats
 * forever, looping back to the first phrase once the last one finishes.
 */

export function useTypewriter(phrases, options = {}) {
  const typeSpeed = options.typeSpeed ?? 60
  const deleteSpeed = options.deleteSpeed ?? 30
  const pauseTime = options.pauseTime ?? 2000

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    // Phrase is fully typed, wait before starting to delete it
    if (paused) {
      const timeout = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, pauseTime)
      return () => clearTimeout(timeout)
    }

    // Still typing the current phrase, add the next character
    if (!deleting && displayed.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, typeSpeed)
      return () => clearTimeout(timeout)
    }

    // Just finished typing, move into the paused state
    if (!deleting && displayed.length === current.length) {
      setPaused(true)
      return
    }

    // Deleting the current phrase one character at a time
    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, deleteSpeed)
      return () => clearTimeout(timeout)
    }

    // Fully deleted, move on to the next phrase in the list
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }
  }, [displayed, deleting, paused, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseTime])

  return { displayed, phraseIndex }
}