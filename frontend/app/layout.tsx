import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrderModalProvider } from "@/components/util/OrderModalContext";
import "./globals.css";

// ── Kanit (default body font) ────────────────────────────────────────────────
const kanit = localFont({
  src: [
    { path: "../public/fonts/Kanit/Kanit-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Kanit/Kanit-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Kanit/Kanit-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Kanit/Kanit-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Kanit/Kanit-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-kanit",
  display: "swap",
});

// ── Geist (secondary / code-adjacent font) ───────────────────────────────────
const geist = localFont({
  src: [
    { path: "../public/fonts/Geist/Geist-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Geist/Geist-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Geist/Geist-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Geist/Geist-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Geist/Geist-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-geist",
  display: "swap",
});

// ── Kaushan (secondary / code-adjacent font) ───────────────────────────────────
const kaushan = localFont({
  src: [
    { path: "../public/fonts/Kaushan_Script/KaushanScript-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-kaushan",
  display: "swap",
});

import { assets } from "@/data/assets";

export const metadata: Metadata = {
  title: "Mad Pizza",
  description: "Delicious pizzas, crafted with passion.",
  icons: {
    icon: assets.images.madPizzaLogo,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${geist.variable} ${kaushan.variable} h-full antialiased`}
    >
      <body className="font-kanit min-h-full flex flex-col">
        <OrderModalProvider>
          <Navbar />
          {children}
          <Footer />
        </OrderModalProvider>
      </body>
    </html>
  );
}
