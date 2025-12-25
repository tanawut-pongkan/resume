import type { ComponentType } from 'react'
import { Briefcase, Calendar, Globe2, Mail, MapPin, Phone, Printer, Share2, SunMoon, UserCheck, FileDown, Languages, ShieldCheck, Award, Sparkles, Building2, Command, Github, Linkedin, Globe, type LucideProps } from 'lucide-react'

const iconMap = {
  briefcase: Briefcase,
  calendar: Calendar,
  globe: Globe,
  globe2: Globe2,
  mail: Mail,
  phone: Phone,
  printer: Printer,
  location: MapPin,
  share: Share2,
  theme: SunMoon,
  profile: UserCheck,
  download: FileDown,
  languages: Languages,
  certification: ShieldCheck,
  award: Award,
  sparkles: Sparkles,
  building: Building2,
  command: Command,
  github: Github,
  linkedin: Linkedin,
  portfolio: Globe,
} satisfies Record<string, ComponentType<LucideProps>>

export type IconName = keyof typeof iconMap

export function getIcon(name: string) {
  return iconMap[name as IconName] ?? Sparkles
}
