import Image from "next/image";
import TopoBackground from "@/components/TopoBackground";

function RippleDivider({ id }: { id: string }) {
  const patternId = `ripple-${id}`;
  return (
    <svg
      aria-hidden="true"
      style={{ width: "100%", height: "14px", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="120" height="14" patternUnits="userSpaceOnUse">
          <path
            d="M0,7 C20,2.5 40,2.5 60,7 C80,11.5 100,11.5 120,7"
            stroke="#A0522D"
            strokeOpacity="0.22"
            strokeWidth="1.2"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill={`url(#${patternId})`} />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — type and color only, no photograph */}
      <section className="relative overflow-hidden h-[70vh] min-h-[420px] flex items-center bg-gradient-to-b from-cream-dark to-[#c9b494]">
        <TopoBackground id="topo-hero" stroke="rgba(107,68,35,0.16)" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
          <h1
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[#2c1503]"
            style={{ textShadow: "0 2px 8px rgba(44,21,3,0.20)" }}
          >
            Good coffee,<br />great river views.
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-lg text-[#6B3B1A]">
            Specialty coffee, house-made pastries, and locally sourced food.
            Open year-round in Taylors Falls, MN.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* TODO: wire to Square Online ordering URL */}
            <a
              href="#order"
              className="inline-flex items-center px-6 py-3 rounded-full bg-teal text-cream font-semibold text-base hover:bg-teal-dark transition-colors"
            >
              Order Online
            </a>
            <a
              href="/menu"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#2c1503] text-[#2c1503] font-semibold text-base hover:bg-[#2c1503]/8 transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>

      <RippleDivider id="a" />

      {/* Feature trio */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[
          { src: "/images/food-1.jpg", alt: "Chicken and waffle", label: "House-made food" },
          { src: "/images/coffee-1.jpg", alt: "Iced latte", label: "Specialty coffee" },
          { src: "/images/coffee-2.jpg", alt: "Matcha latte in the cafe", label: "Stay a while" },
        ].map(({ src, alt, label }) => (
          <div key={src} className="group flex flex-col gap-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-dark">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <p className="font-serif text-lg font-semibold text-brand-brown-dark">{label}</p>
          </div>
        ))}
      </section>

      <RippleDivider id="b" />

      {/* Visit Us */}
      <section className="bg-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown-dark mb-10">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg font-semibold text-brand-brown-dark mb-2">Location</h3>
                <address className="not-italic text-muted space-y-1">
                  <p>360 Bench St</p>
                  <p>Taylors Falls, MN</p>
                  <p className="pt-2">
                    <a href="tel:+16514410711" className="text-ink font-medium hover:text-teal transition-colors">
                      (651) 441-0711
                    </a>
                  </p>
                </address>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-brand-brown-dark mb-2">Hours</h3>
                <ul className="text-sm text-muted space-y-1.5 max-w-xs">
                  <li className="flex justify-between gap-4"><span>Monday</span><span>9:00 AM – 4:00 PM</span></li>
                  <li className="flex justify-between gap-4"><span>Tuesday</span><span>9:00 AM – 3:00 PM</span></li>
                  <li className="flex justify-between gap-4"><span>Wednesday</span><span className="text-muted/50">Closed</span></li>
                  <li className="flex justify-between gap-4"><span>Thursday</span><span>9:00 AM – 4:00 PM</span></li>
                  <li className="flex justify-between gap-4"><span>Friday</span><span>8:00 AM – 4:00 PM</span></li>
                  <li className="flex justify-between gap-4"><span>Saturday</span><span>9:00 AM – 3:00 PM</span></li>
                  <li className="flex justify-between gap-4"><span>Sunday</span><span>9:00 AM – 3:00 PM</span></li>
                </ul>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
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
        </div>
      </section>
    </>
  );
}
