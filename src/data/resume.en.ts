import profileImage from '@/assets/profile.jpg'
import type { ResumeData } from './types'

export const resumeEn: ResumeData = {
  meta: {
    locale: 'en',
    title: 'Tanawut Pongkan · IT Project Manager',
    description:
      'IT Project Manager with 9+ years leading agile projects, aligning cross-functional teams, and driving digital transformation.',
    keywords: ['Tanawut Pongkan', 'IT Project Manager', 'Agile Delivery', 'Digital Transformation', 'Resume'],
    ogTitle: 'Tanawut Pongkan · IT Project Manager',
    ogDescription:
      'IT project leader with 9+ years of agile delivery, business process optimisation, and cross-functional team guidance.',
  },
  nav: [
    { id: 'personal', label: 'Personal Details' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    greeting: 'IT Project Manager',
    name: 'Tanawut Pongkan',
    headline: 'Agile delivery, digital transformation, and team leadership',
    summary: [
      'IT Project Manager with 9+ years leading Agile projects, software development, and digital transformation initiatives.',
      'Proven ability to guide cross-functional teams, streamline processes, and apply modern technology to improve efficiency.',
    ],
    about:
      'IT Project Manager with 9+ years of experience in Agile project management, software development, and digital transformation. Proven ability to lead cross-functional teams, optimize business processes, and implement cutting-edge technologies to drive efficiency and success.',
    quickFacts: [
      { label: 'Location', value: 'Pathum Thani · Hybrid/Onsite', icon: 'location' },
      { label: 'Experience', value: '9+ years across agile delivery', icon: 'calendar' },
      { label: 'Focus', value: 'Digital transformation & process optimisation', icon: 'briefcase' },
    ],
    photo: {
      src: profileImage,
      alt: 'Portrait of Tanawut Pongkan wearing a blazer',
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
        label: 'Email Tanawut',
        ariaLabel: 'Send an email to Tanawut Pongkan',
        variant: 'ghost',
        href: 'mailto:tanawut.pongkan@gmail.com',
      },
    ],
    socials: [],
  },
  personal: {
    id: 'personal',
    label: 'Personal Details',
    summary: 'Based in Pathum Thani, available for hybrid or onsite collaboration across Bangkok and nearby provinces.',
    address: '40/65 Moo 2, Tambon Klangluang, Klongluang, Pathum Thani 12120 · Thailand',
    contacts: [
      {
        label: 'Email',
        value: 'tanawut.pongkan@gmail.com',
        href: 'mailto:tanawut.pongkan@gmail.com',
        icon: 'mail',
        copyHint: 'Copy email',
        copiedToast: 'Email copied to clipboard',
      },
      {
        label: 'Phone',
        value: '+66-95-474-9426',
        href: 'tel:+66954749426',
        icon: 'phone',
        copyHint: 'Copy phone number',
        copiedToast: 'Phone number copied',
      },
    ],
  },
  experience: {
    id: 'experience',
    label: 'Work Experience',
    summary: 'Hands-on IT project manager coordinating requirements, development, and client communication.',
    timelineLabel: 'Key Responsibilities',
    items: [
      {
        company: 'Aestha Asset Company Limited',
        role: 'IT Project Manager',
        location: 'Bangkok, Thailand',
        period: {
          start: 'Mar 2022',
          end: undefined,
          durationLabel: 'Mar 2022 - Present',
        },
        summary:
          'Lead project planning and delivery, turning client expectations into actionable work for developers and QA teams.',
        achievements: [
          'Worked directly with clients to gather requirements and perform root cause analysis before delivery.',
          'Prepared requirement summaries for developers and aligned them with client priorities.',
          'Tracked timeline and budget, escalating risks early to keep deliveries on schedule.',
          'Presented progress and completed work to clients, incorporating feedback into follow-up sprints.',
          'Participated in security and testing activities to ensure readiness before release.',
        ],
        tech: ['Project Plans', 'Requirement Docs', 'Testing', 'Presentation', 'Risk Control'],
      },
      {
        company: 'AIG Insurance (Thailand)',
        role: 'Senior Developer & System Analyst',
        location: 'Bangkok, Thailand',
        period: {
          start: 'Jul 2019',
          end: 'Feb 2022',
          durationLabel: 'Jul 2019 - Feb 2022',
        },
        summary: 'Analysed business needs and led system design before coordinating development and testing.',
        achievements: [
          'Created program specifications, test cases, and test results to guide implementation.',
          'Maintained systems, analysed issues, and coordinated fixes with developers.',
          'Optimised existing applications to improve stability and performance.',
        ],
        tech: ['System Analysis', 'Test Cases', 'QA', 'API', 'SQL'],
      },
      {
        company: 'AIS',
        role: 'Software Support Analyst',
        location: 'Bangkok, Thailand',
        period: {
          start: 'Nov 2018',
          end: 'May 2019',
          durationLabel: 'Nov 2018 - May 2019',
        },
        summary: 'Investigated issues reported from frontend operations and coordinated technical responses.',
        achievements: [
          'Collected user issues and replicated problems for the technical team.',
          'Prepared reports that summarised system problems and follow-up actions.',
        ],
        tech: ['Incident Analysis', 'Issue Reports', 'Coordination'],
      },
      {
        company: 'Bangkok Insurance PCL',
        role: 'Developer & System Analyst',
        location: 'Bangkok, Thailand',
        period: {
          start: 'Oct 2013',
          end: 'Aug 2018',
          durationLabel: 'Oct 2013 - Aug 2018',
        },
        summary: 'Developed and maintained enterprise applications for insurance operations.',
        achievements: [
          'Built ERP features and integrated them with other systems.',
          'Developed and maintained client applications for fire, home, and motor insurance.',
          'Maintained Windows applications and databases across the organisation.',
          'Built APIs that provided data to downstream systems.',
        ],
        tech: ['C#', 'SQL Server', 'API', 'Windows App'],
      },
      {
        company: 'Early Career Development',
        role: 'Developer',
        location: 'Bangkok, Thailand',
        period: {
          start: 'Sep 2011',
          end: 'Sep 2013',
          durationLabel: 'Sep 2011 - Sep 2013',
        },
        summary: 'Created desktop applications for Thai network providers using C#.',
        achievements: [
          'Delivered tools supporting True, AIS, Dtac, 3BB, and TOT network operations.',
        ],
        tech: ['C#', 'Desktop Apps'],
      },
    ],
  },
  internships: {
    id: 'internships',
    label: 'Internship',
    summary: 'Early learning roles available upon request.',
    items: [],
  },
  education: {
    id: 'education',
    label: 'Education',
    summary: 'Computer engineering foundation with hands-on software project work.',
    items: [
      {
        school: 'Bangkok University · Bangkok, Thailand',
        degree: 'Bachelor of Computer Engineering',
        period: '2010 - 2014',
        highlights: ['Developed an Android application for Robot Control in UI Robot Competition.'],
      },
    ],
  },
  skills: {
    id: 'skills',
    label: 'Skills',
    summary: 'Blend of project management, analysis, development, and tooling used throughout delivery.',
    groups: [
      {
        id: 'coreKeywords',
        label: 'Headline Focus',
        keywords: ['IT Project Management', 'System Analysis', 'Business Analysis'],
      },
      {
        id: 'projectManagement',
        label: 'Management',
        keywords: [
          'IT Project Management',
          'Agile methodology (Scrum)',
          'Project & Risk Management',
          'Team management',
          'Problem solving & leadership communication',
        ],
      },
      {
        id: 'technical',
        label: 'Technical',
        keywords: ['System Analyst & Design', 'Business Analyst', 'Web & Mobile App', 'API service'],
      },
      {
        id: 'dataAnalyticsAutomation',
        label: 'Programming Languages',
        keywords: ['NodeJS', 'JavaScript', 'HTML & CSS', 'SQL Server', 'C#', 'VB', 'Python'],
      },
      {
        id: 'cloudApiIntegration',
        label: 'Packages & Frameworks',
        keywords: ['NestJS', 'ReactJS', 'React Native', 'Tailwind CSS', 'Express', 'Laravel', 'NextJS'],
      },
      {
        id: 'leadershipSoftSkills',
        label: 'Collaboration',
        keywords: ['Client communication', 'Presentation', 'Root cause analysis', 'Timeline tracking'],
      },
      {
        id: 'toolsPlatforms',
        label: 'IDEs & Tools',
        keywords: ['VSCode', 'Git', 'Visual Studio', 'Docker'],
      },
    ],
    rawFromPdf: [
      'Management: IT Project Management, Agile methodology (Scrum), Project & Risk Management, Team management, Problem solving & leadership communication',
      'Technical: System Analyst & Design, Business Analyst, Web & Mobile App, API service',
      'IDE: VSCode, Git, Visual Studio, Docker',
      'Programming Language: NodeJS, JavaScript, HTML CSS, SQL Server, C#, VB, Python',
      'Packages/Framework: NestJS, ReactJS, React Native, Tailwind CSS, Express, Laravel, NextJS',
    ],
  },
  abilities: {
    id: 'abilities',
    label: 'Strengths',
    summary: 'Trusted by teams to keep scope clear, communicate updates, and protect delivery timelines.',
    items: [
      {
        title: 'Clear Requirements',
        summary: 'Translate client needs into concise briefs and technical action items.',
        bullets: [
          'Consolidate client expectations into requirement summaries for developers.',
          'Highlight risks and missing details early to reduce rework later.',
        ],
      },
      {
        title: 'Communication',
        summary: 'Keep stakeholders informed with approachable progress updates.',
        bullets: [
          'Lead presentations of completed work and gather feedback for next iterations.',
          'Coordinate cross-team testing and security reviews before launch.',
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    label: 'Key Projects',
    summary: 'Representative initiatives aligned with past roles.',
    items: [
      {
        name: 'Policy Administration Enhancements',
        role: 'IT Project Manager',
        summary: 'Coordinated enhancements for policy administration with security-focused testing.',
        impact: 'Delivered within planned timelines while addressing client-raised issues.',
        stack: ['Project Planning', 'Testing', 'Presentation'],
      },
      {
        name: 'Insurance Platform Stabilisation',
        role: 'Senior Developer & System Analyst',
        summary: 'Analysed defects and optimised existing applications across insurance lines.',
        impact: 'Improved reliability and simplified future change requests.',
        stack: ['System Analysis', 'SQL', 'API'],
      },
    ],
  },
  certifications: {
    id: 'certifications',
    label: 'Certifications',
    summary: 'Formal certifications can be provided upon request.',
    items: [],
  },
  achievements: {
    id: 'achievements',
    label: 'Achievements',
    summary: 'Project highlights available on request.',
    items: [],
  },
  languages: {
    id: 'languages',
    label: 'Languages',
    summary: 'Comfortable communicating with teams and clients in Thai and English.',
    items: [
      { name: 'Thai', proficiency: 'Native' },
      { name: 'English', proficiency: 'Professional working proficiency' },
    ],
  },
  contact: {
    id: 'contact',
    label: 'Contact',
    summary: 'Ready to discuss how I can support your next project.',
    message: 'Feel free to reach out for project coordination, analysis, or development support.',
    actions: [
      {
        label: 'Email Tanawut',
        action: 'mailto',
        value: 'tanawut.pongkan@gmail.com',
        successMessage: 'Opening your mail client…',
      },
      {
        label: 'Copy phone',
        action: 'copy',
        value: '+66954749426',
        successMessage: 'Phone number copied.',
      },
    ],
  },
  footer: {
    lastUpdatedLabel: 'Last updated:',
    lastUpdatedValue: 'January 2025',
    copyright: '© 2025 Tanawut Pongkan. All rights reserved.',
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
      quickActions: {
        print: 'Print / Save as PDF',
        download: 'Download CV',
        contact: 'Contact',
      },
    },
    copy: {
      copied: 'Copied!',
      copy: 'Copy',
      copyEmail: 'Copy email',
      copyPhone: 'Copy phone',
      emailCopied: 'Email copied',
      phoneCopied: 'Phone copied',
    },
    downloadToast: {
      preparing: 'Preparing your CV…',
    },
  },
}
