import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function Legal() {
  return (
    <>
      <Seo
        title="Privacy & Terms | HR Auto Body"
        description="Privacy policy, terms of service, and warranty terms for HR Auto Body."
        path="/legal"
        noindex
      />

      <div className="pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-navy transition-colors mb-8"
          >
            &larr; Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-navy mb-10">Privacy & Terms</h1>

          <div className="space-y-12 text-sm text-muted leading-relaxed">
            {/* Privacy */}
            <section>
              <h2 className="text-xl font-bold text-navy mb-4">Privacy Policy</h2>
              <p>
                HR Auto Body collects personal information (name, phone number, email, vehicle details) solely for the purpose of providing collision repair estimates and services. We do not sell, trade, or share your personal information with third parties, except as required to process your repair (e.g., communicating with your insurance carrier on your behalf).
              </p>
              <p className="mt-3">
                This website uses Google Analytics 4 with Consent Mode v2. Analytics data is only collected after you accept cookies. You may decline analytics cookies and the site will function normally.
              </p>
              <p className="mt-3">
                Contact form submissions are transmitted securely and stored only for the purpose of responding to your inquiry. We retain form data for up to 12 months and then delete it.
              </p>
            </section>

            {/* Terms */}
            <section>
              <h2 className="text-xl font-bold text-navy mb-4">Terms of Service</h2>
              <p>
                This website is provided for informational purposes. The content on this site, including service descriptions, timelines, and pricing estimates, is general in nature and may not reflect the specific scope of your repair. A formal written estimate is provided for every job before work begins.
              </p>
              <p className="mt-3">
                Photographs shown on this site represent real repair work from auto body shops. Individual results vary based on vehicle condition, damage severity, and parts availability.
              </p>
            </section>

            {/* Warranty */}
            <section>
              <h2 className="text-xl font-bold text-navy mb-4">Warranty Terms</h2>
              <p>
                HR Auto Body provides a lifetime workmanship warranty on all repairs performed at our facility. This warranty covers defects in workmanship for as long as the original customer owns the vehicle. The warranty is transferable to subsequent owners.
              </p>
              <p className="mt-3">
                The warranty does not cover damage resulting from subsequent accidents, misuse, neglect, or normal wear and tear. Paint warranty coverage may vary based on environmental exposure and vehicle care. Full warranty terms are provided in writing at the time of repair completion.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
