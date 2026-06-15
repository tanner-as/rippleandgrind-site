import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-brown-dark mb-3">
          About Us
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          Ripple &amp; Grind started as a love letter to Taylors Falls — its river, its rock
          formations, and the community that calls it home.
        </p>
      </div>

      {/* Story image — constrained card, never full-bleed */}
      <div className="max-w-sm mx-auto mb-12">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-dark">
          <Image
            src="/images/food-2.jpg"
            alt="House-made food at Ripple &amp; Grind Cafe"
            fill
            className="object-cover"
            sizes="(max-width: 384px) 100vw, 384px"
            priority
          />
        </div>
      </div>

      {/* Story copy */}
      <div className="prose prose-lg max-w-none text-ink space-y-5 mb-16">
        <p>
          Ripple &amp; Grind is a family-run cafe that took root in a space with longtime ties to
          this community. We opened because we believed Taylors Falls — a river town with a lot of
          heart — deserved a coffee shop that stays open year-round, not just when the tourists
          arrive. Our goal from day one has been to be a real local staple: somewhere you can start
          your morning, linger on a slow afternoon, and always feel welcome.
        </p>
        <p>
          We work with regional roasters and source our ingredients from nearby farms when the
          seasons allow. Everything on the menu is something we&apos;d order ourselves. More than
          anything, we want this to be the kind of place you come back to every week — for the
          coffee, yes, but also because it just feels good to be here.
        </p>
      </div>

      {/* Visit — Map */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-brand-brown-dark mb-4">Visit Us</h2>
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          {/* TODO: replace with exact Google Maps embed for 360 Bench St */}
          <iframe
            src="https://maps.google.com/maps?q=Taylors+Falls,+MN&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ripple &amp; Grind Cafe location"
          />
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-cream-dark rounded-2xl p-6">
          <h2 className="font-serif text-xl font-bold text-brand-brown-dark mb-3">Find Us</h2>
          <address className="not-italic text-sm text-muted space-y-1">
            <p>360 Bench St</p>
            <p>Taylors Falls, MN</p>
            <p className="pt-2">
              <a href="tel:+16514410711" className="text-ink font-medium hover:text-teal transition-colors">
                (651) 441-0711
              </a>
            </p>
            <p>
              <a href="mailto:ripplengrind@gmail.com" className="hover:text-teal transition-colors">
                ripplengrind@gmail.com
              </a>
            </p>
          </address>
        </div>

        <div className="bg-cream-dark rounded-2xl p-6">
          <h2 className="font-serif text-xl font-bold text-brand-brown-dark mb-3">Hours</h2>
          <ul className="text-sm text-muted space-y-1">
            <li className="flex justify-between"><span>Monday</span><span>9:00 AM – 4:00 PM</span></li>
            <li className="flex justify-between"><span>Tuesday</span><span>9:00 AM – 3:00 PM</span></li>
            <li className="flex justify-between"><span>Wednesday</span><span className="text-muted/50">Closed</span></li>
            <li className="flex justify-between"><span>Thursday</span><span>9:00 AM – 4:00 PM</span></li>
            <li className="flex justify-between"><span>Friday</span><span>8:00 AM – 4:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>9:00 AM – 3:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>9:00 AM – 3:00 PM</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
