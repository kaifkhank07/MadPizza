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