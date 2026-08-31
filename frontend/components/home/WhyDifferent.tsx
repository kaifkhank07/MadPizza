"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PaperBorder from "../util/PaperBorder";
import { BlurInText } from "../animations";
import StaggerReveal from "../animations/StaggerReveal";
import { features, type FeatureItem } from "@/data/feature";
import { assets } from "@/data/assets";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Sub-components */
function FeatureCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <PaperBorder
      bgColor="#FFF6ED"
      hoverBgColor="var(--clr-primary)"
      className="w-full"
    >
      <div
        id={id}
        className="group bg-[#FFF6ED] hover:bg-primary p-6 pt-8 space-y-3 rounded-md transition-colors duration-500"
      >
        <h3 className="text-[#C92E05] group-hover:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium uppercase leading-tight tracking-wide transition-colors duration-500">
          {title}
        </h3>

        <p className="text-[#E85A2A] group-hover:text-white text-base sm:text-lg md:text-xl font-light leading-snug transition-colors duration-500">
          {description}
        </p>
      </div>
    </PaperBorder>
  );
}

/* Main component */
export default function WhyDifferent() {
  const sectionRef = useRef<HTMLElement>(null);

  const leftIconRef = useRef<HTMLDivElement>(null);
  const topRightIconRef = useRef<HTMLDivElement>(null);
  const bottomRightIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const leftIcon = leftIconRef.current;
    const topRightIcon = topRightIconRef.current;
    const bottomRightIcon = bottomRightIconRef.current;

    if (!section || !leftIcon || !topRightIcon || !bottomRightIcon) {
      return;
    }

    const ctx = gsap.context(() => {
      // Initial positions
      gsap.set(leftIcon, {
        x: -100,
        opacity: 0,
      });

      gsap.set(topRightIcon, {
        x: 100,
        opacity: 0,
      });

      gsap.set(bottomRightIcon, {
        x: 100,
        opacity: 0,
      });

      // LEFT IMAGE
      gsap.to(leftIcon, {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: leftIcon,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // TOP RIGHT IMAGE
      gsap.to(topRightIcon, {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: topRightIcon,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // BOTTOM RIGHT IMAGE
      gsap.to(bottomRightIcon, {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: bottomRightIcon,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Subtle scroll movement after entering
      gsap.to(leftIcon, {
        y: 50,
        rotation: 8,
        ease: "none",

        scrollTrigger: {
          trigger: leftIcon,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      gsap.to(topRightIcon, {
        y: 60,
        rotation: -8,
        ease: "none",

        scrollTrigger: {
          trigger: topRightIcon,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      gsap.to(bottomRightIcon, {
        y: -50,
        rotation: 8,
        ease: "none",

        scrollTrigger: {
          trigger: bottomRightIcon,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative w-full px-4 py-24 md:px-10 lg:px-16 overflow-hidden scroll-mt-24"
    >
      {/* Background pizza image */}
      <Image
        src={assets.images.featureBg}
        alt="Pizza restaurant background"
        fill
        quality={80}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* LEFT FLOATING IMAGE */}
      <div
        ref={leftIconRef}
        aria-hidden="true"
        className="absolute top-8 left-8 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 z-10"
      >
        <Image
          src={assets.images.decore1}
          alt=""
          fill
          className="object-contain drop-shadow-lg"
          sizes="80px"
        />
      </div>

      {/* TOP RIGHT FLOATING IMAGE */}
      <div
        ref={topRightIconRef}
        aria-hidden="true"
        className="absolute top-6 right-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 z-10"
      >
        <Image
          src={assets.images.decore2}
          alt=""
          fill
          className="object-contain drop-shadow-lg"
          sizes="80px"
        />
      </div>

      {/* BOTTOM RIGHT FLOATING IMAGE */}
      <div
        ref={bottomRightIconRef}
        aria-hidden="true"
        className="absolute bottom-10 right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 z-10"
      >
        <Image
          src={assets.images.decore3}
          alt=""
          fill
          className="object-contain drop-shadow-lg"
          sizes="100px"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative w-full max-w-6xl z-10 mx-auto space-y-16">

        {/* Section heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <BlurInText
            text="Why Our Pizza Is Different"
            as="h3"
            className="text-light font-geist font-bold uppercase leading-tight tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          />

          <p className="text-light-gray text-base sm:text-lg md:text-xl font-light leading-relaxed">
            We don&apos;t compromise on quality. Every ingredient is carefully
            selected and every pizza is crafted with passion and tradition.
          </p>
        </div>

        {/* Feature cards */}
        <StaggerReveal
          duration={1.5}
          stagger={0.2}
          distance={40}
          start="top 85%"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-12"
        >
          {features.map((item) => (
            <FeatureCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}