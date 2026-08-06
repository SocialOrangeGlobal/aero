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
    { label: "VISIT MELBOURNE", href: "/visit-melbourne" },
    {
      label: "PAST CONFERENCES",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "2025 Conference", href: "https://conference.eresearch.edu.au/2025-home/", hasSubDropdown: true },
        { label: "2024 Conference", href: "https://conference.eresearch.edu.au/2024-conference/", hasSubDropdown: true },
        { label: "2023 Conference", href: "https://conference.eresearch.edu.au/2023-conference/", hasSubDropdown: true },
        { label: "2022 Conference", href: "https://conference.eresearch.edu.au/2022-conference/", hasSubDropdown: true },
        { label: "2021 Conference", href: "https://conference.eresearch.edu.au/eresearch-australasia-conference-2021/", hasSubDropdown: true },
        { label: "2020 Conference", href: "https://conference.eresearch.edu.au/2020-home/", hasSubDropdown: true },
        { label: "2019 Conference", href: "https://conference.eresearch.edu.au/eresearch-australasia-conference-2019-home/", hasSubDropdown: true },
        { label: "2018 Conference", href: "https://conference.eresearch.edu.au/eresearch-2018-home-page/", hasSubDropdown: true },
        { label: "2017 Conference", href: "https://conference.eresearch.edu.au/eresearch-2017-homepage/", hasSubDropdown: true },
        { label: "2016 Conference", href: "https://conference.eresearch.edu.au/eres2016/", hasSubDropdown: true },
        { label: "2015 Conference", href: "https://conference.eresearch.edu.au/eres2015/", hasSubDropdown: false },
        { label: "2014 Conference", href: "https://conference.eresearch.edu.au/eres2014/", hasSubDropdown: false },
        { label: "2013 Conference", href: "https://conference.eresearch.edu.au/eres2013/", hasSubDropdown: false },
        { label: "2012 Conference", href: "https://conference.eresearch.edu.au/eres2012/", hasSubDropdown: false },
        { label: "2011 Conference", href: "https://conference.eresearch.edu.au/eres2011/", hasSubDropdown: false },
        { label: "2010 Conference", href: "https://conference.eresearch.edu.au/eres2010/", hasSubDropdown: false },
      ]
    },
  ];

  const isLight = variant === "light";

  return (
    <nav className={`${isLight ? "relative bg-white text-gray-800 border-b border-gray-200" : "absolute top-0 left-0 text-white"} w-full z-50 py-4 md:py-6 px-4 md:px-8 flex flex-col xl:flex-row xl:justify-center text-[12px] font-semibold tracking-wide`}>
      <div className="flex items-center justify-between w-full max-w-[1400px]">
        {/* Logo or empty space for flex alignment on mobile if needed */}
        <div className="xl:hidden bg-white p-1.5 rounded-sm flex items-center justify-center h-10">
          <img
            src="/AeRO_Logo_CMYK.png"
            alt="AeRO Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`xl:hidden ${isLight ? "text-gray-800 hover:text-red-600" : "text-white hover:text-brand-teal"} transition-colors z-50`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex flex-wrap items-center justify-start gap-x-8 gap-y-3 w-full">
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
                    <div className="bg-white text-gray-600 shadow-xl flex flex-col font-normal text-[13px] tracking-normal border border-gray-100 border-t-[3px] border-t-[#E63946] rounded-b-sm">
                      {link.dropdownItems.map((item: any, itemIdx: number) => (
                        <Link
                          key={itemIdx}
                          href={item.href || "#"}
                          className="flex items-center justify-between px-6 py-3 hover:text-[#E63946] transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <span>{item.label}</span>
                          {item.hasSubDropdown && <ChevronDown size={14} className="text-gray-400" />}
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
        <div className={`xl:hidden absolute top-full left-0 w-full ${isLight ? "bg-white border-gray-200" : "bg-brand-blue/95 backdrop-blur-sm border-white/10"} border-t flex flex-col items-center py-6 gap-y-4 shadow-xl max-h-[85vh] overflow-y-auto pb-24`}>
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
