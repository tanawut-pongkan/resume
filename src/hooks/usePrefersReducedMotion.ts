import { useEffect, useState } from 'react'

export function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setPrefers(query.matches)
    handler()
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return prefers
}
