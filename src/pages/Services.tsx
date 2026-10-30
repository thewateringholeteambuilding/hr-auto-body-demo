import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'
import Seo from '../components/Seo'
import site from '../content/site.json'

const slugs = [
  'collision-repair',
  'auto-paint',
  'frame-straightening',
  'dent-bumper',
  'auto-glass',
  'headlight-restoration',
  'detail-finish',
]

export default function Services() {
  return (
    <>
      <Seo
        title="Services | HR Auto Body | Indianapolis, IN"
        description="Collision repair, auto paint and color match, frame straightening, dent repair, auto glass, headlight restoration, and detailing. Lifetime workmanship warranty."
        path="/services"
      />

      {/* ── Header ── */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-navy">Services</h1>
          <p className="mt-3 text-muted max-w-xl">
            Seven repair categories. One standard: every job gets a written estimate, daily updates, and a lifetime warranty on workmanship.
          </p>

          {/* Quick nav pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {site.services.map((svc, i) => (
              <a
                key={svc.title}
                href={`#${slugs[i]}`}
                className="text-xs font-medium text-navy bg-navy-light px-3 py-1.5 rounded-card hover:bg-navy/10 transition-colors border border-navy/10"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Sections ── */}
      <section className="section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {site.services.map((svc, i) => (
            <div
              key={svc.title}
              id={slugs[i]}
              className={`py-12 md:py-16 ${i > 0 ? 'border-t border-border/50' : ''}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-navy">{svc.title}</h2>
              <p className="mt-3 text-muted leading-relaxed max-w-prose">{svc.body}</p>
              <p className="mt-3 text-xs text-accent font-medium">
                Ideal for: {svc.ideal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-py bg-navy">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            How every repair works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {site.process.map((p) => (
              <div key={p.step}>
                <span className="text-5xl font-bold text-white/10">{p.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warranty Block ── */}
      <section className="section-py section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="bg-card rounded-card p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 border border-border/50">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-navy" aria-hidden />
                <span className="text-xs uppercase tracking-[0.2em] text-muted">Lifetime warranty</span>
              </div>
              <h2 className="text-2xl font-bold text-navy">
                Written. Transferable. Lifetime.
              </h2>
              <p className="mt-3 text-muted leading-relaxed max-w-lg">
                Every repair is backed by a written lifetime workmanship warranty. If anything we touched fails, we fix it at no charge. The warranty transfers if you sell the vehicle.
              </p>
            </div>
            <Link
              to="/estimate"
              className="shrink-0 px-6 py-3.5 bg-navy text-white text-sm font-semibold rounded-card hover:bg-navy/90 transition-all"
            >
              Get your free estimate
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:h-0" aria-hidden="true" />
    </>
  )
}
