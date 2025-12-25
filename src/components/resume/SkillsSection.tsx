import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/layout/Section'
import type { SkillsSection as SkillsSectionType } from '@/data/types'
import { cn, toKebabCase } from '@/lib/utils'
import { useSettings } from '@/providers/settings-provider'

interface SkillsSectionProps {
  data: SkillsSectionType
}

export function SkillsSection({ data }: SkillsSectionProps) {
  const { atsMode } = useSettings()

  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className={cn('rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/85', atsMode && 'border-slate-300 shadow-none')}>
        <div className="space-y-6">
          {data.groups.map((group) => (
            <div key={group.id} className="space-y-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
                  {group.label}
                </h3>
                {group.description ? (
                  <p className="text-xs text-slate-500 dark:text-slate-400">{group.description}</p>
                ) : null}
              </div>
              {group.displayMode === 'list' ? (
                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {group.keywords.map((keyword) => (
                    <li key={keyword} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{keyword}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {group.keywords.map((keyword) => (
                    <Badge key={keyword} variant={atsMode ? 'outline' : 'muted'} className="text-sm font-medium">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
          {data.rawFromPdf.length > 0 && (
            <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50/60 p-4 text-sm text-slate-600 shadow-inner dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                {data.atsNote ?? 'Raw skill lines pulled directly from the PDF:'}
              </p>
              <ul className="mt-2 space-y-1.5">
                {data.rawFromPdf.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
