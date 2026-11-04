import type { ReactNode } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <div className="phone">
        <header className="status-bar">
          <span className="time">9:41</span>
          <div className="status-icons">
            <span className="signal" aria-hidden="true">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
            <svg className="wifi-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
                fill="currentColor"
              />
            </svg>
            <svg className="battery-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <rect x="4" y="8" width="10" height="8" rx="1" fill="currentColor" />
              <rect x="20" y="9" width="2" height="6" rx="1" fill="currentColor" />
            </svg>
          </div>
        </header>

        <main className="content-area">{children}</main>

        <Navbar className="bottom-nav">
          <Nav className="bottom-nav-links">
            <NavLink to="/feed" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Лента
            </NavLink>
            <Nav.Link disabled title="Доступно после входа">
              Добавление
            </Nav.Link>
            <NavLink to="/grid" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Плитка
            </NavLink>
            <Nav.Link disabled title="Доступно после входа">
              Вход
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}
