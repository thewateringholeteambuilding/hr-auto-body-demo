import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, Phone, ChevronDown, Shield, Clock, Car, Wrench } from 'lucide-react'
import Seo from '../components/Seo'
import site from '../content/site.json'

export default function Home() {
  return (
    <>
      <Seo
        title="HR Auto Body | Collision Repair in Indianapolis, IN"
        description="4.9 stars from 136 Google reviews. Collision repair, auto paint, and frame work at 437 E Hanna Ave, Indianapolis, IN. Free estimates. Lifetime warranty."
        path="/"
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80"
            alt="Finished vehicle after collision repair at HR Auto Body"
            className="hero-kenburns w-full h-full object-cover"
            style={{ animation: 'kenburns 12s ease-out forwards' }}
            width={1600}
            height={1067}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,55%,14%)/0.92] via-[hsl(210,55%,14%)/0.5] to-[hsl(210,55%,14%)/0.15]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 w-full">
          {/* Trust row */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden />
              ))}
            </div>
            <span className="text-sm text-white/80">
              {site.business.rating} from {site.business.reviewCount} Google reviews
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-2xl">
            136 repairs reviewed.{' '}
            <span className="text-white/60">4.9 stars.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Collision repair on E Hanna Ave, Indianapolis. We handle the insurance paperwork. You get a car that looks new and a lifetime warranty in writing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/estimate"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy text-sm font-semibold rounded-card hover:bg-white/90 transition-all"
            >
              Get your free estimate
            </Link>
            <a
              href={site.business.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white text-sm font-medium rounded-card hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" aria-hidden />
              {site.business.phone}
            </a>
          </div>

          {/* Cert strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50">
            {site.certifications.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insurance Partners ── */}
      <section className="bg-navy-light section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-navy/70 font-medium">
            <span className="text-xs text-muted/60">Direct repair partner:</span>
            {site.insurance.map((ins) => (
              <span key={ins}>{ins}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4.9', label: 'Google rating' },
              { value: '136', label: 'Verified reviews' },
              { value: '3-8', label: 'Days, most repairs' },
              { value: 'Lifetime', label: 'Workmanship warranty' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-bold text-navy">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Snapshot ── */}
      <section className="section-py section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">What we repair</h2>
          <p className="mt-3 text-muted max-w-xl">
            From parking lot dings to full structural rebuilds. Every job leaves the shop with a written lifetime warranty.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {site.services.slice(0, 6).map((svc) => (
              <Link
                key={svc.title}
                to="/services"
                className="service-card bg-card p-6 block"
              >
                <h3 className="text-lg font-semibold text-navy">{svc.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">{svc.body}</p>
                <p className="mt-3 text-xs text-accent font-medium">
                  Ideal for: {svc.ideal}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-block text-sm font-medium text-navy border-b border-navy/30 hover:border-navy transition-colors pb-0.5"
            >
              View all 7 services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-py bg-navy" id="process">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
            The HR Repair Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Estimate. Insure. Repair. Return.
          </h2>
          <p className="mt-3 text-white/60 max-w-xl">
            Four steps. We tell you what happens at each one so there are no surprises.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* ── Before/After Gallery Preview ── */}
      <section className="section-py section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            See the work. Judge the finish.
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            Every vehicle photographed before and after repair. Real shop work, real results.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {site.gallery.slice(0, 4).map((item) => (
              <figure key={item.id} className="gallery-card overflow-hidden bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <figcaption className="p-3 text-xs text-muted">{item.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-block text-sm font-medium text-navy border-b border-navy/30 hover:border-navy transition-colors pb-0.5"
            >
              See all 12 photos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-py bg-card section-divider" id="reviews">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden />
              ))}
            </div>
            <span className="text-sm text-muted">
              4.9 from 136 reviews on Google
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            What customers are saying
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="bg-white rounded-card p-6 flex flex-col"
              >
                <p className="text-sm text-navy/80 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-navy">{t.author}</p>
                  <p className="text-xs text-muted mt-0.5">{t.detail}</p>
                  <p className="text-xs text-muted/60 mt-0.5">{t.date} via {t.source}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warranty ── */}
      <section className="section-py section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="bg-navy rounded-card p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-white/70" aria-hidden />
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Lifetime warranty</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Every repair. In writing. For as long as you own the car.
              </h2>
              <p className="mt-3 text-white/60 max-w-lg leading-relaxed">
                If anything we repaired fails, bring it back. We fix it at no charge. The warranty document goes home with the vehicle.
              </p>
            </div>
            <Link
              to="/estimate"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy text-sm font-semibold rounded-card hover:bg-white/90 transition-all"
            >
              Get your free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* ── Rental Car + Convenience ── */}
      <section className="section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: Car, title: 'Enterprise rental coordination', body: 'Rental car pickup arranged on your drop-off day. We handle the call.' },
              { icon: Clock, title: 'Text updates daily', body: 'Photo updates at every repair stage. No wondering, no chasing.' },
              { icon: Wrench, title: 'OEM parts when available', body: 'Factory-spec components. No shortcuts that void your manufacturer warranty.' },
            ].map((item) => (
              <div key={item.title}>
                <item.icon className="w-6 h-6 text-navy mx-auto" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-py bg-card section-divider" id="faq">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
            Common questions
          </h2>

          <div className="space-y-3">
            {site.faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + CTA ── */}
      <section className="section-py section-divider" id="location">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                437 E Hanna Ave
              </h2>
              <p className="mt-3 text-muted">
                Indianapolis, IN 46227. South side, off Shelby St. Walk-in estimates welcome during business hours.
              </p>

              <address className="mt-6 not-italic text-sm text-navy/80 space-y-1.5">
                <p>{site.business.hours.weekday}</p>
                <p>{site.business.hours.saturday}</p>
                <p>{site.business.hours.sunday}</p>
              </address>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/estimate"
                  className="px-6 py-3 bg-navy text-white text-sm font-semibold rounded-card hover:bg-navy/90 transition-all"
                >
                  Get your free estimate
                </Link>
                <a
                  href={site.business.phoneHref}
                  className="px-6 py-3 border border-navy/20 text-navy text-sm font-medium rounded-card hover:bg-navy/5 transition-all"
                >
                  Call {site.business.phone}
                </a>
              </div>
            </div>

            <div className="rounded-card overflow-hidden aspect-[4/3] bg-card">
              <iframe
                title="HR Auto Body location"
                src={`https://maps.google.com/maps?q=${site.business.mapQuery}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom padding for sticky call bar on mobile */}
      <div className="h-16 md:h-0" aria-hidden="true" />
    </>
  )
}

/* ── FAQ Accordion Item ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [a])

  return (
    <div className="bg-white rounded-card">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-navy">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: open ? `${height}px` : '0px' }}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
      >
        <p className="px-5 pb-4 text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  )
}
