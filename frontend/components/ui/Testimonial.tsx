"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";

/* Swiper core CSS */
import "swiper/css";
import { testimonials, type TestimonialItem } from "@/data/testimonial";
import { assets } from "@/data/assets";

/* Sub-components */
function ArrowBtn({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick: () => void;
}) {
  return (


    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous review" : "Next review"}
      className="relative shrink-0 w-16 h-16 aspect-square hover:opacity-90 text-dark flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
    >
      <Image
        src={
          dir === "left"
            ? assets.images.arrow
            : assets.images.arrow
        }
        alt={dir === "left" ? "Previous" : "Next"}
        fill
        className={`object-contain ${dir === "left" ? "" : "rotate-180"}`}
      />
    </button>

  );
}

/* TESTIMONIAL SECTION */
export default function Testimonial() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  /* Refs for GSAP targets */
  const photoRef = useRef<HTMLDivElement>(null);
  const quoteTextRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  const animateIn = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (photoRef.current)
      tl.fromTo(photoRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, 0);
    if (quoteTextRef.current)
      tl.fromTo(quoteTextRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0.2);
    if (nameRef.current)
      tl.fromTo(nameRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.35);
  };

  /* Run once on mount */
  useEffect(() => { animateIn(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIdx(swiper.realIndex);
    animateIn();
  };

  return (
    <section className="relative w-full px-4 py-16 sm:py-20 md:py-24 md:px-10 lg:px-16 overflow-hidden">

      {/* Background pizza image */}
      <Image
        src={assets.images.featureBg}
        alt="Pizza restaurant background"
        fill
        quality={75}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Arrow + Swiper row */}
        <div className="flex items-center gap-3 sm:gap-5 justify-center">
          <ArrowBtn dir="left" onClick={() => swiperRef.current?.slidePrev()} />

          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              speed={600}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={handleSlideChange}
              className="w-full"
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={item.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">

                    {/* Person photo — red torn-paper card */}
                    <div
                      ref={i === activeIdx ? photoRef : undefined}
                      className="relative bg-primary rounded-md p-3 sm:p-4 md:p-5 aspect-[4/5] torn-paper"
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-md torn-paper">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          quality={85}
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                        />
                      </div>
                    </div>

                    {/* Quote + text — white torn-paper card */}
                    <div className="relative bg-white rounded-md p-4 sm:p-5 md:p-6 lg:py-12 aspect-[4/5] torn-paper text-center flex flex-col items-center justify-between">
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center gap-2">
                          <Image src={assets.images.decore6} alt="" width={60} height={60} />
                        </div>

                        <p
                          ref={i === activeIdx ? quoteTextRef : undefined}
                          className="text-gray-500 font-light italic text-sm sm:text-base leading-relaxed"
                        >
                          {item.quote}
                        </p>
                      </div>

                      <div
                        ref={i === activeIdx ? nameRef : undefined}
                        className="pt-3 border-t border-gray-200 w-full text-center"
                      >
                        <p className="text-gray-900 font-geist font-bold uppercase tracking-widest text-sm">
                          {item.name}
                        </p>
                        <p className="text-gray-500 font-light text-xs uppercase tracking-wider mt-0.5">
                          {item.role}
                        </p>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <ArrowBtn dir="right" onClick={() => swiperRef.current?.slideNext()} />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? "w-6 bg-primary" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}