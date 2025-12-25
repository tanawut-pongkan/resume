import type { ReactNode } from 'react'

import { useSettings } from '@/providers/settings-provider'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'

interface SectionProps {
  id: string
  title: string
  summary: string
  kicker?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, summary, kicker, children, className }: SectionProps) {
  const { atsMode } = useSettings()
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('scroll-mt-24 py-14 md:py-20', atsMode && 'py-12 md:py-16', className)}
    >
      <Container className="space-y-10">
        <header className="max-w-3xl space-y-4">
          {kicker && <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{kicker}</span>}
          <h2 id={`${id}-title`} className="text-3xl font-semibold text-slate-900 dark:text-slate-50 md:text-[30px]">
            {title}
          </h2>
          <p className="text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-300">
            {summary}
          </p>
        </header>
        <div className="space-y-8 text-[0.98rem] leading-relaxed text-slate-700 dark:text-slate-200">
          {children}
        </div>
      </Container>
    </section>
  )
}
