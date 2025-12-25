import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'
import { SettingsProvider } from '@/providers/settings-provider'
import { ResumeProvider } from '@/providers/resume-provider'
import { ToastManager } from '@/providers/toast-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <ToastManager>
        <BrowserRouter>
          <ResumeProvider>
            <App />
          </ResumeProvider>
        </BrowserRouter>
      </ToastManager>
    </SettingsProvider>
  </StrictMode>,
)
