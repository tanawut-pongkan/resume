import * as React from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Command } from 'cmdk'
import { cn } from '@/lib/utils'

interface CommandDialogProps extends React.ComponentProps<typeof Dialog> {}

export function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="max-w-xl p-0 shadow-subtle">
        <Command className="flex w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-700 focus-visible:outline-none dark:border-slate-800 dark:bg-slate-900">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export const CommandInput = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Command.Input>>(
  ({ className, ...props }, ref) => (
    <div className="flex items-center border-b border-slate-200 px-4 dark:border-slate-800">
      <Command.Input
        ref={ref as any}
        className={cn(
          'h-12 w-full bg-transparent text-sm outline-none placeholder:text-slate-400',
          className,
        )}
        {...props}
      />
    </div>
  ),
)
CommandInput.displayName = 'CommandInput'

export const CommandList = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Command.List>>(
  ({ className, ...props }, ref) => (
    <Command.List ref={ref as any} className={cn('max-h-[360px] overflow-y-auto px-2 py-3', className)} {...props} />
  ),
)
CommandList.displayName = 'CommandList'

export const CommandGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Command.Group>>(
  ({ className, ...props }, ref) => (
    <Command.Group
      ref={ref as any}
      className={cn('px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-4', className)}
      {...props}
    />
  ),
)
CommandGroup.displayName = 'CommandGroup'

export const CommandItem = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Command.Item>>(
  ({ className, ...props }, ref) => (
    <Command.Item
      ref={ref as any}
      className={cn(
        'relative flex cursor-pointer select-none items-center gap-3 rounded-md px-3 py-2 text-sm outline-none transition-colors data-[selected=true]:bg-accent/15 data-[selected=true]:text-slate-900',
        className,
      )}
      {...props}
    />
  ),
)
CommandItem.displayName = 'CommandItem'

export const CommandEmpty = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Command.Empty>>(
  ({ className, ...props }, ref) => (
    <Command.Empty ref={ref as any} className={cn('px-4 py-6 text-center text-sm text-slate-400', className)} {...props} />
  ),
)
CommandEmpty.displayName = 'CommandEmpty'

export const CommandSeparator = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Command.Separator>>(
  ({ className, ...props }, ref) => (
    <Command.Separator ref={ref as any} className={cn('my-2 h-px bg-slate-200', className)} {...props} />
  ),
)
CommandSeparator.displayName = 'CommandSeparator'
