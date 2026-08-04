import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
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
    <nav className="absolute top-0 left-0 w-full z-50 text-white py-6 px-8 flex justify-center text-sm font-semibold tracking-wide">
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-[1400px]">
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
    </nav>
  );
}
