export type Language = 'th' | 'en'

export type SectionId =
  | 'hero'
  | 'personal'
  | 'experience'
  | 'internships'
  | 'education'
  | 'skills'
  | 'abilities'
  | 'projects'
  | 'certifications'
  | 'achievements'
  | 'languages'
  | 'contact'

export interface NavItem {
  id: SectionId
  label: string
}

export interface QuickFact {
  label: string
  value: string
  icon: string
}

export interface HeroAction {
  id: 'download' | 'print' | 'contact'
  label: string
  ariaLabel: string
  variant: 'primary' | 'secondary' | 'ghost'
  href?: string
}

export interface SocialLink {
  id: string
  label: string
  ariaLabel: string
  url: string
  icon: string
}

export interface HeroContent {
  greeting: string
  name: string
  headline: string
  summary: string[]
  about?: string
  quickFacts: QuickFact[]
  actions: HeroAction[]
  socials: SocialLink[]
  photo: {
    src: string
    alt: string
  }
}

export interface ContactChannel {
  label: string
  value: string
  href?: string
  icon: string
  copyHint: string
  copiedToast: string
}

export interface PersonalDetailsSection {
  id: SectionId
  label: string
  summary: string
  address: string
  contacts: ContactChannel[]
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: {
    start: string
    end?: string
    durationLabel: string
  }
  summary: string
  achievements: string[]
  tech: string[]
}

export interface ExperienceSection {
  id: SectionId
  label: string
  summary: string
  timelineLabel: string
  items: ExperienceItem[]
}

export interface InternshipSection {
  id: SectionId
  label: string
  summary: string
  items: ExperienceItem[]
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  highlights: string[]
}

export interface EducationSection {
  id: SectionId
  label: string
  summary: string
  items: EducationItem[]
}

export type SkillGroupId =
  | 'coreKeywords'
  | 'projectManagement'
  | 'technical'
  | 'dataAnalyticsAutomation'
  | 'cloudApiIntegration'
  | 'leadershipSoftSkills'
  | 'toolsPlatforms'

export type SkillGroupDisplayMode = 'badges' | 'list'

export interface SkillGroup {
  id: SkillGroupId
  label: string
  description?: string
  keywords: string[]
  displayMode?: SkillGroupDisplayMode
}

export interface SkillsSection {
  id: SectionId
  label: string
  summary: string
  groups: SkillGroup[]
  rawFromPdf: string[]
  atsNote?: string
}

export interface AbilityItem {
  title: string
  summary: string
  bullets: string[]
}

export interface AbilitiesSection {
  id: SectionId
  label: string
  summary: string
  items: AbilityItem[]
}

export interface ProjectItem {
  name: string
  role: string
  summary: string
  impact: string
  highlights?: string[]
  stack: string[]
  link?: {
    label: string
    url: string
  }
}

export interface ProjectsSection {
  id: SectionId
  label: string
  summary: string
  items: ProjectItem[]
}

export interface CertificationItem {
  name: string
  issuer: string
  year: string
  credentialId?: string
}

export interface CertificationsSection {
  id: SectionId
  label: string
  summary: string
  items: CertificationItem[]
}

export interface AchievementItem {
  title: string
  detail: string
}

export interface AchievementsSection {
  id: SectionId
  label: string
  summary: string
  items: AchievementItem[]
}

export interface LanguageItem {
  name: string
  proficiency: string
}

export interface LanguagesSection {
  id: SectionId
  label: string
  summary: string
  items: LanguageItem[]
}

export interface ContactAction {
  label: string
  action: 'mailto' | 'copy' | 'link'
  value: string
  successMessage?: string
}

export interface ContactSection {
  id: SectionId
  label: string
  summary: string
  message: string
  address: string
  channels: ContactChannel[]
  actions: ContactAction[]
}

export interface FooterContent {
  lastUpdatedLabel: string
  lastUpdatedValue: string
  copyright: string
}

export interface UiSettingsCopy {
  languageToggle: {
    label: string
    options: Record<Language, string>
  }
  themeToggle: {
    label: string
    light: string
    dark: string
  }
  atsToggle: {
    label: string
    standard: string
    ats: string
    description: string
  }
  commandPalette: {
    openHint: string
    placeholder: string
    sections: {
      navigation: string
      utilities: string
      settings: string
    }
    print: string
  }
  downloadToast: {
    preparing: string
  }
  copy: {
    success: string
    error: string
  }
  sidebar: {
    quickFacts: string
    contact: string
  }
}

export interface ResumeMeta {
  locale: Language
  title: string
  description: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
}

export interface ResumeData {
  meta: ResumeMeta
  nav: NavItem[]
  hero: HeroContent
  personal: PersonalDetailsSection
  experience: ExperienceSection
  internships: InternshipSection
  education: EducationSection
  skills: SkillsSection
  abilities: AbilitiesSection
  projects: ProjectsSection
  certifications: CertificationsSection
  achievements: AchievementsSection
  languages: LanguagesSection
  contact: ContactSection
  footer: FooterContent
  ui: UiSettingsCopy
}

export interface ResumeBundle {
  locale: Language
  data: ResumeData
}
