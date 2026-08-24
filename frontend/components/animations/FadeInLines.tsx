"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface FadeInLinesProps {
  /** The text to animate — split by newline (\n) or by the `splitBy` delimiter */
  text: string;
  /** Character(s) used to split the text into lines (default: "\n") */
  splitBy?: string;
  /** Delay in ms between each line appearing (default: 200) */
  lineDelay?: number;
  /** Duration in ms for each line's fade-in transition (default: 600) */
  duration?: number;
  /** Initial delay in ms before the animation starts (default: 0) */
  startDelay?: number;
  /** Extra classes applied to the outer wrapper */
  className?: string;
  /** HTML tag to render as (default: "div") */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  /** Extra classes applied to each individual line wrapper */
  lineClassName?: string;
  /** If true, replays the animation every time the element scrolls into view */
  replayOnScroll?: boolean;
  /** Direction the lines slide in from: "up", "down", "left", "right" (default: "up") */
  slideFrom?: "up" | "down" | "left" | "right";
  /** Distance in px the lines slide from (default: 20) */
  slideDistance?: number;
}

const slideTransforms: Record<string, (d: number) => string> = {
  up: (d) => `translateY(${d}px)`,
  down: (d) => `translateY(-${d}px)`,
  left: (d) => `translateX(${d}px)`,
  right: (d) => `translateX(-${d}px)`,
};

/**
 * Splits an array of words into lines that fit within the given width,
 * using the provided DOM element for measurement.
 */
function splitWordsIntoLines(
  words: string[],
  measureEl: HTMLElement,
  maxWidth: number
): string[] {
  if (words.length === 0 || maxWidth <= 0) return [];

  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    measureEl.textContent = candidate;
    const candidateWidth = measureEl.getBoundingClientRect().width;

    if (candidateWidth > maxWidth && currentLine) {
      // Current line is full — push it and start a new line with this word
      lines.push(currentLine);
      currentLine = word;
    } else {
      // Word fits (or it's the first word on an empty line) — keep building
      currentLine = candidate;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

export default function FadeInLines({
  text,
  splitBy = "\n",
  lineDelay = 200,
  duration = 600,
  startDelay = 0,
  className = "",
  as: Tag = "div",
  lineClassName = "",
  replayOnScroll = false,
  slideFrom = "up",
  slideDistance = 20,
}: FadeInLinesProps) {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  /* ── Detect whether the text uses manual delimiter splitting ── */
  const isManualSplit = text.includes(splitBy);
  const manualLines = isManualSplit
    ? text.split(splitBy).filter((line) => line.length > 0)
    : [];

  /* ── State ── */
  const [autoLines, setAutoLines] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  /* ── Derived lines ── */
  const lines = isManualSplit
    ? manualLines
    : autoLines.length > 0
      ? autoLines
      : text.trim()
        ? [text]
        : [];

  // Stable key representing the current line structure (for effect deps)
  const linesKey = lines.join("\u001f");

  /* ── Measure and split text into lines based on container width ── */
  const calculateLines = useCallback(() => {
    if (isManualSplit) return;

    const wrapper = wrapperRef.current;
    const measureEl = measureRef.current;
    if (!wrapper || !measureEl) return;

    const availableWidth = wrapper.getBoundingClientRect().width;
    if (availableWidth <= 0) return;

    const words = text.split(/\s+/).filter((w) => w.length > 0);
    if (words.length === 0) {
      setAutoLines([]);
      return;
    }

    const newLines = splitWordsIntoLines(words, measureEl, availableWidth);

    setAutoLines((prev) => {
      // Avoid unnecessary state updates if lines haven't changed
      if (
        prev.length === newLines.length &&
        prev.every((l, i) => l === newLines[i])
      ) {
        return prev;
      }
      return newLines;
    });
  }, [text, isManualSplit]);

  /* ── ResizeObserver: recalculate lines when container width changes ── */
  useEffect(() => {
    if (isManualSplit) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Initial calculation
    calculateLines();

    const resizeObserver = new ResizeObserver(() => {
      calculateLines();
    });

    resizeObserver.observe(wrapper);
    return () => resizeObserver.disconnect();
  }, [isManualSplit, calculateLines]);

  /* ── Reset animation when line structure changes ── */
  useEffect(() => {
    setVisibleCount(0);
  }, [linesKey]);

  /* ── Intersection Observer: trigger when element enters viewport ── */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          if (!replayOnScroll) observer.disconnect();
        } else if (replayOnScroll) {
          setHasStarted(false);
          setVisibleCount(0);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [replayOnScroll]);

  /* ── Line-by-line reveal timer ── */
  useEffect(() => {
    if (!hasStarted) return;

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startTimer = setTimeout(() => {
      let count = 0;
      intervalId = setInterval(() => {
        count++;
        setVisibleCount(count);
        if (count >= lines.length) clearInterval(intervalId);
      }, lineDelay);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasStarted, linesKey, lines.length, lineDelay, startDelay]);

  const hiddenTransform = slideTransforms[slideFrom](slideDistance);

  return (
    <Tag
      ref={
        wrapperRef as React.RefObject<
          HTMLElement &
          HTMLParagraphElement &
          HTMLHeadingElement &
          HTMLDivElement
        >
      }
      className={className}
      aria-label={text}
    >
      {/* Hidden measurement element — inherits typography from the wrapper,
          uses fixed positioning so it never causes scrollbars */}
      {!isManualSplit && (
        <span
          ref={measureRef}
          className={lineClassName}
          aria-hidden="true"
          style={{
            position: "fixed",
            visibility: "hidden",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            top: 0,
            left: 0,
          }}
        />
      )}

      {lines.map((line, i) => {
        const isVisible = i < visibleCount;

        return (
          <span
            key={`${i}-${line.slice(0, 10)}`}
            className={lineClassName}
            style={{
              display: "block",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translate(0, 0)" : hiddenTransform,
              transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
              willChange: "opacity, transform",
            }}
          >
            {line}
          </span>
        );
      })}
    </Tag>
  );
}