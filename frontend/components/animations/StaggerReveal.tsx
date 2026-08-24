"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

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

    useEffect(() => {
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
        <div ref={wrapperRef} className={`${displayContents ? "contents" : ""} ${className}`}>
            {children}
        </div>
    );
}