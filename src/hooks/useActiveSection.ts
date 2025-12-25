import { useEffect, useMemo, useState } from 'react'

interface Options {
  sectionIds: string[]
  rootMargin?: string
}

export function useActiveSection({ sectionIds, rootMargin = '-40% 0px -55% 0px' }: Options) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  const observer = useMemo(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return null
    }

    return new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visibleSections.length) return
        const topMost = visibleSections[0]
        setActiveId(topMost.target.id)
      },
      { root: null, rootMargin, threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] },
    )
  }, [rootMargin])

  useEffect(() => {
    if (!observer) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
    }
  }, [observer, sectionIds])

  return activeId
}
