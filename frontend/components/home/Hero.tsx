"use client";

import Button from "../util/Button";
import { BlurInText, ViewReveal } from "../animations";
import { useScrollNavigation } from "@/utils/scroll";

export default function Hero() {
  const { handleScroll } = useScrollNavigation();
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center sm:items-end justify-start px-4 py-20 md:px-10 lg:px-16 overflow-hidden">
      {/* ── Background Image ── */}
      {/* <Image
        src="/assets/Images/feature-bg.jpg"
        alt="Wood-fired pizza oven with fresh pizzas"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      /> */}
      <video
        src="/assets/Videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover object-center w-full h-full"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />

      {/* ── Dark overlay for readability ── */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* ── Warm orange tint at bottom (oven glow effect) ── */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#4a1a00]/60 via-transparent to-transparent" /> */}

      <div className="relative w-full max-w-7xl 2xl:max-w-[1450px] mx-auto">
        {/* ── Content ── */}
        <div className="max-w-4xl space-y-8">
          {/* Headline */}
          <BlurInText
            text="Crafted to Perfection. Baked with Passion."
            as="h1"
            className="text-white font-geist font-bold uppercase tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            letterDelay={40}
            duration={1000}
          />

          {/* CTA Button */}
          <ViewReveal startDelay={1600} duration={1000}>
            <Button
              variant="white"
              href="/#menu"
              onClick={(e) => handleScroll(e, "/#menu")}
              className="inline-block"
            >
              Order Now
            </Button>
          </ViewReveal>
        </div>
      </div>
    </section>
  );
}