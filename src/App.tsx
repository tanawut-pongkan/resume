import { Navigate, Route, Routes } from 'react-router-dom'

import { ResumeRoute } from '@/routes/ResumeRoute'
import { useResume } from '@/providers/resume-provider'

function AppRouter() {
  const { locale } = useResume()

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${locale}`} replace />} />
      <Route path="/:locale" element={<ResumeRoute />} />
      <Route path="*" element={<Navigate to={`/${locale}`} replace />} />
    </Routes>
  )
}

export function App() {
  return <AppRouter />
}

export default App
