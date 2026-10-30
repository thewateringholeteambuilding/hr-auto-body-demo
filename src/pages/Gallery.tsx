import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | HR Auto Body | Indianapolis, IN"
        description="Photos from the HR Auto Body shop floor. Collision repair, paint work, frame straightening, and finished vehicles. 4.9 stars from 136 reviews."
        path="/gallery"
      />

      {/* ── Header ── */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-navy">
            Before the estimate. After the handoff.
          </h1>
          <p className="mt-3 text-muted max-w-xl">
            Real work from the shop floor. Every vehicle photographed during the repair process.
          </p>

          {/* Gallery metrics strip */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <span className="text-navy font-medium">12 photos</span>
            <span className="text-muted">4.9 Google rating</span>
            <span className="text-muted">136 verified reviews</span>
            <span className="text-muted">Lifetime warranty on every repair</span>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="section-divider pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {site.gallery.map((item) => (
              <figure key={item.id} className="gallery-card overflow-hidden bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <figcaption className="p-4">
                  <p className="text-sm font-medium text-navy">{item.title}</p>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py bg-navy">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Your car is next
          </h2>
          <p className="mt-3 text-white/60">
            Walk in for a free estimate or send photos online. Written quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/estimate"
              className="px-6 py-3.5 bg-white text-navy text-sm font-semibold rounded-card hover:bg-white/90 transition-all"
            >
              Get your free estimate
            </Link>
            <a
              href={site.business.phoneHref}
              className="px-6 py-3.5 border border-white/30 text-white text-sm font-medium rounded-card hover:bg-white/10 transition-all"
            >
              Call {site.business.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 md:h-0" aria-hidden="true" />
    </>
  )
}
