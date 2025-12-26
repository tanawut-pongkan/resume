import { ArrowRight, Printer, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { HeroContent } from '@/data/types'
import { getIcon } from '@/lib/icons'
import { useSettings } from '@/providers/settings-provider'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'

interface HeroProps {
  hero: HeroContent
  onDownload: () => void
  onContact: (href?: string) => void
  onPrint: () => void
}

export function Hero({ hero, onDownload, onContact, onPrint }: HeroProps) {
  const { atsMode } = useSettings()

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-white py-16 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-accent/15 blur-3xl dark:bg-accent/10" aria-hidden />
        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-sky-400/15 blur-3xl dark:bg-sky-400/10" aria-hidden />
      </div>
      <Container>
        <div
          className={cn(
            'relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-colors dark:border-slate-800 dark:bg-slate-900/70',
            atsMode && 'border-none bg-transparent p-0 shadow-none'
          )}
        >
          <div className="absolute left-8 top-8 hidden h-10 w-10 rounded-2xl bg-gradient-to-br from-accent/20 to-sky-400/30 blur-2xl lg:block" aria-hidden />
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className={cn('text-xs font-semibold tracking-[0.28em] text-accent', atsMode && 'tracking-[0.2em]')}>
                  {hero.greeting}
                </span>
                <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-[42px]">{hero.name}</h1>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.95rem] font-semibold text-accent dark:border-accent/30 dark:bg-accent/15">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium text-accent dark:text-accent-light">{hero.headline}</span>
                </div>
                <div className="grid gap-2 text-[1rem] leading-relaxed text-slate-600 dark:text-slate-300">
                  {hero.summary.map((line) => (
                    <p key={line} className="text-balance">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <dl className="grid gap-3 sm:grid-cols-2">
                {hero.quickFacts.map((fact) => {
                  const Icon = getIcon(fact.icon)
                  return (
                    <div
                      key={fact.label}
                      className={cn(
                        'flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200',
                        atsMode && 'border-none bg-transparent p-0 shadow-none'
                      )}
                    >
                      <div className="rounded-full bg-accent/10 p-2 text-accent">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 font-medium">{fact.value}</dd>
                      </div>
                    </div>
                  )
                })}
              </dl>

              <div className="flex flex-wrap items-center gap-3">
                {hero.actions.map((action) => {
                  const Icon = action.id === 'print' ? Printer : undefined

                  if (action.id === 'download') {
                    return (
                      <Button key={action.id} onClick={onDownload} aria-label={action.ariaLabel}>
                        {action.label}
                      </Button>
                    )
                  }

                  if (action.id === 'print') {
                    return (
                      <Button key={action.id} variant="outline" onClick={onPrint} aria-label={action.ariaLabel}>
                        {Icon && <Icon className="mr-2 h-4 w-4" aria-hidden="true" />}
                        {action.label}
                      </Button>
                    )
                  }

                  if (action.id === 'contact') {
                    return (
                      <Button key={action.id} variant="ghost" onClick={() => onContact(action.href)} aria-label={action.ariaLabel}>
                        {action.label}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    )
                  }

                  return null
              })}
            </div>

            <TooltipProvider>
                <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-300">
                  {hero.socials.map((social) => {
                    const Icon = getIcon(social.icon)
                    return (
                      <Tooltip key={social.id}>
                        <TooltipTrigger asChild>
                          <Button asChild variant="ghost" size="icon" aria-label={social.ariaLabel}>
                            <a href={social.url} target="_blank" rel="noreferrer">
                              <Icon className="h-5 w-5" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{social.label}</TooltipContent>
                      </Tooltip>
                    )
                  })}
                </div>
              </TooltipProvider>
            </div>

            <aside className="space-y-4">
              <figure
                className={cn(
                  'mx-auto max-w-xs overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-lg dark:border-slate-800 dark:bg-slate-900',
                  atsMode && 'border-none bg-transparent shadow-none'
                )}
              >
                <img src={hero.photo.src} alt={hero.photo.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
              <div
                className={cn(
                  'rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white/80 via-white/60 to-slate-50/70 px-5 py-4 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/70 dark:to-slate-900/60 dark:text-slate-200',
                  atsMode && 'border-none bg-transparent p-0 shadow-none'
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</p>
                <p className="mt-2 text-balance text-[0.98rem] leading-relaxed">
                  {hero.about ?? hero.summary.join(' ')}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  )
}
