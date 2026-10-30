import { Link } from 'react-router-dom'
import site from '../content/site.json'

const serviceLinks = [
  { label: 'Collision Repair', hash: 'collision-repair' },
  { label: 'Auto Paint', hash: 'auto-paint' },
  { label: 'Frame Straightening', hash: 'frame-straightening' },
  { label: 'Dent & Bumper', hash: 'dent-bumper' },
  { label: 'Auto Glass', hash: 'auto-glass' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl font-bold text-white tracking-tight">HR Auto Body</p>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Collision repair on E Hanna Ave. Honest estimates. Clean handoff. Lifetime warranty.
            </p>
            <p className="mt-4 text-xs text-white/30">
              Estimate first. Repair right. Return it clean.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4">Pages</p>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/estimate', label: 'Free Estimate' },
                { to: '/legal', label: 'Privacy & Terms' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4">Services</p>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.hash}>
                  <Link to={`/services#${s.hash}`} className="text-white/50 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4">Contact</p>
            <address className="not-italic text-sm text-white/50 space-y-2">
              <p>{site.business.address.full}</p>
              <p>
                <a href={site.business.phoneHref} className="hover:text-white transition-colors">
                  {site.business.phone}
                </a>
              </p>
              <p>{site.business.hours.weekday}</p>
              <p>{site.business.hours.saturday}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {site.business.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Website by{' '}
            <a
              href="https://thewateringhole.team"
              className="hover:text-white/40 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Watering Hole
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
