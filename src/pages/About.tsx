import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

export default function About() {
  return (
    <>
      <Seo
        title="About | HR Auto Body | Indianapolis, IN"
        description="Meet the team at HR Auto Body on E Hanna Ave, Indianapolis. I-CAR Gold Class certified. ASE Master Certified technicians. PPG Certified Refinish Center."
        path="/about"
      />

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1600&q=80"
          alt="Inside the HR Auto Body spray booth"
          className="w-full h-[340px] md:h-[420px] object-cover"
          width={1600}
          height={420}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,55%,14%)/0.8] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-6xl mx-auto px-5 md:px-8 pb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">About the shop</h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">
                Collision repair on E Hanna Ave
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  HR Auto Body sits on the south side of Indianapolis, off Shelby St. The shop handles everything from minor fender bends to full structural rebuilds, and every repair goes through the same process: written estimate, insurance coordination, daily text updates, and a clean handoff with finished photos.
                </p>
                <p>
                  The team runs a downdraft spray booth, a laser-guided frame machine, and a PPG refinish system. Every technician is I-CAR or ASE certified. The shop is a direct repair partner for eight major carriers, which means faster approvals and less runaround.
                </p>
                <p>
                  4.9 stars across 136 Google reviews. Most of those reviews mention two things: the insurance coordination and the clean return. Those are the two moments that matter most when your car has been in an accident.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1676035291793-645c307e5a4e?auto=format&fit=crop&w=800&q=80"
                alt="Hands-on bodywork in the repair bay"
                className="rounded-card w-full aspect-[4/3] object-cover"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section-py bg-card section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Certifications and standards
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {site.certifications.map((cert) => (
              <div key={cert} className="bg-white rounded-card p-5 border border-border/50">
                <p className="text-sm font-semibold text-navy">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-py section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">The team</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {site.team.map((member) => (
              <div key={member.name} className="bg-card rounded-card p-6">
                <p className="text-sm font-semibold text-navy">{member.name}</p>
                <p className="text-xs text-accent mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{member.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py bg-navy">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            136 reviews. One standard.
          </h2>
          <p className="mt-3 text-white/60">
            Walk-in estimates during business hours. Or send photos online for a written quote within 24 hours.
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
