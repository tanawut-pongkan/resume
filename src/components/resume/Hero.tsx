import { ArrowRight, Printer } from 'lucide-react'

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
    <section id="hero" className="scroll-mt-24 bg-white py-16 shadow-[inset_0_-1px_0_rgba(226,232,240,1)] dark:bg-slate-950 dark:shadow-[inset_0_-1px_0_rgba(51,65,85,1)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className={cn('text-xs font-semibold tracking-[0.28em] text-accent', atsMode && 'tracking-[0.2em]')}>{hero.greeting}</span>
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-[42px]">
                {hero.name}
              </h1>
              <p className="text-lg font-medium text-accent dark:text-accent-light">{hero.headline}</p>
              <div className="space-y-3 text-[1rem] leading-relaxed text-slate-600 dark:text-slate-300">
                {hero.summary.map((line) => (
                  <p key={line} className="text-balance">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
              {hero.quickFacts.map((fact) => {
                const Icon = getIcon(fact.icon)
                return (
                  <div key={fact.label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    <div>
                      <dt className="sr-only">{fact.label}</dt>
                      <dd>{fact.value}</dd>
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

          <figure className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 md:h-48 md:w-48">
            <img
              src={hero.photo.src}
              alt={hero.photo.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </Container>
    </section>
  )
}
