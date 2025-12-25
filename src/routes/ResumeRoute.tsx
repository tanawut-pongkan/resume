import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { TopNav } from '@/components/layout/TopNav'
import { CommandPalette } from '@/components/layout/CommandPalette'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/resume/Hero'
import { PersonalDetailsSection } from '@/components/resume/PersonalDetailsSection'
import { WorkExperienceSection } from '@/components/resume/WorkExperienceSection'
import { InternshipSection } from '@/components/resume/InternshipSection'
import { EducationSection } from '@/components/resume/EducationSection'
import { SkillsSection } from '@/components/resume/SkillsSection'
import { AbilitiesSection } from '@/components/resume/AbilitiesSection'
import { ProjectsSection } from '@/components/resume/ProjectsSection'
import { CertificationsSection } from '@/components/resume/CertificationsSection'
import { AchievementsSection } from '@/components/resume/AchievementsSection'
import { LanguagesSection } from '@/components/resume/LanguagesSection'
import { ContactSection } from '@/components/resume/ContactSection'
import { useResume } from '@/providers/resume-provider'
import { useSettings } from '@/providers/settings-provider'
import { useToast } from '@/components/ui/use-toast'
import { toKebabCase } from '@/lib/utils'

export function ResumeRoute() {
  const { resume, locale, setLocale } = useResume()
  const { toggleTheme, toggleAtsMode, atsMode } = useSettings()
  const { notify } = useToast()
  const location = useLocation()
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
    document.title = resume.meta.title
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (descriptionMeta) {
      descriptionMeta.content = resume.meta.description
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = resume.meta.description
      document.head.appendChild(meta)
    }

    const keywordsMeta = document.querySelector<HTMLMetaElement>('meta[name="keywords"]') ?? document.createElement('meta')
    keywordsMeta.setAttribute('name', 'keywords')
    keywordsMeta.content = resume.meta.keywords.join(', ')
    document.head.appendChild(keywordsMeta)

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]') ?? document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.content = resume.meta.ogTitle
    document.head.appendChild(ogTitle)

    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]') ?? document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.content = resume.meta.ogDescription
    document.head.appendChild(ogDescription)
  }, [resume.meta])

  useEffect(() => {
    const newLocale = location.pathname.replace('/', '')
    if (newLocale && newLocale !== locale && (newLocale === 'th' || newLocale === 'en')) {
      setLocale(newLocale)
    }
  }, [location.pathname, locale, setLocale])

  const handleDownload = () => {
    notify({ title: resume.hero.actions[0]?.label, description: resume.ui.downloadToast.preparing, variant: 'default' })
  }

  const handleContact = (href?: string) => {
    if (href) {
      window.open(href, '_blank')
      return
    }
    const contactSection = document.getElementById(toKebabCase(resume.contact.id))
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <TopNav navItems={resume.nav} onOpenCommandPalette={() => setCommandOpen(true)} />
      <main>
        <Hero hero={resume.hero} onDownload={handleDownload} onContact={handleContact} onPrint={handlePrint} />
        <PersonalDetailsSection data={resume.personal} copy={resume.ui.copy} />
        <WorkExperienceSection data={resume.experience} />
        <InternshipSection data={resume.internships} />
        <EducationSection data={resume.education} />
        <SkillsSection data={resume.skills} />
        <AbilitiesSection data={resume.abilities} />
        <ProjectsSection data={resume.projects} />
        <CertificationsSection data={resume.certifications} />
        <AchievementsSection data={resume.achievements} />
        <LanguagesSection data={resume.languages} />
        <ContactSection data={resume.contact} uiCopy={resume.ui.copy} />
      </main>
      <Footer footer={resume.footer} />
      <CommandPalette
        open={commandOpen}
        onOpenChange={setCommandOpen}
        navItems={resume.nav}
        locale={locale}
        languageOptions={resume.ui.languageToggle.options}
        onLocaleChange={(nextLocale) => {
          if (locale !== nextLocale) {
            setLocale(nextLocale)
            window.history.pushState({}, '', `/${nextLocale}`)
          }
          setCommandOpen(false)
        }}
        onToggleTheme={() => {
          toggleTheme()
          setCommandOpen(false)
        }}
        onToggleAts={() => {
          toggleAtsMode()
          setCommandOpen(false)
        }}
        onPrint={() => {
          handlePrint()
          setCommandOpen(false)
        }}
        isAtsMode={atsMode}
        atsLabels={resume.ui.atsToggle}
        commandLabels={resume.ui.commandPalette}
        themeLabel={resume.ui.themeToggle.label}
      />
    </div>
  )
}
