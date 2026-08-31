"use client";

import Image from "next/image";
import Link from "next/link";

import { StaggerReveal } from "../animations";
import { info } from "@/data/info";
import { assets } from "@/data/assets";
import { useOrderModal } from "../util/OrderModalContext";

/* Types */
type NavLink = { label: string; href: string };

/* Data */
const mainPages: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#our-story" },
  { label: "Menu", href: "/#menu" },
  // { label: "Contact Us", href: "/#contact" },
];

const legalPages: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const infodata = info[0];
const socials = infodata.socials ?? [];
const schedule = infodata.schedule ?? [];

/* Sub-components */
function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-white font-geist font-bold tracking-wide text-xl lg:text-2xl">
      {children}
    </h4>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block text-white/70 font-kanit font-light text-base lg:text-lg hover:text-white transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

/* FOOTER */
export default function Footer() {
  const { openModal } = useOrderModal();

  return (
    <>
      <footer id="contact" className="relative w-full bg-primary pt-16 pb-8 space-y-8 overflow-hidden scroll-mt-24">
        {/* Scrolling text — duplicated for seamless loop */}
        <div className="relative w-full flex overflow-hidden">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
              style={{ animation: "marquee 18s linear infinite" }}
            >
              {["MAD PIZZA", "MAD PIZZA", "MAD PIZZA"].map((word, index) => (
                <div key={index} className="flex items-center gap-10">
                  <h3 className="text-white font-geist font-extrabold uppercase text-5xl sm:text-7xl lg:text-9xl tracking-tight leading-none whitespace-nowrap px-6 sm:px-10 select-none">
                    {word}
                  </h3>
                  <div className="relative w-20 h-28 sm:w-32 sm:h-40 lg:w-40 lg:h-48 aspect-[1/2]">
                    <Image
                      src={assets.images.decore7}
                      alt="Mad Pizza"
                      fill
                      quality={85}
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── 4-column content grid ── */}
        <div className="relative w-full flex px-0 md:px-10 lg:px-16 overflow-hidden border-t-3 border-b-3 border-white/20 border-dotted">
          <StaggerReveal
            duration={1.8}
            stagger={0.2}
            distance={40}
            start="top 85%"
            className="w-full max-w-7xl 2xl:max-w-[1450px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0"
          >
            {/* Col 1 – Contact & socials */}
            <div className="px-4 py-8 lg:pl-8 lg:pb-40 border-b-3 sm:border-b-0 lg:border-l-3 border-white/20 border-dotted space-y-4 lg:space-y-8">
              <ColTitle>Have Questions?</ColTitle>

              <div className="space-y-2">
                {infodata.branches.map((branch) => (
                  <p key={branch.name} className="text-white/70 font-kanit font-light text-base lg:text-lg">
                    {branch.name}:{" "}
                    <Link
                      href={`mailto:${branch.email}`}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      {branch.email}
                    </Link>
                  </p>
                ))}

                {/* <p className="text-white/70 font-kanit font-light text-base lg:text-lg pt-1">
                  or submit a{" "}
                  <Link
                    href="/#contact"
                    className="text-white hover:text-white/70 transition-colors underline"
                  >
                    contact form
                  </Link>
                </p> */}
              </div>

              <div className="flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 aspect-square rounded-full border border-white/40 flex items-center justify-center text-white/70 hover:text-primary hover:bg-white transition-all duration-200"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 – Main pages */}
            <div className="px-4 py-8 lg:pl-8 lg:pb-40 border-b-3 sm:border-b-0 lg:border-l-3 border-white/20 border-dotted space-y-4 lg:space-y-8">
              <ColTitle>Main Pages</ColTitle>

              <div className="space-y-3">
                {mainPages.map((l) => (
                  <FooterLink key={l.href} href={l.href} label={l.label} />
                ))}

                <button
                  onClick={openModal}
                  className="block text-white/70 font-kanit font-light text-base lg:text-lg hover:text-white transition-colors duration-200"
                >
                  Locations
                </button>
              </div>
            </div>

            {/* Col 3 – Legal pages + contact info */}
            <div className="px-4 py-8 lg:pl-8 lg:pb-40 border-b-3 sm:border-b-0 lg:border-l-3 border-white/20 border-dotted space-y-4 lg:space-y-8">
              <ColTitle>Legal Pages</ColTitle>
              <ul className="space-y-3">
                {legalPages.map((l) => (
                  <FooterLink key={l.href} href={l.href} label={l.label} />
                ))}
              </ul>
            </div>

            {/* Col 4 – Schedule */}
            <div className="px-4 py-8 lg:pl-8 lg:pb-40 border-b-3 sm:border-b-0 lg:border-l-3 border-white/20 border-dotted space-y-4 lg:space-y-8">
              {/* <ColTitle>Schedule</ColTitle> */}
              {/* <ul className="space-y-2">
                {schedule.map(({ day, hours }) => (
                  <li key={day} className="flex items-baseline gap-4">
                    <p className="text-white/70 font-kanit font-light text-base lg:text-lg whitespace-nowrap">
                      {day}: <span className="text-white">
                        {hours}
                      </span>
                    </p>
                  </li>
                ))}
              </ul> */}
              <ColTitle>Contact Us</ColTitle>
              {infodata.branches.map((branch) => (
                <div key={branch.name} className="space-y-1">
                  <p className="text-white font-geist font-bold text-sm uppercase tracking-wider">{branch.name}</p>
                  <FooterLink href={`tel:${branch.mobile.replace(/\s+/g, "")}`} label={`Phone: ${branch.mobile}`} />
                  <FooterLink href={`mailto:${branch.email}`} label={`Email: ${branch.email}`} />
                </div>
              ))}
            </div>
          </StaggerReveal>
        </div>

        {/* ── Bottom copyright bar ── */}
        <div className="flex justify-center items-center gap-2 text-center text-white/70 font-kanit font-light text-base lg:text-lg tracking-wide">
          <p className="">
            © 2026 Copyright - {infodata.name}
          </p>
          <span> | </span>
          <a href={infodata.developBy.url} target="_blank" className="hover:text-white transition-colors">
            {`Developed by ${infodata.developBy.name}`}
          </a>
        </div>
      </footer>

      {/* Marquee keyframe */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}