import { Section } from '@/components/layout/Section'
import type { EducationSection as EducationSectionType } from '@/data/types'
import { toKebabCase } from '@/lib/utils'

interface EducationSectionProps {
  data: EducationSectionType
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className="divide-y divide-slate-200 dark:divide-slate-700">
        {data.items.map((item) => (
          <div key={`${item.school}-${item.degree}`} className="py-6 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.school}</h3>
                <p className="text-sm font-medium text-slate-500">{item.degree}</p>
              </div>
              <span className="text-sm text-slate-500">{item.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
