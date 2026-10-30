# HR Auto Body - Demo 1 Brief

**Business:** HR Auto Body
**Address:** 437 E Hanna Ave, Indianapolis, IN 46227
**Phone (demo):** (317) 555-0188
**Industry:** Auto Body / Collision Repair
**Tier:** Starter
**Style:** 5 - Warm Professional
**Palette:** cream-navy
**Google Rating:** 4.9 stars from 136 reviews
**Google Maps:** https://maps.google.com/?cid=17947808504402764991

## Pages

1. Home
2. About
3. Services
4. Gallery
5. Estimate
6. Legal (utility)

## References used

### 1. https://www.crashchampions.com
- Hero composition: Full-width banner with location-based functionality; action-first layout with phone number and map dominating above the fold
- Section order: Location/booking -> service overview -> repair process transparency -> trust affirmations -> career recruitment
- Copy voice: Conversational yet authoritative. Parallel structure ("It's who we are. It's what we do."). Varies between punchy declarations and explanatory detail. Never corporate-stiff
- Photo treatment: Documentary-style natural lighting; subjects are diverse teams and professional shop environments. People collaborating, not posing
- Trust signals: "Great Place To Work Certified," "lifetime guarantee," "manufacturer certified parts," insurance partnership claims, "founder-led" positioning. Specificity over vague assurance
- Conversion path: Location finder CTA + toll-free number above the fold; "Schedule Your Repair" CTAs throughout; appointment booking as primary action
- **Apply to this build:** (1) Phone number prominent above the fold, not buried. (2) Insurance partnership strip near hero for immediate trust. (3) Process transparency section with step-by-step breakdown. (4) Documentary-style photo selection over sterile stock. (5) Lifetime warranty as a repeated anchor point, not a throwaway line.

### 2. https://www.caliber.com
- Hero composition: Large emotionally resonant imagery with branded tagline ("Get back on track with Caliber"). Purpose-first, not feature-first
- Section order: Customer testimonials (4.8+ rating) appear early, then service categories, then heritage/values. Social proof prioritized before capabilities
- Copy voice: Warm, conversational. Branded cadence with registered phrase "Restoring the Rhythm of Your Life." Empathy-led: "We understand how much you depend on your vehicle"
- Photo treatment: Consistent, clean imagery of actual repair work and customer interactions. Professional yet approachable lighting
- Trust signals: "1,800+ centers across 44 states," "since 1997," "Forbes America's Best Employers 2026," numbered customer reviews with dates, "limited lifetime warranty"
- Conversion path: "Schedule Your Repair" as primary CTA; location finder secondary. Reviews surface early to build confidence before asking for action
- **Apply to this build:** (1) Social proof (4.9 stars, 136 reviews) surfaced high, not buried in a section below the fold. (2) Empathy-led copy acknowledging the stress of car damage without being patronizing. (3) Clean, consistent photo treatment across all pages. (4) Heritage/years-in-business as a trust signal alongside review count. (5) Branded process name for memorability.

### Cross-reference design thesis
Lead with the 4.9-star / 136-review social proof badge directly in the hero (per Caliber's early-social-proof approach), paired with a full-bleed shop photo and documentary lighting (per Crash Champions). Insurance partner strip sits immediately below hero for institutional trust. Process section uses a branded four-step flow. CTAs are action-specific ("Get Your Free Estimate," "Call Now," "See the Work") rather than generic "Learn More." Phone number visible on every viewport.

## Differentiation from Indy Auto Paint (Demo 1)

- Different hero image angle: finished car exterior / shop bay instead of paint booth
- Stronger social proof story: 4.9 / 136 reviews vs 4.6 / 30
- Different headline approach: review-count-forward instead of location-forward
- Different section ordering: testimonials earlier on Home
- Different testimonial vehicles/damage types
- Different Unsplash photos throughout

## Deploy

```
cd "Demos/Business-Commerce/HR Auto Body/Demo 1" && npx wrangler deploy
```
