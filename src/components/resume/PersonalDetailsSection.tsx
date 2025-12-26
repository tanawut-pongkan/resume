import { Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import type { PersonalDetailsSection as PersonalDetailsSectionType, UiSettingsCopy } from '@/data/types'
import { useToast } from '@/components/ui/use-toast'
import { getIcon } from '@/lib/icons'
import { toKebabCase } from '@/lib/utils'

interface PersonalDetailsSectionProps {
  data: PersonalDetailsSectionType
  copy: UiSettingsCopy['copy']
}

export function PersonalDetailsSection({ data, copy }: PersonalDetailsSectionProps) {
  const { notify } = useToast()

  const handleCopy = async (value: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(value)
      notify({ title: data.label, description: successMessage, variant: 'success' })
    } catch {
      notify({ title: data.label, description: copy.error, variant: 'warning' })
    }
  }

  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className="grid gap-6 md:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
        <p className="text-[1rem] leading-relaxed text-slate-600 dark:text-slate-300">{data.address}</p>
        <dl className="grid gap-4 text-[0.96rem] leading-relaxed">
          {data.contacts.map((contact) => {
            const Icon = getIcon(contact.icon)
            return (
              <div key={contact.label} className="flex flex-col gap-1 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0 dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <dt>{contact.label}</dt>
                </div>
                <dd className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  {contact.href ? (
                    <a href={contact.href} className="text-accent underline-offset-4 hover:underline">
                      {contact.value}
                    </a>
                  ) : (
                    contact.value
                  )}
                  <Button variant="ghost" size="icon" aria-label={contact.copyHint} onClick={() => handleCopy(contact.value, contact.copiedToast)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </Section>
  )
}
