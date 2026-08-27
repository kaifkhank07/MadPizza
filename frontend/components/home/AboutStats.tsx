"use client";

import Image from "next/image";
import Button from "../util/Button";
import { BlurInText, ViewReveal } from "../animations";
import NumberRoller from "../animations/NumberRoller";
import { useScrollNavigation } from "@/utils/scroll";
import { stats, type StatItem } from "@/data/stats";

/* Sub-components */
function StatTile({ item }: { item: StatItem }) {
  return (
    <div
      id={item.id}
      className={`flex flex-col justify-center p-4 sm:p-8 md:p-12 lg:p-8 ${item.primary
        ? "bg-primary text-white"
        : "bg-off-white text-dark"
        }`}
    >
      <div className="max-w-48">
        {/* <p
          className={`font-geist font-light text-5xl sm:text-7xl mb-2 ${item.primary ? "text-white" : "text-dark"
            }`}
        >
          {item.value}
        </p> */}

        <NumberRoller
          value={item.value}
          className={`font-geist font-light text-5xl sm:text-7xl mb-2 ${item.primary ? "text-white" : "text-dark"
            }`}
        />

        <p
          className={`font-normal text-sm sm:text-md ${item.primary ? "text-white/90" : "text-dark/90"
            }`}
        >
          {item.label}
        </p>
      </div>

    </div>
  );
}

/* ABOUT & STATS SECTION */
export default function AboutStats() {
  const { handleScroll } = useScrollNavigation();
  return (
    <section className="relative w-full px-0 py-0 overflow-hidden">
      {/* Top half: dark info panel + pizza image */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left – dark panel */}
        <div className="order-2 lg:order-1 bg-primary p-4 sm:p-8 md:p-12 lg:p-16 space-y-6">
          <BlurInText
            text="We Have Been Around Since 2020!"
            as="h3"
            className="text-light font-geist font-semibold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
          />

          <ViewReveal startDelay={1000} duration={1000}>
            <p className="text-white font-normal text-base sm:text-lg">
              Describe your pizza-making process, emphasizing the use of fresh
              ingredients, traditional techniques or unique recipes that set you
              apart.
            </p>
          </ViewReveal>

          <ViewReveal startDelay={1000} duration={1000}>
            <Button
              href="/#our-story"
              onClick={(e) => handleScroll(e, "/#our-story")}
              variant="white"
              className="inline-block"
            >
              More about us
            </Button>
          </ViewReveal>

          {/* Address & Hours row */}
          <ViewReveal startDelay={1000} duration={1000}>
            <div className="grid grid-cols-2 gap-12">
              <div className="">
                <p className="text-white font-light text-base uppercase tracking-widest mb-2">
                  Find Us
                </p>

                <p className="text-white/90 text-sm">
                  100 Burrard St, New York, NY
                </p>
                <p className="text-white/90 text-sm">(347) 415-0361</p>
                <p className="text-white/90 text-sm">info@madpizza.com</p>
              </div>

              <div className="">
                <p className="text-white font-light text-base uppercase tracking-widest mb-2">
                  Opening Hours
                </p>
                <p className="text-white/90 text-sm">
                  Monday – Friday: 11AM – 10PM
                </p>
                <p className="text-white/90 text-sm">
                  Saturday: 11AM – 11PM
                </p>
                <p className="text-white/90 text-sm">
                  Sunday: 12PM – 9PM
                </p>
              </div>
            </div>
          </ViewReveal>

        </div>

        {/* Right – stacked pizza images */}
        <div className="order-1 lg:order-2 relative min-h-[320px] lg:min-h-0 overflow-hidden">
          <Image
            src="/assets/Images/stats1.jpg"
            alt="Artisan pizza being prepared"
            fill
            quality={85}
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/40" />
        </div>
      </div>

      {/* Bottom half: 2×2 stat tiles grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[460px] overflow-hidden">
          <Image
            src="/assets/Images/stats2.png"
            alt="Artisan pizza being prepared"
            fill
            quality={85}
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/40" />
        </div>

        <div className="grid grid-cols-2">
          {stats.map((item) => (
            <StatTile key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}