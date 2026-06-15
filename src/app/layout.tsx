import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ripple & Grind Cafe, Taylors Falls MN",
  description:
    "A cozy river-town cafe in Taylors Falls, MN. Specialty coffee, house-made pastries, and locally sourced food.",
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Ripple & Grind Cafe",
    description: "Specialty coffee, house-made pastries, and locally sourced food in Taylors Falls, MN.",
    images: [{ url: "/images/logo.jpg", width: 400, height: 400, alt: "Ripple & Grind Cafe logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
