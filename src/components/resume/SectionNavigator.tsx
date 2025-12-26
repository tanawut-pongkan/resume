import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import type { NavItem } from '@/data/types'
import { toKebabCase } from '@/lib/utils'

interface SectionNavigatorProps {
  sections: NavItem[]
}

export function SectionNavigator({ sections }: SectionNavigatorProps) {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = useMemo(() => Math.min(3, sections.length), [sections.length])

  const advance = useCallback((delta: number) => {
    setStartIndex((prev) => {
      const next = (prev + delta) % sections.length
      return next < 0 ? sections.length + next : next
    })
  }, [sections.length])

  useEffect(() => {
    const timer = window.setInterval(() => advance(1), 4500)
    return () => window.clearInterval(timer)
  }, [advance])

  const visibleSections = useMemo(
    () => Array.from({ length: visibleCount }, (_, i) => sections[(startIndex + i) % sections.length]),
    [sections, startIndex, visibleCount],
  )

  const handleJump = (id: string) => {
    const target = document.getElementById(toKebabCase(id))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (sections.length === 0) return null

  return (
    <Section id="navigation-preview" title="Section navigator" summary="Slide through sections and jump to any part instantly.">
      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm ring-1 ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Quick tour</p>
            <p className="text-[0.98rem] text-slate-600 dark:text-slate-300">Use the arrows or tap a card to move left or right.</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous section"
              onClick={() => advance(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-x-0.5 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next section"
              onClick={() => advance(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:translate-x-0.5 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleJump(section.id)}
              className="group relative flex flex-col items-start gap-2 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-lg dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Section
              </span>
              <span className="text-lg font-semibold text-slate-900 transition group-hover:text-accent dark:text-slate-100">{section.label}</span>
              <span className="text-sm text-slate-600 dark:text-slate-300">Slide left or right to loop through every section.</span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}
