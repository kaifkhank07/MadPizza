"use client";

import { useEffect, useRef, useState } from "react";

interface BlurInTextProps {
  text: string;
  letterDelay?: number;
  duration?: number;
  startDelay?: number;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

export default function BlurInText({
  text,
  letterDelay = 40,
  duration = 400,
  startDelay = 0,
  className = "",
  as: Tag = "span",
}: BlurInTextProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const wrapperRef = useRef<HTMLElement | null>(null);

  const words = text.trim().split(/\s+/);

  const totalCharacters = words.reduce(
    (total, word) => total + word.length,
    0
  );

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    let interval: ReturnType<typeof setInterval> | null = null;
    let startTimer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // Start only once
        observer.disconnect();

        startTimer = setTimeout(() => {
          let count = 0;

          interval = setInterval(() => {
            count += 1;

            setVisibleCount(count);

            if (count >= totalCharacters) {
              if (interval) {
                clearInterval(interval);
                interval = null;
              }
            }
          }, letterDelay);
        }, startDelay);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (startTimer) {
        clearTimeout(startTimer);
      }

      if (interval) {
        clearInterval(interval);
      }
    };
  }, [letterDelay, startDelay, totalCharacters]);

  let characterIndex = 0;

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
      {words.map((word, wordIndex) => {
        const characters = word.split("");

        return (
          <span
            key={`${wordIndex}-${word}`}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {characters.map((char, charIndex) => {
              const currentIndex = characterIndex;
              characterIndex += 1;

              const isVisible = currentIndex < visibleCount;

              return (
                <span
                  key={`${wordIndex}-${charIndex}-${char}`}
                  style={{
                    display: "inline-block",
                    filter: isVisible
                      ? "blur(0px)"
                      : "blur(12px)",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(6px)",
                    transition: `
                      filter ${duration}ms ease-out,
                      opacity ${duration}ms ease-out,
                      transform ${duration}ms ease-out
                    `,
                    willChange: "filter, opacity, transform",
                  }}
                >
                  {char}
                </span>
              );
            })}

            {wordIndex < words.length - 1 && (
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "0.25em",
                }}
              />
            )}
          </span>
        );
      })}
    </Tag>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// interface BlurInTextProps {
//   /** The text string to animate letter by letter */
//   text: string;

//   /** Delay in ms between each letter appearing */
//   letterDelay?: number;

//   /** Duration in ms for each letter's blur-in transition */
//   duration?: number;

//   /** Initial delay in ms before the animation starts */
//   startDelay?: number;

//   /** Extra classes applied to the outer wrapper */
//   className?: string;

//   /** HTML tag to render */
//   as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

//   /** If true, replays the animation every time the element scrolls into view */
//   replayOnScroll?: boolean;
// }

// export default function BlurInText({
//   text,
//   letterDelay = 40,
//   duration = 400,
//   startDelay = 0,
//   className = "",
//   as: Tag = "span",
//   replayOnScroll = false,
// }: BlurInTextProps) {
//   const [visibleCount, setVisibleCount] = useState(0);
//   const [hasStarted, setHasStarted] = useState(false);

//   const wrapperRef = useRef<HTMLElement | null>(null);

//   /*
//    * Split only by words.
//    *
//    * Each word is rendered as an inline-block so the browser
//    * cannot break a word between two lines.
//    */
//   const words = text.trim().split(/\s+/);

//   /*
//    * Total number of animated characters.
//    */
//   const totalCharacters = words.reduce(
//     (total, word) => total + word.length,
//     0
//   );

//   /* ── Intersection Observer ── */
//   useEffect(() => {
//     const el = wrapperRef.current;

//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHasStarted(true);

//           if (!replayOnScroll) {
//             observer.disconnect();
//           }
//         } else if (replayOnScroll) {
//           setHasStarted(false);
//           setVisibleCount(0);
//         }
//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     observer.observe(el);

//     return () => observer.disconnect();
//   }, [replayOnScroll]);

//   /* ── Letter-by-letter animation ── */
//   useEffect(() => {
//     if (!hasStarted || totalCharacters === 0) return;

//     let interval: ReturnType<typeof setInterval> | null = null;

//     const startTimer = setTimeout(() => {
//       let count = 0;

//       interval = setInterval(() => {
//         count += 1;

//         setVisibleCount(count);

//         if (count >= totalCharacters && interval) {
//           clearInterval(interval);
//           interval = null;
//         }
//       }, letterDelay);
//     }, startDelay);

//     return () => {
//       clearTimeout(startTimer);

//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   }, [
//     hasStarted,
//     totalCharacters,
//     letterDelay,
//     startDelay,
//   ]);

//   /*
//    * Keeps track of the global character index across all words.
//    */
//   let characterIndex = 0;

//   return (
//     <Tag
//       ref={
//         wrapperRef as React.RefObject<
//           HTMLElement &
//           HTMLParagraphElement &
//           HTMLHeadingElement &
//           HTMLDivElement
//         >
//       }
//       className={className}
//       aria-label={text}
//     >
//       {words.map((word, wordIndex) => {
//         const characters = word.split("");

//         return (
//           <span
//             key={`${wordIndex}-${word}`}
//             style={{
//               display: "inline-block",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {characters.map((char, charIndex) => {
//               const currentIndex = characterIndex;
//               characterIndex += 1;

//               const isVisible = currentIndex < visibleCount;

//               return (
//                 <span
//                   key={`${wordIndex}-${charIndex}-${char}`}
//                   style={{
//                     display: "inline-block",
//                     filter: isVisible
//                       ? "blur(0px)"
//                       : "blur(12px)",
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible
//                       ? "translateY(0)"
//                       : "translateY(6px)",
//                     transition: `
//                       filter ${duration}ms ease-out,
//                       opacity ${duration}ms ease-out,
//                       transform ${duration}ms ease-out
//                     `,
//                     willChange:
//                       "filter, opacity, transform",
//                   }}
//                 >
//                   {char}
//                 </span>
//               );
//             })}

//             {/* Preserve the space between words */}
//             {wordIndex < words.length - 1 && (
//               <span
//                 aria-hidden="true"
//                 style={{
//                   display: "inline-block",
//                   width: "0.25em",
//                 }}
//               />
//             )}
//           </span>
//         );
//       })}
//     </Tag>
//   );
// }