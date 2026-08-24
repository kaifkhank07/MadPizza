"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SequenceRevealProps {
  children: React.ReactNode;

  /** Animation duration for each child */
  duration?: number;

  /** Delay after one child completes before the next starts */
  stagger?: number;

  /** ScrollTrigger start position */
  start?: string;

  /** Initial Y position */
  distance?: number;

  /** Initial opacity */
  initialOpacity?: number;

  /** GSAP easing */
  ease?: string;

  /** Replay when entering viewport */
  replayOnScroll?: boolean;

  /** Extra wrapper classes */
  className?: string;
}

export default function SequenceReveal({
  children,
  duration = 1,
  stagger = 0.3,
  start = "top 85%",
  distance = 40,
  initialOpacity = 0,
  ease = "power3.out",
  replayOnScroll = false,
  className = "",
}: SequenceRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const ctx = gsap.context(() => {
      const items = Array.from(wrapper.children) as HTMLElement[];

      if (!items.length) return;

      // Initial state
      gsap.set(items, {
        opacity: initialOpacity,
        y: distance,
      });

      // Create timeline
      const timeline = gsap.timeline({
        paused: true,
      });

      // Add each animation one after another
      items.forEach((item) => {
        timeline.to(item, {
          opacity: 1,
          y: 0,
          duration,
          ease,
        });

        // Delay AFTER this animation completes
        timeline.to({}, { duration: stagger });
      });

      // Remove unnecessary delay after the last item
      timeline.duration(timeline.duration() - stagger);

      ScrollTrigger.create({
        trigger: wrapper,
        start,
        once: !replayOnScroll,

        onEnter: () => {
          timeline.restart();
        },

        onEnterBack: () => {
          if (replayOnScroll) {
            timeline.restart();
          }
        },
      });
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, [
    duration,
    stagger,
    start,
    distance,
    initialOpacity,
    ease,
    replayOnScroll,
  ]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}