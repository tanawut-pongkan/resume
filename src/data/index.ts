import { resumeEn } from './resume.en'
import { resumeTh } from './resume.th'
import type { Language, ResumeData } from './types'

export const resumeByLocale: Record<Language, ResumeData> = {
  th: resumeTh,
  en: resumeEn,
}
