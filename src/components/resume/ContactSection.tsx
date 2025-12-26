import { Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import type { ContactSection as ContactSectionType } from '@/data/types'
import { useToast } from '@/components/ui/use-toast'
import { toKebabCase } from '@/lib/utils'
import type { UiSettingsCopy } from '@/data/types'
import { getIcon } from '@/lib/icons'

interface ContactSectionProps {
  data: ContactSectionType
  uiCopy: UiSettingsCopy['copy']
}

export function ContactSection({ data, uiCopy }: ContactSectionProps) {
  const { notify } = useToast()

  const handleAction = async (action: ContactSectionType['actions'][number]) => {
    if (action.action === 'mailto') {
      window.open(`mailto:${action.value}`, '_self')
      return
    }

    if (action.action === 'link') {
      window.open(action.value, '_blank')
      return
    }

    if (action.action === 'copy') {
      try {
        await navigator.clipboard.writeText(action.value)
        notify({
          title: data.label,
          description: action.successMessage ?? uiCopy.success,
          variant: 'success',
        })
      } catch {
        notify({
          title: data.label,
          description: uiCopy.error,
          variant: 'warning',
        })
      }
    }
  }

  const handleCopyChannel = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      notify({ title: data.label, description: label, variant: 'success' })
    } catch {
      notify({ title: data.label, description: uiCopy.error, variant: 'warning' })
    }
  }

  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm ring-1 ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">{data.message}</p>
          <p className="text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-300">{data.address}</p>
          <dl className="divide-y divide-slate-200 dark:divide-slate-800">
            {data.channels.map((channel) => {
              const Icon = getIcon(channel.icon)
              return (
                <div key={channel.label} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    <div>
                      <div className="text-sm font-semibold">{channel.label}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{channel.value}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {channel.href && (
                      <a
                        href={channel.href}
                        className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open
                      </a>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={channel.copyHint}
                      onClick={() => handleCopyChannel(channel.value, channel.copiedToast)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </dl>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-white to-white p-5 shadow-sm ring-1 ring-accent/10 dark:from-accent/15 dark:via-slate-900 dark:to-slate-900">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Quick actions</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Tap to email, copy phone, or open preferred channels.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.actions.map((action) => (
              <Button
                key={action.label}
                variant={action.action === 'copy' ? 'outline' : 'primary'}
                onClick={() => handleAction(action)}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
