"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-cream-dark shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo.jpg"
            alt="Ripple & Grind Cafe logo"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="font-serif text-xl font-bold text-brand-brown-dark leading-tight tracking-tight group-hover:text-brand-brown transition-colors">
            Ripple &amp; Grind
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-ink hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* TODO: wire to Square Online ordering URL */}
          <a
            href="#order"
            className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-teal text-cream text-sm font-semibold hover:bg-teal-dark transition-colors"
          >
            Order Online
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-brand-brown hover:bg-cream-dark transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-4 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-base font-medium text-ink hover:text-teal transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          {/* TODO: wire to Square Online ordering URL */}
          <a
            href="#order"
            className="mt-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-teal text-cream text-sm font-semibold hover:bg-teal-dark transition-colors"
          >
            Order Online
          </a>
        </div>
      )}
    </header>
  );
}
