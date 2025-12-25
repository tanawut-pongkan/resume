import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'

import { ToastProvider as RadixToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, type ToastVariant } from '@/components/ui/toast'

interface ToastMessage {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
}

interface ToastContextValue {
  notify: (toast: Omit<ToastMessage, 'id'>) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastManager({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const notify = useCallback(
    ({ title, description, variant }: Omit<ToastMessage, 'id'>) => {
      const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2)
      setToasts((current) => [{ id, title, description, variant }, ...current].slice(0, 3))
      return id
    },
    [],
  )

  const value = useMemo(() => ({ notify }), [notify])

  return (
    <ToastContext.Provider value={value}>
      <RadixToastProvider swipeDirection="right" duration={3000}>
        {children}
        <ToastViewport />
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            open
            onOpenChange={(open) => {
              if (!open) dismiss(toast.id)
            }}
            variant={toast.variant}
          >
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            <ToastClose onClick={() => dismiss(toast.id)} aria-label="Dismiss" />
          </Toast>
        ))}
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastManager')
  }
  return context
}
