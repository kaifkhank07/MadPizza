"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Ensure SSR compatibility with useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface StaggerRevealProps {
    /** Elements to reveal */
    children: React.ReactNode;

    /** Animation duration in seconds */
    duration?: number;

    /** Delay between each child in seconds */
    stagger?: number;

    /** ScrollTrigger start position */
    start?: string;

    /** Initial vertical distance in px */
    distance?: number;

    /** Initial opacity */
    initialOpacity?: number;

    /** GSAP easing */
    ease?: string;

    /** Replay animation whenever it enters viewport */
    replayOnScroll?: boolean;

    /** Extra classes applied to the wrapper */
    className?: string;

    displayContents?: boolean;
}

export default function StaggerReveal({
    children,
    duration = 1.5,
    stagger = 0.2,
    start = "top 85%",
    distance = 40,
    initialOpacity = 0,
    ease = "power3.out",
    replayOnScroll = false,
    className = "",
    displayContents = false,
}: StaggerRevealProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useIsomorphicLayoutEffect(() => {
        const wrapper = wrapperRef.current;

        if (!wrapper) return;

        const ctx = gsap.context(() => {
            const items = wrapper.children;

            if (!items.length) return;

            gsap.set(items, {
                opacity: initialOpacity,
                y: distance,
            });

            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration,
                stagger,
                ease,
                scrollTrigger: {
                    trigger: wrapper,
                    start,
                    toggleActions: replayOnScroll
                        ? "play reverse play reverse"
                        : "play none none none",
                },
            });
        }, wrapper);

        // Next.js layout transitions might cause shifts; refresh ScrollTrigger 
        // shortly after mount/navigation to ensure accurate start markers.
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => {
            clearTimeout(timer);
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
        pathname, // Re-run animation when navigating between routes
    ]);

    return (
        <div ref={wrapperRef} className={`${displayContents ? "contents" : ""} ${className}`}>
            {children}
        </div>
    );
}