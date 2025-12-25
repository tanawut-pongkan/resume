import { createContext, useContext, useMemo } from 'react'
import type { PropsWithChildren } from 'react'
import { usePersistentState } from '@/hooks/usePersistentState'
import { resumeByLocale } from '@/data'
import type { Language, ResumeData } from '@/data/types'

interface ResumeContextValue {
  locale: Language
  setLocale: (locale: Language) => void
  resume: ResumeData
  availableLocales: Language[]
}

const ResumeContext = createContext<ResumeContextValue | undefined>(undefined)

export function ResumeProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = usePersistentState<Language>('tanawutp:locale', 'th')

  const value = useMemo(() => {
    const resume = resumeByLocale[locale] ?? resumeByLocale.th
    return {
      locale,
      setLocale,
      resume,
      availableLocales: Object.keys(resumeByLocale) as Language[],
    }
  }, [locale, setLocale])

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider')
  }
  return context
}
