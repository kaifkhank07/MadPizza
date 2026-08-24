import { ReactNode } from "react";

interface PaperBorderProps {
  children: ReactNode;
  /** Normal background color */
  bgColor?: string;
  /** Background color on hover */
  hoverBgColor?: string;
  /** Path to the SVG mask image */
  maskSvg?: string;
  /** Extra classes */
  className?: string;
  /** Inset margin */
  inset?: string;
}

export default function PaperBorder({
  children,
  bgColor = "var(--clr-primary)",
  hoverBgColor,
  maskSvg = "/assets/Images/border cut.svg",
  className = "",
  inset = "4px",
}: PaperBorderProps) {
  const maskUrl = `url("${maskSvg}")`;

  return (
    <div
      className={`relative group overflow-hidden ${className}`}
      style={
        {
          "--paper-bg": bgColor,
          "--paper-hover-bg": hoverBgColor ?? bgColor,
        } as React.CSSProperties
      }
    >
      {/* Torn paper border */}
      <div
        className="
          absolute inset-0
          bg-[var(--paper-bg)]
          group-hover:bg-[var(--paper-hover-bg)]
          transition-colors duration-500
        "
        style={{
          maskImage: maskUrl,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskImage: maskUrl,
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative" style={{ margin: inset }}>
        {children}
      </div>
    </div>
  );
}


// import { ReactNode } from "react";

// interface PaperBorderProps {
//   children: ReactNode;
//   /** Background color for the torn border outline (e.g. "#CA2F06", "var(--clr-primary)") */
//   bgColor?: string;
//   /** Path to the SVG mask image used for the torn edge effect */
//   maskSvg?: string;
//   /** Extra classes for the outer wrapper (controls sizing, layout, etc.) */
//   className?: string;
//   /** Inset margin between the torn border and inner content area */
//   inset?: string;
// }

// export default function PaperBorder({
//   children,
//   bgColor = "var(--clr-primary)",
//   maskSvg = "/assets/Images/border cut.svg",
//   className = "",
//   inset = "4px",
// }: PaperBorderProps) {
//   const maskUrl = `url("${maskSvg}")`;

//   return (
//     <div className={`relative ${className}`}>
//       {/* Torn paper border layer */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundColor: bgColor,
//           maskImage: maskUrl,
//           maskSize: "100% 100%",
//           maskRepeat: "no-repeat",
//           WebkitMaskImage: maskUrl,
//           WebkitMaskSize: "100% 100%",
//           WebkitMaskRepeat: "no-repeat",
//         }}
//       />

//       {/* Content layer – inset to sit inside the torn border */}
//       <div className="relative" style={{ margin: inset }}>
//         {children}
//       </div>
//     </div>
//   );
// }