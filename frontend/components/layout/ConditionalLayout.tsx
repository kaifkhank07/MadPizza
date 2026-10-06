"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { OrderModalProvider } from "@/components/util/OrderModalContext";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu" || pathname?.startsWith("/menu/");

  return (
    <OrderModalProvider>
      {!isMenuPage && <Navbar />}
      {children}
      {!isMenuPage && <Footer />}
    </OrderModalProvider>
  );
}
