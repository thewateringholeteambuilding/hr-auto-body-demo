import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'twh-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept(level: 'all' | 'necessary') {
    localStorage.setItem(STORAGE_KEY, level)
    setVisible(false)
    if (level === 'all' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-navy/97">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-white/70 flex-1">
          We use cookies for analytics.{' '}
          <Link to="/legal" className="text-white hover:underline">
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => accept('necessary')}
            className="px-4 py-2 text-xs font-medium border border-white/20 text-white/60 hover:border-white/40 transition-colors rounded-card"
          >
            Necessary only
          </button>
          <button
            onClick={() => accept('all')}
            className="px-4 py-2 text-xs font-semibold bg-white text-navy hover:bg-white/90 transition-all rounded-card"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}
