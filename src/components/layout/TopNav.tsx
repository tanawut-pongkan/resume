import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Command as CommandIcon, Menu, Printer, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useResume } from '@/providers/resume-provider'
import { useSettings } from '@/providers/settings-provider'
import type { NavItem } from '@/data/types'
import { cn, toKebabCase } from '@/lib/utils'
import { Container } from '@/components/layout/Container'

interface TopNavProps {
  navItems: NavItem[]
  onOpenCommandPalette: () => void
}

export function TopNav({ navItems, onOpenCommandPalette }: TopNavProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { locale, setLocale, resume } = useResume()
  const { theme, toggleTheme, atsMode, toggleAtsMode } = useSettings()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const sectionIds = useMemo(() => navItems.map((item) => toKebabCase(item.id)), [navItems])
  const activeSectionId = useActiveSection({ sectionIds })

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  const handleLanguageToggle = (nextLocale: typeof locale) => {
    if (locale === nextLocale) return
    setLocale(nextLocale)
    navigate(`/${nextLocale}`)
  }

  const handlePrint = () => {
    window.print()
  }

  const renderNavLink = (item: NavItem) => {
    const slug = toKebabCase(item.id)
    const isActive = activeSectionId === slug
    return (
      <a
        key={item.id}
        href={`#${slug}`}
        className={cn(
          'relative rounded-full px-3 py-1.5 text-sm text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/70',
          isActive && 'text-slate-900'
        )}
      >
        {item.label}
        {isActive && <span className="absolute inset-x-2 bottom-[0.25rem] h-0.5 rounded-full bg-accent" aria-hidden="true" />}
      </a>
    )
  }

  return (
    <TooltipProvider>
      <header className="print-hidden sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <Container className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-6">
            <Link to={`/${locale}`} className="font-semibold text-slate-900 transition-opacity hover:opacity-80 dark:text-slate-100">
              {resume.hero.name}
            </Link>
            <nav className="hidden items-center gap-2 lg:flex" aria-label="Sections">
              {navItems.map(renderNavLink)}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1 py-0.5 text-xs font-medium shadow-sm dark:border-slate-700 dark:bg-slate-900">
                {Object.entries(resume.ui.languageToggle.options).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleLanguageToggle(key as typeof locale)}
                    className={cn(
                      'rounded-full px-2 py-1 transition-all',
                      locale === key
                        ? 'bg-accent text-white'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={resume.ui.themeToggle.label}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {theme === 'dark' ? resume.ui.themeToggle.light : resume.ui.themeToggle.dark}
                  </button>
                </TooltipTrigger>
                <TooltipContent>{resume.ui.themeToggle.label}</TooltipContent>
              </Tooltip>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{resume.ui.atsToggle.label}</span>
                <Switch checked={atsMode} onCheckedChange={toggleAtsMode} aria-label={resume.ui.atsToggle.description} />
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handlePrint} aria-label={resume.ui.commandPalette.print}>
                    <Printer className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{resume.ui.commandPalette.print}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={onOpenCommandPalette} aria-label={resume.ui.commandPalette.openHint}>
                    <CommandIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{resume.ui.commandPalette.openHint}</TooltipContent>
              </Tooltip>
            </div>

            <Dialog open={isMobileNavOpen} onOpenChange={setMobileNavOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="lg:hidden" size="icon" aria-label="Toggle navigation">
                  {isMobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </DialogTrigger>
              <DialogContent className="lg:hidden">
                <div className="flex flex-col gap-4">
                  <nav className="flex flex-col gap-2" aria-label="Mobile sections">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${toKebabCase(item.id)}`}
                        className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{resume.ui.themeToggle.label}</span>
                      <Button variant="secondary" size="sm" onClick={toggleTheme}>
                        {theme === 'dark' ? resume.ui.themeToggle.light : resume.ui.themeToggle.dark}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{resume.ui.atsToggle.label}</span>
                      <Switch checked={atsMode} onCheckedChange={toggleAtsMode} aria-label={resume.ui.atsToggle.description} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{resume.ui.commandPalette.print}</span>
                      <Button variant="ghost" size="sm" onClick={handlePrint}>
                        <Printer className="mr-2 h-4 w-4" />
                        {resume.ui.commandPalette.print}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{resume.ui.languageToggle.label}</span>
                      <div className="flex items-center gap-1">
                        {Object.entries(resume.ui.languageToggle.options).map(([key, label]) => (
                          <Button
                            key={key}
                            variant={locale === key ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => handleLanguageToggle(key as typeof locale)}
                          >
                            {label}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Button onClick={onOpenCommandPalette} variant="outline">
                      <CommandIcon className="mr-2 h-4 w-4" />
                      {resume.ui.commandPalette.openHint}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Container>
      </header>
    </TooltipProvider>
  )
}
