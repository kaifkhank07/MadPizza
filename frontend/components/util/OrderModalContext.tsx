"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import LocationModal from "./LocationModal";

interface OrderModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <OrderModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <LocationModal />
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error("useOrderModal must be used within an OrderModalProvider");
  }
  return context;
}
