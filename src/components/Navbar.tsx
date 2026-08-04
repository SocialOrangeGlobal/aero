"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "REGISTRATION", href: "#", hasDropdown: true },
    { label: "SPEAKERS", href: "#" },
    { label: "PROGRAM OVERVIEW", href: "#", hasDropdown: true },
    { label: "ABSTRACT SUBMISSION", href: "#", hasDropdown: true },
    { label: "SPONSOR PROFILES", href: "#" },
    { label: "SPONSORS AND EXHIBITORS", href: "#", hasDropdown: true },
    { label: "VISIT MELBOURNE", href: "#" },
    { label: "PAST CONFERENCES", href: "#", hasDropdown: true },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row md:justify-center text-sm font-semibold tracking-wide">
      <div className="flex items-center justify-between w-full max-w-[1400px]">
        {/* Logo or empty space for flex alignment on mobile if needed */}
        <div className="md:hidden bg-white p-1.5 rounded-sm flex items-center justify-center h-10">
          <img 
            src="/AeRO_Logo_CMYK.png" 
            alt="AeRO Logo" 
            className="h-full w-auto object-contain"
          />
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-brand-teal transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap items-center justify-start gap-x-8 gap-y-3 w-full">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="flex items-center gap-1 hover:text-brand-teal transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} strokeWidth={3} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-blue/95 backdrop-blur-sm border-t border-white/10 flex flex-col items-center py-6 gap-y-4 shadow-xl">
          <ul className="flex flex-col items-center gap-y-6 w-full px-4">
            {navLinks.map((link, idx) => (
              <li key={idx} className="w-full text-center">
                <Link
                  href={link.href}
                  className="flex items-center justify-center gap-1 text-lg hover:text-brand-teal transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={16} strokeWidth={3} />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
