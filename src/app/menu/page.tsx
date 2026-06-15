const menuSections = [
  {
    title: "Drinks",
    items: [
      { name: "Drip Coffee", description: "Small batch, locally roasted" },
      { name: "Cortado", description: "Double shot, steamed milk" },
      { name: "Oat Milk Latte", description: "Signature house blend" },
      { name: "Cold Brew", description: "Slow-steeped 18 hours" },
      { name: "Seasonal Latte", description: "Rotating seasonal special" },
    ],
  },
  {
    title: "Food",
    items: [
      { name: "Avocado Toast", description: "Sourdough, everything seasoning" },
      { name: "Morning Sandwich", description: "Egg, cheese, local greens" },
      { name: "House Granola Bowl", description: "Yogurt, honey, seasonal fruit" },
      { name: "Pastry of the Day", description: "Ask your barista about today's selection" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Add a shot", description: "" },
      { name: "Milk alternative", description: "Oat, almond, soy" },
      { name: "House-made syrup", description: "Ask about today's flavor" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page header */}
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-brown-dark mb-3">
          Our Menu
        </h1>
        <p className="text-muted text-lg">
          Mon &amp; Thu–Fri 9–4 · Tue, Sat &amp; Sun 9–3 · Wed closed
        </p>
        <p className="text-sm text-muted mt-2">
          Prices at the register and online.
        </p>
      </div>

      {/* Menu sections */}
      {menuSections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-brand-brown border-b border-cream-dark pb-2 mb-6">
            {section.title}
          </h2>
          <ul className="divide-y divide-cream-dark">
            {section.items.map((item) => (
              <li key={item.name} className="py-4">
                <p className="font-semibold text-ink">{item.name}</p>
                {item.description && (
                  <p className="text-sm text-muted mt-0.5">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Order CTA */}
      <div className="text-center mt-12">
        {/* TODO: wire to Square Online ordering URL */}
        <a
          href="#order"
          className="inline-flex items-center px-8 py-3.5 rounded-full bg-teal text-cream font-semibold text-base hover:bg-teal-dark transition-colors"
        >
          Order Online
        </a>
      </div>
    </div>
  );
}
