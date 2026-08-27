"use client";

import Image from "next/image";
import Button from "../util/Button";
import { Leaf } from "lucide-react";
import { BlurInText, FadeInLines, ViewReveal } from "../animations";
import AnimatedImage from "../animations/AnimatedImage";
import { useScrollNavigation } from "@/utils/scroll";
import { bestsellers, type BestsellerItem } from "@/data/best";

/* Sub-components */
function ContentBlock({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`bg-primary p-6 pt-8 space-y-3 shrink-0 ${className}`}>
      <Leaf size={28} color="white" />
      {/* <ViewReveal startDelay={1200} duration={1000}> */}
      <h3 className="text-off-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal uppercase leading-tight tracking-wide">
        {title}
      </h3>
      {/* </ViewReveal> */}

      {/* <ViewReveal startDelay={1200} duration={1000}> */}
      <p className="text-off-white text-sm sm:text-base md:text-lg font-light leading-snug">
        {description}
      </p>
      {/* </ViewReveal> */}
    </div >
  );
}

function ImageBlock({
  item,
  className = "",
  direction = "up",
}: {
  item: BestsellerItem;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const { handleScroll } = useScrollNavigation();
  return (
    <div className={`relative flex-1 overflow-hidden min-h-80 sm:min-h-120 aspect-square group ${className}`}>
      <AnimatedImage
        src={item.img}
        alt={item.title}
        fill
        quality={85}
        direction={direction}
        distance={15}
        duration={1.8}
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        containerClassName="absolute inset-0 h-full w-full"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

      {/* centered bottom CTA button (only when btn is present) */}
      {item.btn && (
        <div className="z-10 absolute bottom-10 left-0 w-full flex justify-center">
          <ViewReveal startDelay={1200} duration={1000}>
            <Button
              href={item.btn.href}
              onClick={(e) => handleScroll(e, item.btn!.href)}
              variant="white"
              className="inline-block"
            >
              {item.btn.text}
            </Button>
          </ViewReveal>
        </div>
      )}
    </div>
  );
}

/* Main component */
export default function Bestsellers() {
  const { handleScroll } = useScrollNavigation();
  return (
    <section className="w-full px-4 py-16 md:px-10 lg:px-16 overflow-x-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1450px] mx-auto space-y-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Left – bold primary headline */}
          <div className="max-w-3xl">
            <BlurInText
              text="Our All-Time Bestsellers. Craved By Thousands."
              as="h3"
              className="text-primary font-geist font-bold uppercase leading-tight tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              letterDelay={40}
              duration={1000}
            />
          </div>

          {/* Right – description + CTA */}
          <div className="w-full lg:max-w-lg space-y-10">
            <FadeInLines
              text="Inspired By Authentic Italian Traditions And Infused With Local Flavors, We Pride Ourselves On Using Only The Freshest Ingredients To Create A Memorable"
              as="p"
              className="text-gray-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed sm:mt-8"
            />

            <ViewReveal startDelay={1200} duration={1000}>
              <Button
                href="/#menu"
                onClick={(e) => handleScroll(e, "/#menu")}
                className="inline-block"
              >
                Order Now
              </Button>
            </ViewReveal>
          </div>
        </div>

        {/* Pizza card grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-0">
          {bestsellers.map((item) => {
            const isOdd = item.id % 2 !== 0;
            const hasContent = !!item.description;

            return (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden group"
              >
                <ImageBlock
                  item={item}
                  className={`order-1 ${!isOdd ? "lg:order-2" : "lg:order-1"}`}
                  direction={isOdd ? "down" : "up"}
                />
                {hasContent && (
                  <ContentBlock
                    title={item.title}
                    description={item.description!}
                    className={`order-2 ${!isOdd ? "lg:order-1" : "lg:order-2"}`}
                  />
                )}
              </div>
            );
          })}

          {/* Hot badge – sits on top-left corner of the grid, outside grid stacking context */}
          <div className="absolute -top-6 -left-6 sm:-top-9 sm:-left-9 z-20 w-20 sm:w-24 aspect-square flex justify-center items-center pointer-events-none">
            <Image
              src="/assets/Images/badge.png"
              alt="Hot"
              fill
              className="object-contain"
              priority
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base sm:text-lg font-kaushan text-primary">
              Hot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}