import { Section } from '@/components/layout/Section'
import type { LanguagesSection as LanguagesSectionType } from '@/data/types'
import { toKebabCase } from '@/lib/utils'

interface LanguagesSectionProps {
  data: LanguagesSectionType
}

export function LanguagesSection({ data }: LanguagesSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <ul className="space-y-3 text-[0.96rem] leading-relaxed">
        {data.items.map((lang) => (
          <li key={lang.name} className="flex flex-col gap-1 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0 dark:border-slate-700">
            <span className="font-semibold text-slate-900 dark:text-white">{lang.name}</span>
            <span className="text-slate-600 dark:text-slate-300">{lang.proficiency}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
