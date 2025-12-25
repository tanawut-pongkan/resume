import { Section } from '@/components/layout/Section'
import type { AchievementsSection as AchievementsSectionType } from '@/data/types'
import { toKebabCase } from '@/lib/utils'

interface AchievementsSectionProps {
  data: AchievementsSectionType
}

export function AchievementsSection({ data }: AchievementsSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <ul className="space-y-4 text-[0.96rem] leading-relaxed">
        {data.items.map((item) => (
          <li key={item.title} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0 dark:border-slate-700">
            <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
            <p className="text-slate-600 dark:text-slate-300">{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
