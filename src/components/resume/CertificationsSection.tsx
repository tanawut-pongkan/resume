import { Section } from '@/components/layout/Section'
import type { CertificationsSection as CertificationsSectionType } from '@/data/types'
import { toKebabCase } from '@/lib/utils'

interface CertificationsSectionProps {
  data: CertificationsSectionType
}

export function CertificationsSection({ data }: CertificationsSectionProps) {
  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <ul className="space-y-4 text-[0.96rem] leading-relaxed">
        {data.items.map((item) => (
          <li key={`${item.name}-${item.issuer}`} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0 dark:border-slate-700">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.issuer}</p>
              </div>
              <span className="text-xs font-medium text-slate-500">{item.year}</span>
            </div>
            {item.credentialId && <p className="mt-1 text-xs text-slate-500">{item.credentialId}</p>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
