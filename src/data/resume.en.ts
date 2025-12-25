import profileImage from '@/assets/profile.svg'
import type { ResumeData } from './types'

export const resumeEn: ResumeData = {
  meta: {
    locale: 'en',
    title: 'Tanawut Prasertkun · Principal Frontend Engineer & Design Systems Lead',
    description:
      'Principal Frontend Engineer specialising in enterprise UI, design systems, and bilingual product delivery across complex organisations.',
    keywords: [
      'Principal Frontend Engineer',
      'Design Systems Lead',
      'Enterprise UI',
      'Tanawut Prasertkun',
      'Resume',
    ],
    ogTitle: 'Tanawut Prasertkun · Principal Frontend Engineer',
    ogDescription:
      'Enterprise-focused frontend leader delivering resilient design systems, ATS-safe resumes, and bilingual stakeholder experiences.',
  },
  nav: [
    { id: 'personal', label: 'Personal Details' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'internships', label: 'Internship' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'abilities', label: 'Strengths' },
    { id: 'projects', label: 'Key Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'languages', label: 'Languages' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    greeting: 'Enterprise Frontend Leader',
    name: 'Tanawut Prasertkun',
    headline: 'Principal Frontend Engineer & Design Systems Lead',
    summary: [
      'Orchestrates multi-market design systems that keep complex product suites consistent, accessible, and measurable.',
      'Balances delivery pace with governance—translating executive goals into modular UI foundations used by 18+ product squads.',
    ],
    quickFacts: [
      { label: 'Base', value: 'Bangkok · Hybrid', icon: 'location' },
      { label: 'Experience', value: '11 yrs (Lead 5+ yrs)', icon: 'calendar' },
      { label: 'Focus', value: 'Enterprise UI Platforms & DX', icon: 'briefcase' },
    ],
    photo: {
      src: profileImage,
      alt: 'Portrait of Tanawut Prasertkun smiling in a navy blazer',
    },
    actions: [
      {
        id: 'download',
        label: 'Download CV (PDF)',
        ariaLabel: 'Download Tanawut CV as PDF',
        variant: 'primary',
      },
      {
        id: 'print',
        label: 'Print / Save as PDF',
        ariaLabel: 'Open print dialog',
        variant: 'secondary',
      },
      {
        id: 'contact',
        label: 'Contact Tanawut',
        ariaLabel: 'Jump to contact section',
        variant: 'ghost',
        href: 'mailto:tanawut.pr@example.com',
      },
    ],
    socials: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        ariaLabel: 'Open LinkedIn profile',
        url: 'https://www.linkedin.com/in/tanawutp',
        icon: 'linkedin',
      },
      {
        id: 'github',
        label: 'GitHub',
        ariaLabel: 'Open GitHub profile',
        url: 'https://github.com/tanawutp',
        icon: 'github',
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        ariaLabel: 'Open portfolio site',
        url: 'https://portfolio.tanawut.dev',
        icon: 'globe',
      },
    ],
  },
  personal: {
    id: 'personal',
    label: 'Personal Details',
    summary: 'Based in Bangkok with APAC travel coverage. Available for enterprise-grade hybrid engagements.',
    address: 'Bangkok, Thailand · Willing to travel across APAC · Time zone GMT+7',
    contacts: [
      {
        label: 'Email',
        value: 'tanawut.pr@example.com',
        href: 'mailto:tanawut.pr@example.com',
        icon: 'mail',
        copyHint: 'Copy email',
        copiedToast: 'Email copied to clipboard',
      },
      {
        label: 'Phone',
        value: '+66 81 234 5678',
        href: 'tel:+66812345678',
        icon: 'phone',
        copyHint: 'Copy phone number',
        copiedToast: 'Phone number copied',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/tanawutp',
        href: 'https://www.linkedin.com/in/tanawutp',
        icon: 'linkedin',
        copyHint: 'Copy LinkedIn URL',
        copiedToast: 'LinkedIn URL copied',
      },
      {
        label: 'GitHub',
        value: 'github.com/tanawutp',
        href: 'https://github.com/tanawutp',
        icon: 'github',
        copyHint: 'Copy GitHub URL',
        copiedToast: 'GitHub URL copied',
      },
    ],
  },
  experience: {
    id: 'experience',
    label: 'Work Experience',
    summary: 'Leads multi-squad frontend transformations for regulated enterprises, aligning design systems with measurable delivery outcomes.',
    timelineLabel: 'Key achievements',
    items: [
      {
        company: 'Apex One Digital Platform',
        role: 'Principal Frontend Engineer & Design Systems Lead',
        location: 'Bangkok · Hybrid',
        period: {
          start: '2021',
          end: undefined,
          durationLabel: '3 yrs 6 mos',
        },
        summary: 'Scaled a bilingual design system across 18 product squads covering wealth, insurance, and operations portals.',
        achievements: [
          'Reduced UI delivery cycle by 42% by codifying 160+ tokens and 48 audited components with versioned governance.',
          'Improved accessibility compliance from 58% to 93% AA in 9 months through review playbooks and automated linting.',
          'Cut incident regressions by 37% via controlled rollout pipeline, visual regression packs, and stakeholder scorecards.',
          'Negotiated roadmap alignment with CTO, Product, and Compliance to secure quarterly adoption targets and dedicated headcount.',
        ],
        tech: ['React', 'TypeScript', 'Vite', 'Storybook', 'Tailwind', 'Playwright', 'i18next'],
      },
      {
        company: 'Siam Horizon Bank (Contract)',
        role: 'Lead Frontend Architect',
        location: 'Bangkok · Hybrid',
        period: {
          start: '2018',
          end: '2021',
          durationLabel: '3 yrs',
        },
        summary: 'Replatformed retail banking UI stack with emphasis on reliability, modular analytics, and regulatory audit trails.',
        achievements: [
          'Delivered omnichannel component library adopted by 12 squads; reduced duplicated code by 68% within first release cycle.',
          'Established zero-downtime deployment strategy with feature flags, resulting in 99.95% uptime across quarterly releases.',
          'Mentored 14 engineers and designers through pairing clinics, raising internal proficiency scores by 1.5 grades in 2 quarters.',
        ],
        tech: ['React', 'GraphQL', 'NX', 'Styled System', 'Jest', 'Cypress'],
      },
      {
        company: 'BlueOrbit Solutions',
        role: 'Senior Frontend Engineer',
        location: 'Singapore · Onsite',
        period: {
          start: '2014',
          end: '2018',
          durationLabel: '4 yrs',
        },
        summary: 'Delivered enterprise analytics surfaces and executive dashboards for manufacturing and logistics clients across SEA.',
        achievements: [
          'Accelerated proposal-to-delivery lead time by 28% by introducing templated UI kits and domain-specific starter repos.',
          'Partnered with solution architects to create KPI storytelling frameworks adopted in 45+ executive reviews.',
          'Implemented performance budgets and instrumentation, cutting dashboard load time from 6.8s to 2.3s on average networks.',
        ],
        tech: ['Angular', 'D3.js', 'RxJS', 'Sass', 'Webpack'],
      },
    ],
  },
  internships: {
    id: 'internships',
    label: 'Internship Experience',
    summary: 'Built solid delivery fundamentals through early exposure to product analytics and iterative shipping.',
    items: [
      {
        company: 'Skyline Tech Ventures',
        role: 'Product Engineering Intern',
        location: 'Bangkok',
        period: {
          start: '2013',
          end: '2014',
          durationLabel: '12 mos',
        },
        summary: 'Supported product managers with prototypes and release readiness across mobile onboarding journeys.',
        achievements: [
          'Delivered bilingual onboarding flow that lifted completion rate by 19% in A/B tests within two release sprints.',
          'Instrumented analytics dashboards for funnel tracking, cutting manual reporting effort from 6 hrs to under 1 hr weekly.',
        ],
        tech: ['Backbone.js', 'LESS', 'Google Analytics'],
      },
    ],
  },
  education: {
    id: 'education',
    label: 'Education',
    summary: 'Engineering foundation reinforced with product leadership and analytics coursework.',
    items: [
      {
        school: 'King Mongkut’s Institute of Technology Ladkrabang',
        degree: 'B.Eng. Computer Engineering (First Class Honors)',
        period: '2010 – 2014',
        highlights: [
          'Capstone on responsive middleware for manufacturing dashboards; deployed to 3 pilot factories.',
          'Led technology club delivering student mentoring program adopted by 200+ participants each semester.',
        ],
      },
      {
        school: 'National University of Singapore (Exchange)',
        degree: 'Product Leadership & Service Design Modules',
        period: '2012 – 2013',
        highlights: ['Collaborated with cross-discipline teams to prototype governance dashboards for smart city pilots.'],
      },
    ],
  },
  skills: {
    id: 'skills',
    label: 'Skills',
    summary: 'ATS-normalised keyword clusters extracted directly from the PDF resume to match automated screening systems.',
    groups: [
      {
        id: 'coreKeywords',
        label: 'Core Keywords',
        description: 'Primary leadership and delivery keywords repeated across the CV.',
        keywords: [
          'Agile',
          'Scrum',
          'IT Strategy',
          'Procurement',
          'Risk Management',
          'Software Development',
          'C#',
          'ASP.NET',
          'SQL',
          'React',
          'Vue.js',
          'Docker',
          'Data Analytics',
          'Automation',
          'Cloud Computing',
          'API Integration',
          'Leadership',
          'Stakeholder Communication',
        ],
      },
      {
        id: 'projectManagement',
        label: 'Project & Delivery Management',
        description: 'Governance and planning tools explicitly mentioned for programme execution.',
        keywords: ['Agile', 'Scrum', 'IT Strategy', 'Procurement', 'Risk Management', 'ClickUp', 'Jira', 'Trello'],
      },
      {
        id: 'technical',
        label: 'Technical Stack',
        description: 'Engineering stack cited for solution delivery in the PDF.',
        keywords: ['Software Development', 'C#', 'ASP.NET', 'SQL', 'React', 'Vue.js', 'Docker'],
      },
      {
        id: 'dataAnalyticsAutomation',
        label: 'Data Analytics & Automation',
        description: 'Analytics and automation tooling captured verbatim.',
        keywords: ['Data Analytics', 'Automation', 'Looker Studio'],
      },
      {
        id: 'cloudApiIntegration',
        label: 'Cloud & API Integration',
        description: 'Cloud and integration capabilities referenced in the skills section.',
        keywords: ['Cloud Computing', 'API Integration'],
      },
      {
        id: 'leadershipSoftSkills',
        label: 'Leadership & Soft Skills',
        description: 'People and stakeholder skills preserved verbatim for ATS scanning.',
        displayMode: 'list',
        keywords: ['Leadership', 'Problem-Solving', 'Stakeholder Communication'],
      },
      {
        id: 'toolsPlatforms',
        label: 'Tools & Platforms',
        description: 'Supporting delivery and reporting platforms noted in the PDF.',
        keywords: ['ClickUp', 'Jira', 'Trello', 'Looker Studio'],
      },
    ],
    rawFromPdf: [
      'Agile & Scrum (ClickUp, Jira, Trello)',
      'IT Strategy, Procurement & Risk Management',
      'Software Development (C#, ASP.NET, SQL, React, Vue.js, Docker)',
      'Data Analytics & Automation (Looker Studio)',
      'Cloud Computing & API Integration',
      'Leadership, Problem-Solving & Stakeholder Communication',
    ],
    atsNote: 'Terms lifted verbatim from Modern Professional CV Resume.pdf (Skills section).',
  },
  abilities: {
    id: 'abilities',
    label: 'Strengths',
    summary: 'Known for translating ambiguous enterprise objectives into structured, measurable delivery programs.',
    items: [
      {
        title: 'Design System Governance',
        summary: 'Builds sustainable component ecosystems with measurable adoption checkpoints.',
        bullets: [
          'Set up scorecards tracking coverage, usage depth, and accessibility debt every sprint.',
          'Balances autonomy with guardrails through opt-in RFC templates adopted by 18 squads.',
        ],
      },
      {
        title: 'Stakeholder Alignment',
        summary: 'Connects executives, design, and engineering to ship responsibly without slowing delivery.',
        bullets: [
          'Facilitated quarterly steering reviews converting strategic OKRs into backlog-ready initiatives.',
          'Translates compliance requirements into reusable acceptance criteria reducing review time by 35%.',
        ],
      },
      {
        title: 'Team Enablement',
        summary: 'Coaches squads to own quality metrics and deliver resilient releases.',
        bullets: [
          'Launched pairing clinics raising frontend competency rubric from 2.8 to 4.1 within 2 quarters.',
          'Introduced engineering onboarding playbooks cutting ramp time for new hires by 45%.',
        ],
      },
      {
        title: 'Problem Framing',
        summary: 'Transforms vague requests into sequenced iterations with data-backed decision points.',
        bullets: [
          'Designed experiment backlog increasing validated learning velocity from monthly to fortnightly.',
          'Applied service blueprints to uncover 3 hidden blockers, recovering 12% of lost capacity.',
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    label: 'Key Projects',
    summary: 'Selected initiatives showcasing enterprise-grade design system thinking and measurable outcomes.',
    items: [
      {
        name: 'Atlas Design Platform',
        role: 'Design Systems Lead',
        summary: 'Unified token system and component API for wealth, insurance, and operations portals.',
        impact: 'Reduced rework tickets by 37% and accelerated release cadence from quarterly to bi-monthly.',
        highlights: [
          'Codified 160+ design tokens and 48 governed components with adoption scorecards.',
          'Partnered with 18 squads to migrate critical journeys without regression incidents.',
        ],
        stack: ['React', 'Vite', 'Storybook', 'Figma Tokens'],
        link: {
          label: 'Case overview',
          url: 'https://portfolio.tanawut.dev/projects/atlas',
        },
      },
      {
        name: 'RegentBank CX Suite',
        role: 'Lead Frontend Architect',
        summary: 'Modernised retail banking touch points with audit-ready UI workflows and analytics.',
        impact: 'Net promoter score improved by 11pts after rollout, while support tickets dropped 24%.',
        highlights: [
          'Re-platformed 12 customer journeys with traceable approvals and analytics instrumentation.',
          'Established feature-flag strategy enabling zero-downtime launches across regions.',
        ],
        stack: ['React', 'GraphQL', 'LaunchDarkly', 'Cypress'],
      },
      {
        name: 'Nimbus Fleet Analytics',
        role: 'Senior Frontend Engineer',
        summary: 'Delivered real-time logistics dashboards for APAC operations teams.',
        impact: 'Improved dispatch accuracy by 18% through KPI visualisation and alerting workflows.',
        highlights: [
          'Integrated live telematics feeds with predictive ETA modelling for dispatchers.',
          'Introduced alerting workflows that cut manual exception handling by 28%.',
        ],
        stack: ['Angular', 'D3.js', 'RxJS'],
      },
      {
        name: 'Command Palette Framework',
        role: 'Principal Engineer',
        summary: 'Created accessible command palette experience embedded across enterprise tooling.',
        impact: 'Cut navigation time by 32% for high frequency operators and lifted task completion CSAT.',
        highlights: [
          'Designed accessible keyboard-first patterns rolled into the internal design system.',
          'Measured 32% faster navigation for power users and +0.6 CSAT uplift post launch.',
        ],
        stack: ['React', 'cmdk', 'Radix UI'],
      },
    ],
  },
  certifications: {
    id: 'certifications',
    label: 'Certifications',
    summary: 'Formal recognitions strengthening governance, accessibility, and leadership practices.',
    items: [
      {
        name: 'Certified Professional in Accessibility Core Competencies (CPACC)',
        issuer: 'IAAP',
        year: '2024',
      },
      {
        name: 'Azure Architect Technologies',
        issuer: 'Microsoft',
        year: '2023',
      },
      {
        name: 'Professional Scrum Product Owner II',
        issuer: 'Scrum.org',
        year: '2022',
      },
    ],
  },
  achievements: {
    id: 'achievements',
    label: 'Achievements',
    summary: 'Highlights of measurable impact and recognition across recent delivery cycles.',
    items: [
      {
        title: 'Enterprise Design Impact Award · 2024',
        detail: 'Recognised for instituting a design system adoption rubric adopted by 18 squads within 2 quarters.',
      },
      {
        title: 'Speaker · APAC DesignOps Summit 2023',
        detail: 'Shared playbook for bilingual design system rollouts with 400+ design and engineering leaders.',
      },
      {
        title: 'Patent Pending · Adaptive Layout Token Sync',
        detail: 'Co-authored patent for synchronising responsive tokens between Figma and production pipelines.',
      },
    ],
  },
  languages: {
    id: 'languages',
    label: 'Languages',
    summary: 'Comfortable leading discussions, negotiations, and documentation in both Thai and English.',
    items: [
      { name: 'Thai', proficiency: 'Native · Professional leadership communications' },
      { name: 'English', proficiency: 'Full professional proficiency · Cross-regional facilitation' },
      { name: 'Mandarin Chinese', proficiency: 'Working proficiency · Stakeholder workshops' },
    ],
  },
  contact: {
    id: 'contact',
    label: 'Contact',
    summary: 'Let’s connect on how to accelerate enterprise UI outcomes while keeping governance intact.',
    message: 'Ready to partner on complex enterprise UI, design systems, or platform enablement mandates.',
    actions: [
      {
        label: 'Email Tanawut',
        action: 'mailto',
        value: 'tanawut.pr@example.com',
        successMessage: 'Drafting email…',
      },
      {
        label: 'Copy phone',
        action: 'copy',
        value: '+66812345678',
        successMessage: 'Phone copied—feel free to call during 09:00-18:00 GMT+7.',
      },
      {
        label: 'Book intro (Calendly)',
        action: 'link',
        value: 'https://cal.com/tanawutp/intro',
      },
    ],
  },
  footer: {
    lastUpdatedLabel: 'Last updated:',
    lastUpdatedValue: 'December 2025',
    copyright: '© 2025 Tanawut Prasertkun. All rights reserved.',
  },
  ui: {
    languageToggle: {
      label: 'Language',
      options: {
        th: 'TH',
        en: 'EN',
      },
    },
    themeToggle: {
      label: 'Theme',
      light: 'Light',
      dark: 'Dark',
    },
    atsToggle: {
      label: 'Mode',
      standard: 'Standard UI',
      ats: 'ATS Safe',
      description: 'Toggle ATS-friendly presentation',
    },
    commandPalette: {
      openHint: 'Command palette (Ctrl+K)',
      placeholder: 'Search sections, settings, or actions…',
      sections: {
        navigation: 'Navigate',
        utilities: 'Utilities',
        settings: 'Settings',
      },
      print: 'Print resume',
    },
    downloadToast: {
      preparing: 'Preparing PDF export. Use browser print to export immediately.',
    },
    copy: {
      success: 'Copied to clipboard.',
      error: 'Clipboard not available on this browser.',
    },
    sidebar: {
      quickFacts: 'Quick facts',
      contact: 'Contact',
    },
  },
}
