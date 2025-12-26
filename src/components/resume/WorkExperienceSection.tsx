import { Section } from '@/components/layout/Section'
import type { ExperienceSection } from '@/data/types'
import { formatDateRange, toKebabCase } from '@/lib/utils'

interface WorkExperienceSectionProps {
  data: ExperienceSection
}

export function WorkExperienceSection({ data }: WorkExperienceSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <ol className="grid gap-6">
        {data.items.map((item) => (
          <li
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-md dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {data.timelineLabel}
                </div>
                <h3 className="text-[1.2rem] font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm font-medium text-slate-500">{item.company} · {item.location}</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-800/70 dark:text-slate-200">
                <div>{item.period.durationLabel}</div>
                <div className="text-xs font-normal text-slate-500 dark:text-slate-400">
                  {formatDateRange({ start: item.period.start, end: item.period.end })}
                </div>
              </div>
            </div>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-300">{item.summary}</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-300">
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
