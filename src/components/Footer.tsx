import TopoBackground from "@/components/TopoBackground";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-brown-dark text-cream">
      <TopoBackground id="topo-footer" stroke="rgba(250,246,239,0.07)" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg font-bold mb-2">Ripple &amp; Grind Cafe</p>
          <p className="text-sm text-cream/70">A river-town cafe in Taylors Falls, MN.</p>
        </div>

        {/* Hours & Location */}
        <div>
          <h3 className="font-serif text-base font-semibold mb-3 text-cream">Visit Us</h3>
          <ul className="space-y-1 text-sm text-cream/80">
            <li>360 Bench St</li>
            <li>Taylors Falls, MN</li>
            <li>
              <a href="tel:+16514410711" className="pt-2 font-medium text-cream hover:text-teal-light transition-colors block">
                (651) 441-0711
              </a>
            </li>
            <li>
              <a href="mailto:ripplengrind@gmail.com" className="text-cream/80 hover:text-teal-light transition-colors">
                ripplengrind@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-4 text-sm text-cream/80">
            <p className="font-semibold text-cream mb-2">Hours</p>
            <ul className="space-y-0.5">
              <li className="flex justify-between gap-4"><span>Mon</span><span>9:00 AM – 4:00 PM</span></li>
              <li className="flex justify-between gap-4"><span>Tue</span><span>9:00 AM – 3:00 PM</span></li>
              <li className="flex justify-between gap-4"><span>Wed</span><span className="text-cream/50">Closed</span></li>
              <li className="flex justify-between gap-4"><span>Thu</span><span>9:00 AM – 4:00 PM</span></li>
              <li className="flex justify-between gap-4"><span>Fri</span><span>8:00 AM – 4:00 PM</span></li>
              <li className="flex justify-between gap-4"><span>Sat</span><span>9:00 AM – 3:00 PM</span></li>
              <li className="flex justify-between gap-4"><span>Sun</span><span>9:00 AM – 3:00 PM</span></li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-serif text-base font-semibold mb-3 text-cream">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#instagram"
                className="text-cream/80 hover:text-teal-light transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#facebook"
                className="text-cream/80 hover:text-teal-light transition-colors"
              >
                Facebook
              </a>
            </li>
            <li className="pt-2">
              {/* TODO: wire to Square Online ordering URL */}
              <a
                href="#order"
                className="inline-flex items-center px-4 py-2 rounded-full bg-teal text-cream text-sm font-semibold hover:bg-teal-dark transition-colors"
              >
                Order Online
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 text-center py-4 text-xs text-cream/40">
        &copy; {new Date().getFullYear()} Ripple &amp; Grind Cafe. All rights reserved.
      </div>
    </footer>
  );
}
