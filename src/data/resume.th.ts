import profileImage from '@/assets/profile.svg'
import type { ResumeData } from './types'

export const resumeTh: ResumeData = {
  meta: {
    locale: 'th',
    title: 'ธนาวุฒิ ประเสริฐคุณ · Principal Frontend Engineer & Design Systems Lead',
    description:
      'ผู้นำด้าน Frontend สำหรับองค์กรระดับเอนเทอร์ไพรส์ เน้นออกแบบระบบดีไซน์และ UI สองภาษาให้สcalable ปลอดภัย และดูแลต่อได้',
    keywords: ['ธนาวุฒิ ประเสริฐคุณ', 'Principal Frontend', 'Design Systems Lead', 'Enterprise UI', 'เรซูเม่'],
    ogTitle: 'ธนาวุฒิ ประเสริฐคุณ · Principal Frontend Engineer',
    ogDescription:
      'ผู้นำทีม Frontend สำหรับองค์กรขนาดใหญ่ โฟกัส design system, accessibility และการส่งมอบงานที่ HR อ่านง่าย + ATS friendly',
  },
  nav: [
    { id: 'personal', label: 'ข้อมูลส่วนตัว' },
    { id: 'experience', label: 'ประสบการณ์ทำงาน' },
    { id: 'internships', label: 'ประสบการณ์ฝึกงาน' },
    { id: 'education', label: 'การศึกษา' },
    { id: 'skills', label: 'ทักษะ' },
    { id: 'abilities', label: 'จุดแข็ง' },
    { id: 'projects', label: 'โครงการเด่น' },
    { id: 'certifications', label: 'ใบรับรอง' },
    { id: 'achievements', label: 'ผลงานเด่น' },
    { id: 'languages', label: 'ภาษา' },
    { id: 'contact', label: 'ติดต่อ' },
  ],
  hero: {
    greeting: 'ผู้นำ Frontend สำหรับองค์กร',
    name: 'ธนาวุฒิ ประเสริฐคุณ',
    headline: 'Principal Frontend Engineer & Design Systems Lead',
    summary: [
      'ยกระดับระบบดีไซน์สองภาษาให้ทีมผลิตภัณฑ์กว่า 18 ทีมใช้งานร่วมกันได้จริง ครอบคลุมธนาคาร ประกัน และระบบปฏิบัติการ',
      'เชื่อมกลยุทธ์ผู้บริหารกับภาคปฏิบัติ สร้าง UI ที่อ่านง่าย บำรุงรักษาต่อได้ พร้อมตัวชี้วัดชัดเจนสำหรับ HR และผู้มีส่วนได้ส่วนเสีย',
    ],
    quickFacts: [
      { label: 'ที่ตั้ง', value: 'กรุงเทพฯ · ทำงานแบบ Hybrid', icon: 'location' },
      { label: 'ประสบการณ์', value: '11 ปี (บทบาทผู้นำ 5+ ปี)', icon: 'calendar' },
      { label: 'ความเชี่ยวชาญ', value: 'Enterprise UI & Design System', icon: 'briefcase' },
    ],
    photo: {
      src: profileImage,
      alt: 'ภาพถ่ายธนาวุฒิ ประเสริฐคุณ สวมเบลเซอร์สีน้ำเงินในสตูดิโอ',
    },
    actions: [
      {
        id: 'download',
        label: 'ดาวน์โหลด CV (PDF)',
        ariaLabel: 'ดาวน์โหลดเรซูเม่เป็นไฟล์ PDF',
        variant: 'primary',
      },
      {
        id: 'print',
        label: 'พิมพ์ / บันทึกเป็น PDF',
        ariaLabel: 'เปิดหน้าต่างพิมพ์',
        variant: 'secondary',
      },
      {
        id: 'contact',
        label: 'ติดต่อธนาวุฒิ',
        ariaLabel: 'เลื่อนไปส่วนติดต่อ',
        variant: 'ghost',
        href: 'mailto:tanawut.pr@example.com',
      },
    ],
    socials: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        ariaLabel: 'เปิดโปรไฟล์ LinkedIn',
        url: 'https://www.linkedin.com/in/tanawutp',
        icon: 'linkedin',
      },
      {
        id: 'github',
        label: 'GitHub',
        ariaLabel: 'เปิดโปรไฟล์ GitHub',
        url: 'https://github.com/tanawutp',
        icon: 'github',
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        ariaLabel: 'เปิดเว็บไซต์ Portfolio',
        url: 'https://portfolio.tanawut.dev',
        icon: 'globe',
      },
    ],
  },
  personal: {
    id: 'personal',
    label: 'ข้อมูลส่วนตัว',
    summary: 'ประจำการในกรุงเทพฯ พร้อมเดินทางประชุมลูกค้าในภูมิภาคเอเชียแปซิฟิกได้ตามต้องการ',
    address: 'กรุงเทพมหานคร ประเทศไทย · พร้อมเดินทาง onsite/remote · โซนเวลา GMT+7',
    contacts: [
      {
        label: 'Email',
        value: 'tanawut.pr@example.com',
        href: 'mailto:tanawut.pr@example.com',
        icon: 'mail',
        copyHint: 'คัดลอกอีเมล',
        copiedToast: 'คัดลอกอีเมลแล้ว',
      },
      {
        label: 'Phone',
        value: '+66 81 234 5678',
        href: 'tel:+66812345678',
        icon: 'phone',
        copyHint: 'คัดลอกเบอร์โทร',
        copiedToast: 'คัดลอกเบอร์เรียบร้อย',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/tanawutp',
        href: 'https://www.linkedin.com/in/tanawutp',
        icon: 'linkedin',
        copyHint: 'คัดลอกลิงก์ LinkedIn',
        copiedToast: 'คัดลอกลิงก์ LinkedIn แล้ว',
      },
      {
        label: 'GitHub',
        value: 'github.com/tanawutp',
        href: 'https://github.com/tanawutp',
        icon: 'github',
        copyHint: 'คัดลอกลิงก์ GitHub',
        copiedToast: 'คัดลอกลิงก์ GitHub แล้ว',
      },
    ],
  },
  experience: {
    id: 'experience',
    label: 'ประสบการณ์ทำงาน',
    summary: 'ขับเคลื่อนการปรับโฉม Frontend ในองค์กรขนาดใหญ่ เชื่อม design system กับตัวชี้วัดธุรกิจและกำกับมาตรฐาน',
    timelineLabel: 'ผลลัพธ์สำคัญ',
    items: [
      {
        company: 'Apex One Digital Platform',
        role: 'Principal Frontend Engineer & Design Systems Lead',
        location: 'กรุงเทพฯ · Hybrid',
        period: {
          start: '2021',
          end: undefined,
          durationLabel: '3 ปี 6 เดือน',
        },
        summary: 'ยกระดับ design system สองภาษาให้ทีมผลิตภัณฑ์ 18 ทีมใช้งานร่วม ลดงานซ้ำและเพิ่มมาตรฐาน accessibility',
        achievements: [
          'ลดรอบการส่งมอบ UI ลง 42% หลัง codify token 160+ รายการและคอมโพเนนต์ 48 ชุดพร้อมกระบวนการกำกับคุณภาพ',
          'เพิ่มคะแนน compliance WCAG จาก 58% เป็น 93% ภายใน 9 เดือน ผ่าน playbook review และ automation linting',
          'ลด incident regression 37% ด้วย pipeline rollout แบบควบคุม พร้อม visual regression test ครอบคลุม flow สำคัญ',
          'บริหาร roadmap ร่วมกับผู้บริหาร ส่งผลให้ได้รับ headcount ถาวรและบรรลุเป้าการนำไปใช้รายไตรมาส',
        ],
        tech: ['React', 'TypeScript', 'Vite', 'Storybook', 'Tailwind', 'Playwright', 'i18next'],
      },
      {
        company: 'Siam Horizon Bank (สัญญาจ้าง)',
        role: 'Lead Frontend Architect',
        location: 'กรุงเทพฯ · Hybrid',
        period: {
          start: '2018',
          end: '2021',
          durationLabel: '3 ปี',
        },
        summary: 'รีแพลตฟอร์มระบบธนาคารสำหรับลูกค้ารายย่อย เน้นความเสถียร ความปลอดภัย และการตรวจสอบย้อนกลับได้',
        achievements: [
          'สร้าง component library กลางให้ 12 squad ใช้งาน ลดโค้ดซ้ำซ้อน 68% ภายในรอบ release แรก',
          'ออกแบบกลยุทธ์ deploy แบบ zero-downtime พร้อม feature flag ทำให้ uptime แตะ 99.95%',
          'โค้ชวิศวกรและดีไซเนอร์ 14 คน ผ่านคลินิกจับคู่ เพิ่มคะแนนสมรรถนะภายใน 1.5 ระดับใน 2 ไตรมาส',
        ],
        tech: ['React', 'GraphQL', 'NX', 'Styled System', 'Jest', 'Cypress'],
      },
      {
        company: 'BlueOrbit Solutions',
        role: 'Senior Frontend Engineer',
        location: 'สิงคโปร์',
        period: {
          start: '2014',
          end: '2018',
          durationLabel: '4 ปี',
        },
        summary: 'พัฒนาแดชบอร์ดวิเคราะห์ข้อมูลสำหรับลูกค้าอุตสาหกรรมการผลิตและโลจิสติกส์ทั่วเอเชียตะวันออกเฉียงใต้',
        achievements: [
          'ลดเวลา proposal-to-delivery 28% ด้วย UI kit สำเร็จรูปและ starter repo ตาม domain',
          'ร่วมกับทีม solution architect วาง framework KPI storytelling ถูกใช้ใน executive review 45+ ครั้ง',
          'ปรับ performance budget ทำให้เวลาโหลดลดจาก 6.8s เหลือ 2.3s บนเครือข่ายปกติ',
        ],
        tech: ['Angular', 'D3.js', 'RxJS', 'Sass', 'Webpack'],
      },
    ],
  },
  internships: {
    id: 'internships',
    label: 'ประสบการณ์ฝึกงาน',
    summary: 'เริ่มต้นด้วยการสนับสนุน product analytics และการส่งมอบงานแบบ iteration ตั้งแต่ช่วงมหาวิทยาลัย',
    items: [
      {
        company: 'Skyline Tech Ventures',
        role: 'Product Engineering Intern',
        location: 'กรุงเทพฯ',
        period: {
          start: '2013',
          end: '2014',
          durationLabel: '12 เดือน',
        },
        summary: 'ออกแบบ prototype และเตรียมความพร้อมการปล่อยฟีเจอร์ onboarding สำหรับแอปมือถือสองภาษา',
        achievements: [
          'พัฒนาหน้า onboarding ใหม่ เพิ่ม completion rate 19% จากการทดสอบ A/B ภายในสอง sprint',
          'จัดทำแดชบอร์ด funnel ช่วยลดเวลารายงาน manual จาก 6 ชม. เหลือไม่ถึง 1 ชม. ต่อสัปดาห์',
        ],
        tech: ['Backbone.js', 'LESS', 'Google Analytics'],
      },
    ],
  },
  education: {
    id: 'education',
    label: 'การศึกษา',
    summary: 'รากฐานวิศวกรรมควบคู่การเรียนด้านภาวะผู้นำผลิตภัณฑ์ และ analytics เชิงลึก',
    items: [
      {
        school: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
        degree: 'วิศวกรรมศาสตรบัณฑิต วิศวกรรมคอมพิวเตอร์ (เกียรตินิยมอันดับหนึ่ง)',
        period: '2010 – 2014',
        highlights: [
          'โครงงานจบด้าน middleware สำหรับแดชบอร์ดการผลิต นำร่องใช้งานจริง 3 โรงงาน',
          'เป็นประธานชมรมเทคโนโลยี จัดโครงการโค้ชรุ่นน้องกว่า 200 คนต่อภาคการศึกษา',
        ],
      },
      {
        school: 'National University of Singapore (โครงการแลกเปลี่ยน)',
        degree: 'หลักสูตร Product Leadership & Service Design',
        period: '2012 – 2013',
        highlights: ['ร่วมทีมสหสาขาออกแบบแดชบอร์ดกำกับโครงการ smart city ให้ภาครัฐสิงคโปร์'],
      },
    ],
  },
  skills: {
    // TODO: แปล labels/คำอธิบายและ keyword เป็นภาษาไทย
    id: 'skills',
    label: 'ทักษะ',
    summary: 'จัดหมวดคำหลักสำหรับ ATS ดึงมาจากไฟล์ PDF ต้นฉบับ (อยู่ระหว่างแปลภาษาไทย).',
    groups: [
      {
        id: 'coreKeywords',
        label: 'Core Keywords',
        description: 'คีย์เวิร์ดหลักที่ปรากฏซ้ำในเรซูเม่เพื่อเน้นบทบาทผู้นำและการส่งมอบงาน.',
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
        description: 'เครื่องมือและคำหลักด้านการวางแผน/กำกับโครงการที่ระบุไว้ใน PDF.',
        keywords: ['Agile', 'Scrum', 'IT Strategy', 'Procurement', 'Risk Management', 'ClickUp', 'Jira', 'Trello'],
      },
      {
        id: 'technical',
        label: 'Technical Stack',
        description: 'เทคโนโลยีหลักที่ใช้ในการพัฒนาโซลูชันตามต้นฉบับ.',
        keywords: ['Software Development', 'C#', 'ASP.NET', 'SQL', 'React', 'Vue.js', 'Docker'],
      },
      {
        id: 'dataAnalyticsAutomation',
        label: 'Data Analytics & Automation',
        description: 'คำหลักด้าน analytics และ automation ที่คงรูปแบบตามต้นฉบับ.',
        keywords: ['Data Analytics', 'Automation', 'Looker Studio'],
      },
      {
        id: 'cloudApiIntegration',
        label: 'Cloud & API Integration',
        description: 'ความสามารถด้านคลาวด์และการเชื่อมต่อ API ที่กล่าวถึง.',
        keywords: ['Cloud Computing', 'API Integration'],
      },
      {
        id: 'leadershipSoftSkills',
        label: 'Leadership & Soft Skills',
        description: 'ทักษะด้านภาวะผู้นำและการประสานงานกับผู้มีส่วนได้ส่วนเสีย (จะปรับถ้อยคำไทยภายหลัง).',
        displayMode: 'list',
        keywords: ['Leadership', 'Problem-Solving', 'Stakeholder Communication'],
      },
      {
        id: 'toolsPlatforms',
        label: 'Tools & Platforms',
        description: 'เครื่องมือและแพลตฟอร์มที่สนับสนุนการบริหารงาน (ยังไม่แปล).',
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
    atsNote: 'อ้างอิงจาก Modern Professional CV Resume.pdf (หมวด Skills) ต้นฉบับภาษาอังกฤษ.',
  },
  abilities: {
    id: 'abilities',
    label: 'จุดแข็ง',
    summary: 'แปลงโจทย์เชิงกลยุทธ์ให้เป็นแผนส่งมอบทีละเฟส พร้อมตัวชี้วัดที่ตรวจสอบได้',
    items: [
      {
        title: 'Design System Governance',
        summary: 'ตั้งมาตรฐานการใช้งาน component ให้ทีมต่าง ๆ ทำงานร่วมกันได้อย่างมีคุณภาพ',
        bullets: [
          'ทำ scorecard ราย sprint ติดตาม coverage, adoption, accessibility debt',
          'สร้างกระบวนการ RFC ที่ยืดหยุ่นแต่ควบคุมได้ ใช้งานโดย 18 squad',
        ],
      },
      {
        title: 'Stakeholder Alignment',
        summary: 'เชื่อมผู้บริหาร, design, engineering ให้ตัดสินใจบนข้อมูลเดียวกัน',
        bullets: [
          'จัด quarterly steering review แปลง OKR เป็น initiative ที่ลงมือทำได้จริง',
          'ถอดข้อกำหนด compliance เป็น acceptance criteria reusable ลดเวลาตรวจสอบ 35%',
        ],
      },
      {
        title: 'Team Enablement',
        summary: 'สร้างสภาพแวดล้อมให้ทีมถือครองคุณภาพและเติบโตอย่างต่อเนื่อง',
        bullets: [
          'จัดคลินิกจับคู่ ยกระดับคะแนนความเชี่ยวชาญ Frontend จาก 2.8 → 4.1 ภายใน 2 ไตรมาส',
          'ออกแบบ onboarding playbook ลดเวลา ramp up สมาชิกใหม่ 45%',
        ],
      },
      {
        title: 'Problem Framing',
        summary: 'แยกโจทย์ใหญ่เป็น phase พร้อมเกณฑ์ตัดสินใจที่วัดผลได้',
        bullets: [
          'ออกแบบ backlog การทดลอง เพิ่มความถี่ validated learning จากรายเดือนเป็นรายสองสัปดาห์',
          'ใช้ service blueprint ค้นพบ bottleneck สำคัญ 3 จุด คืน capacity 12%',
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    label: 'โครงการเด่น',
    summary: 'คัดเลือกโครงการที่สะท้อนการยกระดับ design system และผลลัพธ์ทางธุรกิจเชิงตัวเลข',
    items: [
      {
        name: 'Atlas Design Platform',
        role: 'Design Systems Lead',
        summary: 'วางระบบ token และ API ส่วนหน้าร่วมกันสำหรับทีมสินทรัพย์ ประกัน และปฏิบัติการ',
        impact: 'ลด ticket rework 37% และขยับรอบ release จากรายไตรมาสเป็นทุกสองเดือน',
        highlights: [
          'จัดทำ design token 160+ รายการและ component 48 ชุดพร้อม rubric ติดตามผลทุกรอบ',
          'พา 18 squad ย้ายฟีเจอร์สำคัญสู่ระบบใหม่โดยไม่มี regression เชิงธุรกิจ',
        ],
        stack: ['React', 'Vite', 'Storybook', 'Figma Tokens'],
        link: {
          label: 'ดู case study',
          url: 'https://portfolio.tanawut.dev/projects/atlas',
        },
      },
      {
        name: 'RegentBank CX Suite',
        role: 'Lead Frontend Architect',
        summary: 'ปรับปรุงระบบธนาคารสำหรับลูกค้ารายย่อย พร้อม audit trail และ analytics ครบวงจร',
        impact: 'คะแนน NPS เพิ่ม 11 จุดหลังเปิดตัว และ ticket สนับสนุนลดลง 24%',
        highlights: [
          'รีแพลตฟอร์ม customer journey 12 เส้นทางพร้อม audit trail และ analytics ครบถ้วน',
          'ตั้งกลยุทธ์ feature flag ทำให้ปล่อยฟีเจอร์แบบ zero-downtime ได้ทุกภูมิภาค',
        ],
        stack: ['React', 'GraphQL', 'LaunchDarkly', 'Cypress'],
      },
      {
        name: 'Nimbus Fleet Analytics',
        role: 'Senior Frontend Engineer',
        summary: 'สร้างแดชบอร์ดเรียลไทม์สำหรับทีมโลจิสติกส์ภูมิภาคเอเชียแปซิฟิก',
        impact: 'เพิ่มความแม่นยำการจัดส่ง 18% ผ่าน KPI visualization และระบบแจ้งเตือน',
        highlights: [
          'ผสานข้อมูล telematics แบบเรียลไทม์และ ETA เชิงคาดการณ์สำหรับทีม dispatch',
          'ลดงานจัดการข้อยกเว้น manual 28% ผ่านระบบแจ้งเตือนและ playbook อัตโนมัติ',
        ],
        stack: ['Angular', 'D3.js', 'RxJS'],
      },
      {
        name: 'Command Palette Framework',
        role: 'Principal Engineer',
        summary: 'ออกแบบ command palette ที่เข้าถึงได้และฝังในเครื่องมือองค์กร',
        impact: 'ลดเวลา navigation 32% สำหรับ power user และเพิ่มคะแนนความพึงพอใจ',
        highlights: [
          'ออกแบบแพทเทิร์น command palette รองรับเกณฑ์ WCAG และบรรจุใน design system',
          'วัดผลลดเวลา navigation 32% พร้อมคะแนนความพึงพอใจเพิ่มขึ้น 0.6 คะแนน',
        ],
        stack: ['React', 'cmdk', 'Radix UI'],
      },
    ],
  },
  certifications: {
    id: 'certifications',
    label: 'ใบรับรอง',
    summary: 'การรับรองที่เสริมความเชี่ยวชาญด้าน accessibility, cloud และ product leadership',
    items: [
      {
        name: 'Certified Professional in Accessibility Core Competencies (CPACC)',
        issuer: 'IAAP',
        year: '2024',
      },
      {
        name: 'Microsoft Azure Architect Technologies',
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
    label: 'ผลงานเด่น',
    summary: 'รางวัลและการยอมรับจากงานส่งมอบระบบดีไซน์และการนำทีมแบบข้ามสายงาน',
    items: [
      {
        title: 'Enterprise Design Impact Award · 2024',
        detail: 'ได้รับรางวัลจากการวาง adoption rubric ให้ 18 squad ใช้งานครบภายใน 2 ไตรมาส',
      },
      {
        title: 'วิทยากร APAC DesignOps Summit 2023',
        detail: 'แบ่งปันกรณีศึกษาการ rollout design system สองภาษาให้ผู้ฟังกว่า 400 คน',
      },
      {
        title: 'ยื่นจดสิทธิบัตร Adaptive Layout Token Sync',
        detail: 'ร่วมพัฒนาวิธี sync token ระหว่าง Figma กับ production pipeline',
      },
    ],
  },
  languages: {
    id: 'languages',
    label: 'ภาษา',
    summary: 'สื่อสารเชิงเทคนิคและธุรกิจได้ทั้งภาษาไทย อังกฤษ และภาษาจีนเพื่อการทำงาน',
    items: [
      { name: 'ภาษาไทย', proficiency: 'เจ้าของภาษา · นำเสนอและเจรจาระดับผู้บริหาร' },
      { name: 'ภาษาอังกฤษ', proficiency: 'สื่อสารวิชาชีพเต็มรูปแบบ · บริหารทีมข้ามภูมิภาค' },
      { name: 'ภาษาจีนกลาง', proficiency: 'สื่อสารสำหรับเวิร์กช็อปและการประชุมลูกค้า' },
    ],
  },
  contact: {
    id: 'contact',
    label: 'ติดต่อ',
    summary: 'พร้อมร่วมงานเพื่อเร่งความเร็วและคุณภาพของ Enterprise UI และ Design System',
    message: 'เปิดรับงานที่ต้องการผู้นำ Frontend ดูแลองค์กรทั้งด้านเทคนิคและ stakeholder management',
    actions: [
      {
        label: 'ส่งอีเมลหา',
        action: 'mailto',
        value: 'tanawut.pr@example.com',
        successMessage: 'กำลังเปิดหน้าต่างอีเมล…',
      },
      {
        label: 'คัดลอกเบอร์โทร',
        action: 'copy',
        value: '+66812345678',
        successMessage: 'คัดลอกเบอร์เรียบร้อย ติดต่อได้ช่วง 09:00-18:00 น.',
      },
      {
        label: 'นัดคุยเบื้องต้น (Calendly)',
        action: 'link',
        value: 'https://cal.com/tanawutp/intro',
      },
    ],
  },
  footer: {
    lastUpdatedLabel: 'อัปเดตล่าสุด:',
    lastUpdatedValue: 'ธันวาคม 2025',
    copyright: '© 2025 ธนาวุฒิ ประเสริฐคุณ สงวนลิขสิทธิ์',
  },
  ui: {
    languageToggle: {
      label: 'ภาษา',
      options: {
        th: 'TH',
        en: 'EN',
      },
    },
    themeToggle: {
      label: 'ธีม',
      light: 'โหมดสว่าง',
      dark: 'โหมดมืด',
    },
    atsToggle: {
      label: 'โหมด',
      standard: 'มุมมองปกติ',
      ats: 'โหมด ATS',
      description: 'เปิดโหมด ATS-friendly',
    },
    commandPalette: {
      openHint: 'เปิด Command Palette (Ctrl+K)',
      placeholder: 'ค้นหาหัวข้อ เมนู หรือคำสั่ง…',
      sections: {
        navigation: 'ไปยังส่วน',
        utilities: 'ตัวช่วย',
        settings: 'ตั้งค่า',
      },
      print: 'พิมพ์เรซูเม่',
    },
    downloadToast: {
      preparing: 'กำลังเตรียมไฟล์ PDF สามารถใช้คำสั่งพิมพ์เพื่อบันทึกได้ทันที',
    },
    copy: {
      success: 'คัดลอกข้อมูลเรียบร้อย',
      error: 'ไม่สามารถคัดลอกได้ กรุณาคัดลอกด้วยตนเอง',
    },
    sidebar: {
      quickFacts: 'ข้อมูลย่อ',
      contact: 'ข้อมูลติดต่อ',
    },
  },
}
