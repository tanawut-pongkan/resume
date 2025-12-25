import type { FooterContent } from '@/data/types'

interface FooterProps {
  footer: FooterContent
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-slate-200 py-6 text-sm text-slate-500 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-[1100px] flex-wrap justify-between gap-2 px-4 sm:px-6">
        <p>
          {footer.lastUpdatedLabel} {footer.lastUpdatedValue}
        </p>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}
