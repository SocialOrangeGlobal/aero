"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function SpeakersPage() {
  const speakers = [
    {
      id: "dr-stephanie-russo-carroll",
      name: "Dr Stephanie Russo Carroll",
      title: "Associate Professor – University of Arizona",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/S.carroll-Pic-300-x-300-2048x2048.jpg"
    },
    {
      id: "professor-ross-d-king",
      name: "Professor Ross D. King",
      title: "Professor of Machine Intelligence – Chalmers Institute of Technology",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Professor-Ross-D.-King.png"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Speakers</h1>
        </div>
        {/* Swirl Graphic */}
        <div className="hidden md:flex absolute right-[-10%] md:right-[-2%] top-1/2 -translate-y-1/2 h-[200%] md:h-[250%] pointer-events-none items-center justify-end">
          <img
            src="https://conference.eresearch.edu.au/wp-content/uploads/2021/02/Untitled-design.png"
            alt="Decorative swirl"
            className="h-full w-auto object-contain"
          />
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto mb-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {speakers.map((speaker, idx) => (
            <Link href={`/speaker/${speaker.id}`} key={idx} className="flex flex-col group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="aspect-square w-full mb-6 overflow-hidden bg-gray-100">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">{speaker.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{speaker.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      <button 
        className="fixed bottom-6 right-6 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      <Footer />
    </main>
  );
}
