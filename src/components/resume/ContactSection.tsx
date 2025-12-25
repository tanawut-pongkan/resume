import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import type { ContactSection as ContactSectionType } from '@/data/types'
import { useToast } from '@/components/ui/use-toast'
import { toKebabCase } from '@/lib/utils'
import type { UiSettingsCopy } from '@/data/types'

interface ContactSectionProps {
  data: ContactSectionType
  uiCopy: UiSettingsCopy['copy']
}

export function ContactSection({ data, uiCopy }: ContactSectionProps) {
  const { notify } = useToast()

  const handleAction = async (action: ContactSectionType['actions'][number]) => {
    if (action.action === 'mailto') {
      window.location.href = `mailto:${action.value}`
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
      } catch (error) {
        notify({
          title: data.label,
          description: uiCopy.error,
          variant: 'warning',
        })
      }
    }
  }

  return (
    <Section id={toKebabCase(data.id)} title={data.label} summary={data.summary}>
      <div className="space-y-6 rounded-none border-l-2 border-accent/70 pl-6">
        <p className="text-lg font-medium text-slate-700 dark:text-slate-200">{data.message}</p>
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
    </Section>
  )
}
