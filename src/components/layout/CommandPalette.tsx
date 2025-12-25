import { useEffect } from 'react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import type { Language, NavItem, UiSettingsCopy } from '@/data/types'
import { toKebabCase } from '@/lib/utils'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  navItems: NavItem[]
  locale: Language
  languageOptions: Record<Language, string>
  onLocaleChange: (locale: Language) => void
  onToggleTheme: () => void
  onToggleAts: () => void
  onPrint: () => void
  isAtsMode: boolean
  atsLabels: UiSettingsCopy['atsToggle']
  commandLabels: UiSettingsCopy['commandPalette']
  themeLabel: string
}

export function CommandPalette({
  open,
  onOpenChange,
  navItems,
  locale,
  languageOptions,
  onLocaleChange,
  onToggleTheme,
  onToggleAts,
  onPrint,
  isAtsMode,
  atsLabels,
  commandLabels,
  themeLabel,
}: CommandPaletteProps) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onOpenChange])

  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      onOpenChange(false)
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={commandLabels.placeholder} />
      <CommandList>
        <CommandEmpty>{commandLabels.placeholder}</CommandEmpty>
        <CommandGroup heading={commandLabels.sections.navigation}>
          {navItems.map((item) => (
            <CommandItem key={item.id} value={item.label} onSelect={() => handleNavigate(toKebabCase(item.id))}>
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={commandLabels.sections.utilities}>
          <CommandItem value={commandLabels.print} onSelect={() => onPrint()}>
            {commandLabels.print}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={commandLabels.sections.settings}>
          <CommandItem value={themeLabel} onSelect={() => onToggleTheme()}>
            {themeLabel}
          </CommandItem>
          <CommandItem value={atsLabels.label} onSelect={() => onToggleAts()}>
            {isAtsMode ? atsLabels.ats : atsLabels.standard}
          </CommandItem>
          {Object.entries(languageOptions).map(([key, label]) => (
            <CommandItem key={key} value={label} onSelect={() => onLocaleChange(key as Language)}>
              {locale === key ? `${label} ✓` : label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
