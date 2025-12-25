import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider
const ToastViewport = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>>(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        'fixed top-3 right-3 z-[100] flex max-h-screen w-full max-w-sm flex-col gap-2 p-2 sm:top-4 sm:right-4',
        className,
      )}
      {...props}
    />
  ),
)
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-start justify-between space-x-4 overflow-hidden rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-subtle transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:fade-in-90 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full dark:border-slate-800 dark:bg-slate-900',
  {
    variants: {
      variant: {
        default: 'text-slate-800',
        success: 'border-emerald-100 bg-emerald-50 text-emerald-900',
        warning: 'border-amber-200 bg-amber-50 text-amber-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Root>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>>(
  ({ className, variant, ...props }, ref) => {
    return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
  },
)
Toast.displayName = ToastPrimitives.Root.displayName

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
  ),
)
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Description>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>>(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Description ref={ref} className={cn('text-sm text-slate-600', className)} {...props} />
  ),
)
ToastDescription.displayName = ToastPrimitives.Description.displayName

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>>(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Close ref={ref} className={cn('absolute right-3 top-3 inline-flex text-slate-400 hover:text-slate-600', className)} {...props} />
  ),
)
ToastClose.displayName = ToastPrimitives.Close.displayName

export type ToastVariant = VariantProps<typeof toastVariants>['variant']

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose }
