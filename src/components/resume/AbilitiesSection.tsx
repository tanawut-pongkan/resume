import { Section } from '@/components/layout/Section'
import type { AbilitiesSection as AbilitiesSectionType } from '@/data/types'
import { toKebabCase } from '@/lib/utils'

interface AbilitiesSectionProps {
  data: AbilitiesSectionType
}

export function AbilitiesSection({ data }: AbilitiesSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className="grid gap-6 md:grid-cols-2">
        {data.items.map((item) => (
          <article key={item.title} className="space-y-3 border-l-2 border-accent/70 pl-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-300">{item.summary}</p>
            <ul className="space-y-1.5 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
