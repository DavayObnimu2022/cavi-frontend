import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import AddPage from './pages/AddPage'
import FeedPage from './pages/FeedPage'
import GridPage from './pages/GridPage'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/grid" element={<GridPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="*" element={<Navigate to="/feed" replace />} />
      </Routes>
    </AppLayout>
  )
}
