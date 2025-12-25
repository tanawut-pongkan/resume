import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
}

export function Container({ children, className }: PropsWithChildren<ContainerProps>) {
  return <div className={cn('mx-auto w-full max-w-[1100px] px-4 sm:px-6', className)}>{children}</div>
}
