import profileImage from '@/assets/profile.jpg'
import type { ResumeData } from './types'

export const resumeTh: ResumeData = {
  meta: {
    locale: 'th',
    title: 'ธนาวุฒิ ป้องกัน · ผู้จัดการโครงการไอที',
    description:
      'ผู้จัดการโครงการไอทีประสบการณ์กว่า 9 ปี ดูแล Agile Project Management การพัฒนาซอฟต์แวร์ และ Digital Transformation',
    keywords: ['ธนาวุฒิ ป้องกัน', 'IT Project Manager', 'Agile', 'Digital Transformation', 'เรซูเม่'],
    ogTitle: 'ธนาวุฒิ ป้องกัน · IT Project Manager',
    ogDescription:
      'ผู้นำโครงการที่มีประสบการณ์มากกว่า 9 ปี ประสานทีมข้ามสายงาน ปรับปรุงกระบวนการ และนำเทคโนโลยีใหม่สู่การทำงาน',
  },
  nav: [
    { id: 'experience', label: 'ประสบการณ์ทำงาน' },
    { id: 'internships', label: 'ฝึกงาน' },
    { id: 'skills', label: 'ทักษะ' },
    { id: 'abilities', label: 'จุดแข็ง' },
    { id: 'projects', label: 'โครงการเด่น' },
    { id: 'certifications', label: 'ใบรับรอง' },
    { id: 'achievements', label: 'ผลงานเด่น' },
    { id: 'languages', label: 'ภาษา' },
    { id: 'contact', label: 'ติดต่อ' },
  ],
  hero: {
    greeting: 'IT Project Manager',
    name: 'ธนาวุฒิ ป้องกัน',
    headline: 'บริหาร Agile โค้ชทีมพัฒนา และขับเคลื่อน Digital Transformation',
    summary: [
      'ผู้จัดการโครงการไอทีประสบการณ์กว่า 9 ปี ทั้ง Agile Project Management การพัฒนาซอฟต์แวร์ และ Digital Transformation.',
      'เชี่ยวชาญการนำทีมข้ามสายงาน ปรับกระบวนการ และใช้เทคโนโลยีทันสมัยเพื่อเพิ่มประสิทธิภาพงาน.',
    ],
    about:
      'ผู้จัดการโครงการไอทีที่มีประสบการณ์มากกว่า 9 ปีใน Agile Project Management การพัฒนาซอฟต์แวร์ และ Digital Transformation สามารถนำทีมข้ามสายงาน ปรับปรุงกระบวนการธุรกิจ และประยุกต์ใช้เทคโนโลยีใหม่เพื่อเพิ่มประสิทธิภาพและความสำเร็จขององค์กร.',
    quickFacts: [
      { label: 'ที่ตั้ง', value: 'ปทุมธานี · ทำงาน Hybrid/Onsite', icon: 'location' },
      { label: 'ประสบการณ์', value: '9+ ปี ด้าน Agile และการส่งมอบโครงการ', icon: 'calendar' },
      { label: 'โฟกัส', value: 'Digital Transformation และปรับปรุงกระบวนการ', icon: 'briefcase' },
    ],
    photo: {
      src: profileImage,
      alt: 'ภาพถ่ายธนาวุฒิ ป้องกัน สวมเบลเซอร์',
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
        label: 'ส่งอีเมลถึงธนาวุฒิ',
        ariaLabel: 'ส่งอีเมลถึงธนาวุฒิ ป้องกัน',
        variant: 'ghost',
        href: 'mailto:tanawut.pongkan@gmail.com',
      },
    ],
    socials: [],
  },
  personal: {
    id: 'personal',
    label: 'ข้อมูลส่วนตัว',
    summary: 'ประจำปทุมธานี เดินทางทำงาน Hybrid หรือ Onsite ในกรุงเทพฯ และจังหวัดใกล้เคียงได้',
    address: '40/65 หมู่ 2 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120',
    contacts: [
      {
        label: 'Email',
        value: 'tanawut.pongkan@gmail.com',
        href: 'mailto:tanawut.pongkan@gmail.com',
        icon: 'mail',
        copyHint: 'คัดลอกอีเมล',
        copiedToast: 'คัดลอกอีเมลแล้ว',
      },
      {
        label: 'Phone',
        value: '+66-95-474-9426',
        href: 'tel:+66954749426',
        icon: 'phone',
        copyHint: 'คัดลอกเบอร์โทร',
        copiedToast: 'คัดลอกเบอร์แล้ว',
      },
    ],
  },
  experience: {
    id: 'experience',
    label: 'ประสบการณ์ทำงาน',
    summary: 'ประสานงานโครงการไอที สื่อสารกับลูกค้า วิเคราะห์ระบบ และดูแลการส่งมอบ',
    timelineLabel: 'หน้าที่หลัก',
    items: [
      {
        company: 'บริษัท เอสทรา แอสเสท',
        role: 'IT Project Manager',
        location: 'กรุงเทพฯ ประเทศไทย',
        period: {
          start: 'มี.ค. 2022',
          end: undefined,
          durationLabel: 'มี.ค. 2022 - ปัจจุบัน',
        },
        summary: 'นำแผนโครงการและ requirement จากลูกค้ามาแปลงเป็นงานที่ทีม dev/QA ดำเนินการได้ทันที',
        achievements: [
          'สื่อสารกับลูกค้าเพื่อเก็บ requirement และทำ root cause analysis ก่อนเริ่มพัฒนา',
          'จัดทำ requirement summary ให้ทีมพัฒนาและจัดลำดับความสำคัญร่วมกับลูกค้า',
          'ติดตาม timeline และ budget แจ้งความเสี่ยงล่วงหน้าเพื่อรักษาแผนส่งมอบ',
          'นำเสนอความคืบหน้าและผลงานต่อผู้ใช้งาน พร้อมรับ feedback ปรับในรอบถัดไป',
          'ร่วมทดสอบและตรวจสอบความปลอดภัยก่อนส่งมอบ',
        ],
        tech: ['แผนงาน', 'Requirement', 'Testing', 'Presentation', 'Risk Control'],
      },
      {
        company: 'AIG Insurance (Thailand)',
        role: 'Senior Developer & System Analyst',
        location: 'กรุงเทพฯ ประเทศไทย',
        period: {
          start: 'ก.ค. 2019',
          end: 'ก.พ. 2022',
          durationLabel: 'ก.ค. 2019 - ก.พ. 2022',
        },
        summary: 'วิเคราะห์ความต้องการและออกแบบระบบก่อนส่งต่อให้ทีมพัฒนาและทดสอบ',
        achievements: [
          'จัดทำ program specification, test case และ test result ครบถ้วน',
          'ดูแลระบบ วิเคราะห์ปัญหา และประสานทีม dev ในการแก้ไข',
          'ปรับปรุงระบบเดิมให้เสถียรและใช้งานได้ดีขึ้น',
        ],
        tech: ['System Analysis', 'Test Case', 'QA', 'API', 'SQL'],
      },
      {
        company: 'AIS',
        role: 'Software Support Analyst',
        location: 'กรุงเทพฯ ประเทศไทย',
        period: {
          start: 'พ.ย. 2018',
          end: 'พ.ค. 2019',
          durationLabel: 'พ.ย. 2018 - พ.ค. 2019',
        },
        summary: 'รับเรื่องปัญหาจากฝั่ง frontend และประสานทีมเทคนิคเพื่อแก้ไข',
        achievements: [
          'วิเคราะห์ปัญหาที่ผู้ใช้แจ้งและจำลองสถานการณ์เพื่อส่งต่อทีมเทคนิค',
          'จัดทำรายงานสรุปปัญหาและการดำเนินการแก้ไข',
        ],
        tech: ['Incident Analysis', 'Issue Report', 'Coordination'],
      },
      {
        company: 'Bangkok Insurance PCL',
        role: 'Developer & System Analyst',
        location: 'กรุงเทพฯ ประเทศไทย',
        period: {
          start: 'ต.ค. 2013',
          end: 'ส.ค. 2018',
          durationLabel: 'ต.ค. 2013 - ส.ค. 2018',
        },
        summary: 'พัฒนาและดูแลระบบธุรกิจประกันภัยในองค์กร',
        achievements: [
          'พัฒนาระบบ ERP และเชื่อมต่อกับระบบอื่น',
          'สร้างและดูแลแอปลูกค้าสำหรับประกันภัยอัคคีภัย บ้าน และรถยนต์',
          'ดูแลแอป Windows และฐานข้อมูลขององค์กร',
          'พัฒนา API เพื่อส่งข้อมูลให้ระบบอื่นใช้งาน',
        ],
        tech: ['C#', 'SQL Server', 'API', 'Windows App'],
      },
      {
        company: 'ผลงานช่วงเริ่มต้น',
        role: 'Developer',
        location: 'กรุงเทพฯ ประเทศไทย',
        period: {
          start: 'ก.ย. 2011',
          end: 'ก.ย. 2013',
          durationLabel: 'ก.ย. 2011 - ก.ย. 2013',
        },
        summary: 'พัฒนาแอปเดสก์ท็อปสำหรับผู้ให้บริการเครือข่ายในไทยด้วย C#',
        achievements: ['ส่งมอบเครื่องมือให้ True, AIS, Dtac, 3BB และ TOT ใช้งาน'],
        tech: ['C#', 'Desktop App'],
      },
    ],
  },
  internships: {
    id: 'internships',
    label: 'ประสบการณ์ฝึกงาน',
    summary: 'รายละเอียดพร้อมให้ข้อมูลเพิ่มเติม',
    items: [],
  },
  education: {
    id: 'education',
    label: 'การศึกษา',
    summary: 'พื้นฐานวิศวกรรมคอมพิวเตอร์พร้อมประสบการณ์ทำโปรเจกต์ซอฟต์แวร์',
    items: [
      {
        school: 'มหาวิทยาลัยกรุงเทพ · กรุงเทพมหานคร',
        degree: 'วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์',
        period: '2010 - 2014',
        highlights: ['พัฒนาแอป Android สำหรับควบคุมหุ่นยนต์ในโครงการ UI Robot Competition'],
      },
    ],
  },
  skills: {
    id: 'skills',
    label: 'ทักษะ',
    summary: 'ทักษะการบริหารโครงการ วิเคราะห์ระบบ การพัฒนา และเครื่องมือที่ใช้จริง',
    groups: [
      {
        id: 'coreKeywords',
        label: 'จุดเด่น',
        keywords: ['IT Project Management', 'System Analysis', 'Business Analysis'],
      },
      {
        id: 'projectManagement',
        label: 'การจัดการ',
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
        label: 'เทคนิค',
        keywords: ['System Analyst & Design', 'Business Analyst', 'Web & Mobile App', 'API service'],
      },
      {
        id: 'dataAnalyticsAutomation',
        label: 'ภาษาโปรแกรม',
        keywords: ['NodeJS', 'JavaScript', 'HTML & CSS', 'SQL Server', 'C#', 'VB', 'Python'],
      },
      {
        id: 'cloudApiIntegration',
        label: 'แพ็กเกจ / เฟรมเวิร์ก',
        keywords: ['NestJS', 'ReactJS', 'React Native', 'Tailwind CSS', 'Express', 'Laravel', 'NextJS'],
      },
      {
        id: 'leadershipSoftSkills',
        label: 'การทำงานร่วมกัน',
        keywords: ['สื่อสารลูกค้า', 'นำเสนอผลงาน', 'วิเคราะห์ปัญหา', 'ติดตามแผนงาน'],
      },
      {
        id: 'toolsPlatforms',
        label: 'IDE & Tools',
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
    label: 'จุดแข็ง',
    summary: 'เน้นสื่อสารตรงไปตรงมา แปลง requirement ให้ทีมทำงานได้ทันที และคุม timeline อย่างใกล้ชิด',
    items: [
      {
        title: 'Requirement ชัดเจน',
        summary: 'รวบรวมความต้องการลูกค้าและแตกเป็น task ที่ตรวจสอบได้',
        bullets: [
          'ทำ requirement summary ให้ dev/QA พร้อมระบุความเสี่ยง',
          'แจ้งข้อมูลที่ขาดเพื่อป้องกันการแก้ไขซ้ำ',
        ],
      },
      {
        title: 'การสื่อสาร',
        summary: 'อัปเดตผู้เกี่ยวข้องสม่ำเสมอและนำเสนอผลงานเข้าใจง่าย',
        bullets: [
          'นำเสนอผลงาน จัดเก็บ feedback และวางแผนรอบถัดไป',
          'ประสานงานทดสอบและ security check ก่อนปล่อยใช้งาน',
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    label: 'โครงการเด่น',
    summary: 'ตัวอย่างงานที่สอดคล้องกับบทบาทที่ผ่านมา',
    items: [
      {
        name: 'ปรับปรุงระบบบริหารกรมธรรม์',
        role: 'IT Project Manager',
        summary: 'ประสานงานฟีเจอร์ใหม่พร้อมทดสอบด้านความปลอดภัย',
        impact: 'ส่งมอบตามแผนและตอบโจทย์ประเด็นจากลูกค้า',
        stack: ['Project Planning', 'Testing', 'Presentation'],
      },
      {
        name: 'เสถียรภาพแพลตฟอร์มประกันภัย',
        role: 'Senior Developer & System Analyst',
        summary: 'วิเคราะห์ defect และปรับปรุงระบบเดิมหลายสายผลิตภัณฑ์',
        impact: 'เพิ่มความเสถียรและลดภาระการขอแก้ไขในอนาคต',
        stack: ['System Analysis', 'SQL', 'API'],
      },
    ],
  },
  certifications: {
    id: 'certifications',
    label: 'ใบรับรอง',
    summary: 'ใบรับรองอย่างเป็นทางการสามารถแจ้งได้เมื่อร้องขอ',
    items: [],
  },
  achievements: {
    id: 'achievements',
    label: 'ผลงานเด่น',
    summary: 'สามารถให้รายละเอียดเพิ่มเติมตามความเหมาะสม',
    items: [],
  },
  languages: {
    id: 'languages',
    label: 'ภาษา',
    summary: 'สื่อสารได้ทั้งภาษาไทยและอังกฤษสำหรับลูกค้าและทีม',
    items: [
      { name: 'ไทย', proficiency: 'เจ้าของภาษา' },
      { name: 'อังกฤษ', proficiency: 'ทำงานได้คล่อง' },
    ],
  },
  contact: {
    id: 'contact',
    label: 'ติดต่อ',
    summary: 'พร้อมพูดคุยว่าผมจะช่วยดูแลโครงการต่อไปของคุณได้อย่างไร',
    message: 'ทักมาคุยกันได้ทั้งด้านการประสานงาน วิเคราะห์ระบบ และการพัฒนา',
    address: '40/65 หมู่ 2 .คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120',
    channels: [
      {
        label: 'อีเมล',
        value: 'tanawut.pongkan@gmail.com',
        href: 'mailto:tanawut.pongkan@gmail.com',
        icon: 'mail',
        copyHint: 'คัดลอกอีเมล',
        copiedToast: 'คัดลอกอีเมลแล้ว',
      },
      {
        label: 'โทรศัพท์',
        value: '+66-95-474-9426',
        href: 'tel:+66954749426',
        icon: 'phone',
        copyHint: 'คัดลอกเบอร์โทร',
        copiedToast: 'คัดลอกเบอร์โทรแล้ว',
      },
    ],
    actions: [
      {
        label: 'ส่งอีเมลถึงธนาวุฒิ',
        action: 'mailto',
        value: 'tanawut.pongkan@gmail.com',
        successMessage: 'กำลังเปิดอีเมลไคลเอนต์…',
      },
      {
        label: 'คัดลอกเบอร์โทร',
        action: 'copy',
        value: '+66954749426',
        successMessage: 'คัดลอกเบอร์โทรแล้ว',
      },
    ],
  },
  footer: {
    lastUpdatedLabel: 'อัปเดตล่าสุด:',
    lastUpdatedValue: 'มกราคม 2025',
    copyright: '© 2025 ธนาวุฒิ ป้องกัน สงวนลิขสิทธิ์',
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
      light: 'สว่าง',
      dark: 'มืด',
    },
    atsToggle: {
      label: 'โหมด',
      standard: 'มุมมองปกติ',
      ats: 'ATS',
      description: 'ปรับเป็นรูปแบบ ATS Friendly',
    },
    commandPalette: {
      openHint: 'Command palette (Ctrl+K)',
      placeholder: 'ค้นหาหมวดหมู่ การตั้งค่า หรือการทำงาน…',
      sections: {
        navigation: 'นำทาง',
        utilities: 'ยูทิลิตี้',
        settings: 'การตั้งค่า',
      },
      quickActions: {
        print: 'พิมพ์ / บันทึก PDF',
        download: 'ดาวน์โหลด CV',
        contact: 'ติดต่อ',
      },
    },
    copy: {
      copied: 'คัดลอกแล้ว!',
      copy: 'คัดลอก',
      copyEmail: 'คัดลอกอีเมล',
      copyPhone: 'คัดลอกเบอร์โทร',
      emailCopied: 'คัดลอกอีเมลแล้ว',
      phoneCopied: 'คัดลอกเบอร์แล้ว',
    },
    downloadToast: {
      preparing: 'กำลังเตรียม CV…',
    },
  },
}
