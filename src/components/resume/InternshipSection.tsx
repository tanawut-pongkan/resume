import { Section } from '@/components/layout/Section'
import type { InternshipSection as InternshipSectionType } from '@/data/types'
import { formatDateRange, toKebabCase } from '@/lib/utils'

interface InternshipSectionProps {
  data: InternshipSectionType
}

export function InternshipSection({ data }: InternshipSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className="divide-y divide-slate-200 dark:divide-slate-700">
        {data.items.map((item) => (
          <article key={`${item.company}-${item.role}`} className="py-8 first:pt-0 last:pb-0">
            <header className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm font-medium text-slate-500">{item.company} · {item.location}</p>
              </div>
              <span className="text-sm text-slate-500">{formatDateRange({ start: item.period.start, end: item.period.end })}</span>
            </header>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-300">{item.summary}</p>
            <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-300">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
