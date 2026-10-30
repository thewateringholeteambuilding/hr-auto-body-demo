import { useState, FormEvent } from 'react'
import { Clock, Phone } from 'lucide-react'
import Seo from '../components/Seo'
import site from '../content/site.json'

const SERVICE_HINTS: Record<string, string> = {
  'Collision Repair': 'Helpful to include: which panels were hit, estimated speed of impact, whether airbags deployed.',
  'Auto Paint & Color Match': 'Helpful to include: area to be painted, whether current paint is peeling or faded, vehicle color.',
  'Frame Straightening': 'Helpful to include: point of impact, whether the car tracks straight, any dashboard warning lights.',
  'Dent & Bumper Repair': 'Helpful to include: number of dents, approximate size, whether paint is cracked.',
  'Auto Glass Replacement': 'Helpful to include: which window, type of crack or chip, whether it is spreading.',
  'Headlight Restoration': 'Helpful to include: which headlights, level of yellowing, any moisture inside the lens.',
  'Detail & Final Finish': 'Helpful to include: type of detail needed, any specific areas of concern.',
}

export default function Estimate() {
  const [service, setService] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const honeypot = (form.elements.namedItem('company_website') as HTMLInputElement)?.value
    if (honeypot) return

    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
    }, 1200)
  }

  return (
    <>
      <Seo
        title="Free Estimate | HR Auto Body | Indianapolis, IN"
        description="Get a free collision repair estimate from HR Auto Body. Drive in or send photos online. Written quote within 24 hours. 437 E Hanna Ave, Indianapolis, IN."
        path="/estimate"
      />

      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy">
                Get your free estimate
              </h1>
              <p className="mt-3 text-muted max-w-md">
                Fill out the form below and we will send a detailed written estimate within 24 hours. Or drive in during business hours for an on-the-spot quote.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website">Company Website</label>
                  <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-card border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-card border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-card border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-navy mb-1.5">
                    Year, make, and model
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    placeholder="e.g. 2021 Toyota Camry"
                    required
                    className="w-full px-4 py-3 rounded-card border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                <div>
                  <label htmlFor="service_type" className="block text-sm font-medium text-navy mb-1.5">
                    Service needed
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-card border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    <option value="">Select a service</option>
                    {site.services.map((svc) => (
                      <option key={svc.title} value={svc.title}>{svc.title}</option>
                    ))}
                  </select>
                  {service && SERVICE_HINTS[service] && (
                    <p className="mt-1.5 text-xs text-muted">{SERVICE_HINTS[service]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-navy mb-1.5">
                    Describe the damage
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-card border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 resize-y"
                  />
                </div>

                <div>
                  <label htmlFor="customer_type" className="block text-sm font-medium text-navy mb-1.5">
                    Have we worked together before?
                  </label>
                  <select
                    id="customer_type"
                    name="customer_type"
                    className="w-full px-4 py-3 rounded-card border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    <option value="new">New customer</option>
                    <option value="returning">Returning customer</option>
                    <option value="referral">Referral</option>
                  </select>
                </div>

                <div role="status" aria-live="polite">
                  {status === 'sent' && (
                    <p className="text-sm text-green-700 font-medium">
                      Estimate request received. We will get back to you within 24 hours.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm text-red-700 font-medium">
                      Something went wrong. Please call us directly.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-3.5 bg-navy text-white text-sm font-semibold rounded-card hover:bg-navy/90 transition-all disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Request sent' : 'Request free estimate'}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Insurance reminder */}
              <div className="bg-card rounded-card p-6 border border-border/50">
                <h2 className="text-lg font-semibold text-navy">We handle the insurance</h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  We file the claim, talk to the adjuster, and bill the carrier directly. You drop off the keys and pick up a finished car.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.insurance.slice(0, 5).map((ins) => (
                    <span key={ins} className="text-xs bg-navy-light text-navy/70 px-2 py-1 rounded-card font-medium">
                      {ins}
                    </span>
                  ))}
                  <span className="text-xs text-muted">+3 more</span>
                </div>
              </div>

              {/* Booking placeholder */}
              <div className="rounded-card border-2 border-dashed border-border p-8 text-center">
                <Clock className="w-8 h-8 text-muted/40 mx-auto" aria-hidden />
                <p className="mt-3 text-sm font-medium text-navy">Prefer to schedule in person?</p>
                <p className="mt-1 text-sm text-muted">
                  Walk-in estimates welcome during business hours. No appointment needed.
                </p>
                <a
                  href={site.business.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <Phone className="w-4 h-4" aria-hidden />
                  Call {site.business.phone}
                </a>
              </div>

              {/* Contact details */}
              <div className="bg-card rounded-card p-6 border border-border/50">
                <h3 className="text-sm font-semibold text-navy">Shop hours</h3>
                <div className="mt-3 text-sm text-muted space-y-1">
                  <p>{site.business.hours.weekday}</p>
                  <p>{site.business.hours.saturday}</p>
                  <p>{site.business.hours.sunday}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted">{site.business.address.full}</p>
                </div>
              </div>

              {/* Photo */}
              <img
                src="https://plus.unsplash.com/premium_photo-1661920401227-90c26cf05e39?auto=format&fit=crop&w=800&q=80"
                alt="Polishing a panel after repair"
                className="rounded-card w-full aspect-[4/3] object-cover"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:h-0" aria-hidden="true" />
    </>
  )
}
