import type { Metadata, Viewport } from "next";
import { Eczar, Mukta } from "next/font/google";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";
import Providers from "@/components/Providers";

// Hides the first viewport for the intro only when motion is allowed and JS runs.
// CSS reveals it after 2.5s regardless, so a failed script never leaves it blank.
const introScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-intro','')`;

const eczar = Eczar({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const mukta = Mukta({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3100"),
  title: "Commerce & Industries Department, Government of Sikkim",
  description:
    "Invest in India's first organic state. Policy, incentives, schemes, tenders and District Industries Centres from the Commerce & Industries Department, Government of Sikkim.",
  openGraph: {
    title: "Invest in Sikkim | Commerce & Industries Department",
    description:
      "₹30,000 Cr of investment invited across 16 green and future-ready sectors. Incentives, schemes and tenders in one place.",
    images: [{ url: "/img/hero-emporium-1000.webp", width: 1000, height: 668 }],
    type: "website",
    locale: "en_IN",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1B1A17",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${eczar.variable} ${mukta.variable}`} suppressHydrationWarning>
      {/* Extensions such as ColorZilla add attributes to <body> before React loads */}
      <body suppressHydrationWarning>
        <Script id="intro-gate" strategy="beforeInteractive">
          {introScript}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
