"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { label } from "framer-motion/client";

interface NavbarProps {
  variant?: "dark" | "light";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { label: "HOME", href: "/" },
    {
      label: "REGISTRATION",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Registration", href: "/registration" },
        { label: "Accommodation", href: "/accommodation" },
      ]
    },
    { label: "SPEAKERS", href: "/speakers" },
    {
      label: "PROGRAM OVERVIEW",
      href: "/program-overview",
      hasDropdown: true,
      dropdownItems: [
        { label: "Program Overview", href: "/program-overview" },
        { label: "Presenter Guidelines", href: "/presenter-guidelines" },
        { label: "Session Chair Guidelines", href: "/session-chair-guidelines" }
      ]
    },
    {
      label: "ABSTRACT SUBMISSION",
      href: "/abstract-submission",
      hasDropdown: true,
      dropdownItems: [
        { label: "Abstract Submission", href: "/abstract-submission" },
        { label: "Reviewer Guidelines", href: "/reviewer-guidelines" }
      ]
    },
    { label: "SPONSOR PROFILES", href: "/sponsor-profiles" },
    {
      label: "SPONSORS AND EXHIBITORS",
      href: "/sponsors-exhibitors-opportunities",
      hasDropdown: true,
      dropdownItems: [
        { label: "Sponsors & Exhibitors Opportunities", href: "/sponsors-exhibitors-opportunities" },
        { label: "Exhibitors Manual", href: "/exhibitor-manual" },
        { label: "Lead Management", href: "/lead-management" }
      ]
    },
    { label: "VISIT MELBOURNE", href: "#" },
    { label: "PAST CONFERENCES", href: "#", hasDropdown: true },
  ];

  const isLight = variant === "light";

  return (
    <nav className={`${isLight ? "relative bg-white text-gray-800 border-b border-gray-200" : "absolute top-0 left-0 text-white"} w-full z-50 py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row md:justify-center text-[12px] font-semibold tracking-wide`}>
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
          className={`md:hidden ${isLight ? "text-gray-800 hover:text-red-600" : "text-white hover:text-brand-teal"} transition-colors z-50`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap items-center justify-start gap-x-8 gap-y-3 w-full">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={link.href || "#"}
                  className={`flex items-center gap-1 transition-colors py-2 ${isActive || hoveredIndex === idx
                    ? "text-[#E63946]"
                    : isLight
                      ? "hover:text-[#E63946]"
                      : "hover:text-[#E63946]"
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} strokeWidth={3} />}
                </Link>

                {link.dropdownItems && hoveredIndex === idx && (
                  <div className="absolute top-[100%] left-0 pt-2 w-52 z-50">
                    <div className="bg-white text-gray-700 shadow-xl flex flex-col font-normal text-[13px] tracking-normal border border-gray-100 border-t-[3px] border-t-[#E63946] rounded-b-sm">
                      {link.dropdownItems.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href || "#"}
                          className="block px-6 py-3 hover:bg-gray-50 hover:text-[#0b2745] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${isLight ? "bg-white border-gray-200" : "bg-brand-blue/95 backdrop-blur-sm border-white/10"} border-t flex flex-col items-center py-6 gap-y-4 shadow-xl max-h-[85vh] overflow-y-auto pb-24`}>
          <ul className="flex flex-col items-center gap-y-6 w-full px-4">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <li key={idx} className="w-full text-center flex flex-col items-center">
                  <Link
                    href={link.href || "#"}
                    className={`flex items-center justify-center gap-1 text-lg transition-colors py-2 ${isActive
                      ? "text-[#E63946]"
                      : isLight
                        ? "text-gray-800 hover:text-[#E63946]"
                        : "text-white hover:text-[#E63946]"
                      }`}
                    onClick={(e) => {
                      if (link.dropdownItems) {
                        e.preventDefault();
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} strokeWidth={3} />}
                  </Link>
                  {link.dropdownItems && (
                    <div className="flex flex-col gap-4 mt-2 mb-4 bg-white/5 w-full py-4 rounded-md">
                      {link.dropdownItems.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href || "#"}
                          className={`text-base font-normal ${isLight ? "text-gray-600 hover:text-[#E63946]" : "text-gray-300 hover:text-white"}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
