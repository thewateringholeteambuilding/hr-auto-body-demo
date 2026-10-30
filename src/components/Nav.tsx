import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import site from '../content/site.json'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') {
      setScrolled(false)
      return
    }

    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const transparent = pathname === '/' && !scrolled

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 border-b ${
        transparent
          ? 'border-transparent'
          : 'bg-white/95 backdrop-blur-md border-border/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-200 ${
              transparent ? 'text-white' : 'text-navy'
            }`}
          >
            HR Auto Body
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? transparent ? 'text-white font-medium' : 'text-navy font-medium'
                    : transparent ? 'text-white/70 hover:text-white' : 'text-muted hover:text-navy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <a
            href={site.business.phoneHref}
            className={`text-sm font-medium transition-colors duration-200 ${
              transparent ? 'text-white/70 hover:text-white' : 'text-muted hover:text-navy'
            }`}
          >
            {site.business.phone}
          </a>

          <Link
            to="/estimate"
            className="px-4 py-2 text-sm font-semibold bg-navy text-white rounded-card hover:bg-navy/90 transition-all duration-200"
          >
            Free estimate
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`md:hidden p-2 transition-colors duration-200 ${
            transparent ? 'text-white/80 hover:text-white' : 'text-muted hover:text-navy'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6L18 18M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7H20" />
                <path d="M4 17H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-white">
          <nav className="px-5 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors ${isActive ? 'text-navy font-medium' : 'text-muted'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={site.business.phoneHref} className="text-base text-muted">
              Call {site.business.phone}
            </a>
            <Link
              to="/estimate"
              onClick={() => setOpen(false)}
              className="inline-block bg-navy text-white px-4 py-3 text-sm font-semibold rounded-card text-center hover:bg-navy/90 transition-all"
            >
              Free estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
