import { Section } from '@/components/layout/Section'
import type { ExperienceSection } from '@/data/types'
import { formatDateRange, toKebabCase } from '@/lib/utils'

interface WorkExperienceSectionProps {
  data: ExperienceSection
}

export function WorkExperienceSection({ data }: WorkExperienceSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <ol className="divide-y divide-slate-200 dark:divide-slate-700">
        {data.items.map((item) => (
          <li key={`${item.company}-${item.role}`} className="py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <h3 className="text-[1.25rem] font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm font-medium text-slate-500">{item.company} · {item.location}</p>
              </div>
              <div className="text-sm text-slate-500">
                <span className="font-medium text-slate-600 dark:text-slate-300">{item.period.durationLabel}</span>
                <div>{formatDateRange({ start: item.period.start, end: item.period.end })}</div>
              </div>
            </div>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-300">{item.summary}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">{data.timelineLabel}</p>
            <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-300">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
              {item.tech.slice(0, 6).map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
