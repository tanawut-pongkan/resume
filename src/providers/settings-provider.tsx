import { createContext, useContext, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { usePersistentState } from '@/hooks/usePersistentState'

type ThemeMode = 'light' | 'dark'

interface SettingsContextValue {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
  atsMode: boolean
  toggleAtsMode: () => void
}

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined)

const prefersDark = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function SettingsProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = usePersistentState<ThemeMode>(
    'tanawutp:theme',
    prefersDark() ? 'dark' : 'light',
  )
  const [atsMode, setAtsMode] = usePersistentState<boolean>('tanawutp:ats-mode', false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const body = document.body
    body.classList.toggle('ats-mode', atsMode)
  }, [atsMode])

  const setTheme = (mode: ThemeMode) => setThemeState(mode)
  const toggleTheme = () => setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  const toggleAtsMode = () => setAtsMode((prev) => !prev)

  return (
    <SettingsContext.Provider value={{ theme, setTheme, toggleTheme, atsMode, toggleAtsMode }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }
  return context
}
