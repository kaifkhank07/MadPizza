"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes, FaLocationArrow, FaChevronRight } from "react-icons/fa";
import { info, type Branch } from "@/data/info";
import { useOrderModal } from "./OrderModalContext";
import { assets } from "@/data/assets";

// Haversine formula to compute distance between two points in km
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // radius of Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function LocationModal() {
  const { isOpen, closeModal } = useOrderModal();
  const [postalCode, setPostalCode] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const infodata = info[0];

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBranchSelect = (branch: Branch) => {
    if (branch.orderUrl) {
      closeModal();
      window.open(branch.orderUrl, "_blank");
    }
  };

  const handleNearestLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
      return;
    }
    setStatus("Locating...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Bolton: Lat 43.8804, Lon -79.7397
        // Waterloo: Lat 43.5145, Lon -80.5178
        const dBolton = getDistance(latitude, longitude, 43.8804, -79.7397);
        const dWaterloo = getDistance(latitude, longitude, 43.5145, -80.5178);

        const nearest = dBolton < dWaterloo ? "Bolton" : "Waterloo";
        const branch = infodata.branches.find((b) => b.name === nearest);

        setStatus(null);
        if (branch) {
          handleBranchSelect(branch);
        }
      },
      (error) => {
        setStatus("Unable to retrieve location");
      }
    );
  };

  const handleFindSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postalCode.trim()) return;

    // Fast local heuristic: Waterloo region starts with N; Bolton starts with L, M, or K
    const cleanCode = postalCode.trim().toUpperCase();
    const startsWithN = cleanCode.startsWith("N");
    const nearestName = startsWithN ? "Waterloo" : "Bolton";

    const branch = infodata.branches.find((b) => b.name === nearestName);
    if (branch) {
      handleBranchSelect(branch);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={closeModal} />

      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100 max-h-[90vh] md:max-h-[85vh] z-10 animate-in fade-in zoom-in-95 duration-200">

        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-gray-500 hover:text-dark rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Left Half: Selection Area */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-center overflow-y-auto space-y-6">

          {/* Logo */}
          <div className="relative w-20 h-20 bg-accent rounded-full flex items-center justify-center p-2 shadow-inner">
            <Image
              src={assets.images.madPizzaLogo}
              alt="Mad Pizza"
              fill
              className="object-contain p-2 rounded-full"
              sizes="80px"
            />
          </div>

          {/* Heading */}
          <div className="text-center space-y-1">
            <h3 className="text-3xl font-geist font-bold text-dark leading-tight">
              Choose your location
            </h3>
          </div>

          {/* Geolocation Button */}
          <div className="flex flex-col items-center gap-1.5 w-full">
            <button
              onClick={handleNearestLocation}
              className="flex items-center gap-2 text-primary font-geist font-semibold text-base hover:text-primary-dark transition-colors duration-200 group"
            >
              <FaLocationArrow className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
              Nearest to you
            </button>
            {status && (
              <p className="text-xs text-primary font-geist font-medium animate-pulse">
                {status}
              </p>
            )}
          </div>

          {/* Postal Code Finder */}
          {/* <form onSubmit={handleFindSubmit} className="w-full max-w-sm space-y-1.5">
            <p className="text-xs text-muted font-light text-left pl-1">
              Can't share your location?
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Postal or ZIP code"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors font-geist"
              />
              <button
                type="submit"
                className="px-6 py-2 border border-dark rounded-full text-sm text-dark font-semibold hover:bg-dark hover:text-white transition-all duration-300 cursor-pointer"
              >
                Find
              </button>
            </div>
          </form> */}

          {/* Branch Buttons */}
          <div className="w-full max-w-sm space-y-3 pt-2">
            {infodata.branches.map((branch) => (
              <button
                key={branch.name}
                onClick={() => handleBranchSelect(branch)}
                className="flex items-center justify-between w-full p-4 bg-accent hover:bg-accent-light text-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group text-left cursor-pointer"
              >
                <div className="space-y-0.5">
                  <p className="font-geist font-bold text-lg uppercase tracking-wider">
                    {branch.name}
                  </p>
                  <p className="text-white/70 text-sm font-light">
                    {branch.address}
                  </p>
                </div>
                <FaChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Half: Map (hidden on mobile) - Commented out */}
        {/* <div className="hidden md:block w-1/2 relative bg-light-gray min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1156828.1884488317!2d-80.1278144!3d43.6826112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Mad Pizza Locations Map"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Right Half: Decorative Image */}
        <div className="block w-fill sm:w-1/2 relative bg-light-gray min-h-[400px]">
          <Image
            src={assets.images.map}
            alt="Mad Pizza location"
            fill
            quality={85}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
