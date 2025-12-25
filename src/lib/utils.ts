import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateRange(range?: { start: string; end?: string }) {
  if (!range) return ''
  const { start, end } = range
  return end ? `${start} – ${end}` : `${start} – Present`
}

export function toKebabCase(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
