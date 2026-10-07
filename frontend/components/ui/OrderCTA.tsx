"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../util/Button";
import { useScrollNavigation } from "@/utils/scroll";
import { assets } from "@/data/assets";
import { info, type Branch } from "@/data/info";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ORDER CTA SECTION */
export default function OrderCTA() {
  const { handleScroll } = useScrollNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const infodata = info[0];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    if (!section || !bg || !content) return;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(bg, {
        scale: 1.08,
      });

      gsap.set(content, {
        opacity: 0,
        scale: 0.82,
        y: 50,
      });

      // Background zoom - plays once
      gsap.to(bg, {
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Center card reveal - plays once
      gsap.to(content, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[620px] sm:min-h-[800px] flex justify-center items-center px-4 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={assets.images.ctaBg}
          alt="People enjoying Mad Pizza"
          fill
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* Center Content Card */}
      <div
        ref={contentRef}
        className="relative w-full max-w-lg mx-auto min-h-[400px] md:min-h-[520px] aspect-[5/4] flex p-4 pb-8 lg:pb-12 overflow-hidden will-change-transform"
      >
        <Image
          src={assets.images.ctaFrame}
          alt=""
          fill
          className="object-contain lg:object-cover object-center"
        />

        <div className="relative z-10 mt-auto text-center space-y-4 w-full max-w-md mx-auto">
          <h3 className="text-dark font-geist font-bold uppercase leading-tight tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            CRAVING MAD PIZZA?
          </h3>

          <p className="text-dark font-geist text-base sm:text-lg">
            Your next pizza is only a few clicks away.
          </p>

          <div className="flex justify-center items-center gap-4">
            {
              infodata.branches.map((branch, index) => (
                <Button
                  key={index}
                  href={branch.orderUrl}
                  className="inline-block whitespace-nowrap"
                  target="_blank"
                >
                  Order {branch.name}
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}