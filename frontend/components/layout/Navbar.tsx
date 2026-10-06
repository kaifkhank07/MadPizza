"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/data/assets";
import gsap from "gsap";
import Button from "../util/Button";
import PaperBorder from "../util/PaperBorder";
import { useScrollNavigation } from "@/utils/scroll";
import { useOrderModal } from "../util/OrderModalContext";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#our-story" },
  { label: "Menu", href: "/menu" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleScroll } = useScrollNavigation();
  const { openModal } = useOrderModal();

  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    const ctx = gsap.context(() => {
      // Navbar starts above the viewport
      gsap.set(navbarRef.current, {
        y: -80,
        opacity: 0,
      });

      // Slide navbar from top to bottom
      gsap.to(navbarRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu height animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;

    if (isOpen) {
      gsap.to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <header
      ref={navbarRef}
      className="absolute top-0 left-0 w-full z-50 px-4 py-2 md:px-10 lg:px-16"
    >
      <PaperBorder
        bgColor="#C92E05"
        className="w-full max-w-7xl 2xl:max-w-[1450px] mx-auto"
      >
        <nav className="w-full flex items-center justify-between px-6 md:px-10 py-1">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
          >
            <Image
              src={assets.images.madPizzaLogo}
              alt="Mad Pizza Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-x-16">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-white text-lg sm:text-xl font-light tracking-wide hover:text-[--clr-secondary] transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-[--clr-secondary] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* ── CTA Button ── */}
            <div className="hidden md:block">
              <Button
                onClick={openModal}
                variant="white"
                className="inline-block"
              >
                Locations
              </Button>
            </div>
          </ul>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />

            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
            />

            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </nav>

        {/* ── Mobile Menu ── */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col px-6 pb-6 pt-2 gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    handleScroll(e, link.href);
                    setIsOpen(false);
                  }}
                  className="block text-white text-base font-medium py-3 border-b border-white/20 hover:text-[--clr-secondary] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Contact */}
            <li>
              <button
                onClick={openModal}
                className="mt-2 w-full block text-center bg-white text-primary hover:bg-gray-100 font-semibold px-4 py-3 rounded-full transition-colors duration-300"
              >
                Locations
              </button>
            </li>
          </ul>
        </div>
      </PaperBorder>
    </header>
  );
}