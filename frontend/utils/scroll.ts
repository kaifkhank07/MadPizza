"use client";

import { usePathname } from "next/navigation";

export function useScrollNavigation() {
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.includes("#") ? href.split("#")[1] : href;

      // If we are on the Home page, scroll smoothly in-place
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href.startsWith("/") ? href : `/#${targetId}`);
        }
      }
    }
  };

  return { handleScroll, pathname };
}