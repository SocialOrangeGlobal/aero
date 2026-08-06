"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";

export default function ProgramOverviewPage() {
  const schedule = [
    {
      date: "Monday 26 October 2026",
      items: [
        { time: "Morning", events: ["Pre-Conference Workshops"] },
        { time: "Afternoon", events: ["Pre-Conference Workshops", "Exhibitor Bump In"] },
      ],
    },
    {
      date: "Tuesday 27 October 2026",
      items: [
        { time: "Morning", events: ["Conference Sessions"] },
        { time: "Morning Tea", events: ["Exhibition and Posters", "Conference Sessions"] },
        { time: "Lunch", events: ["Exhibition and Posters", "Conference Sessions"] },
        { time: "Afternoon Tea", events: ["Exhibition and Posters", "Conference Sessions"] },
        { time: "Evening", events: ["Welcome Reception"] },
      ],
    },
    {
      date: "Wednesday 28 October 2026",
      items: [
        { time: "Morning", events: ["Conference Sessions"] },
        { time: "Morning Tea", events: ["Exhibition and Posters", "Conference Sessions"] },
        { time: "Lunch", events: ["Exhibition and Posters", "Conference Sessions"] },
        { time: "Afternoon Tea", events: ["Exhibition and Posters", "Conference Sessions"] },
      ],
    },
    {
      date: "Thursday 29 October 2026",
      items: [
        { time: "Morning", events: ["Conference Sessions"] },
        { time: "Morning Tea", events: ["Exhibition and Posters", "Conference Sessions"] },
        { time: "Lunch", events: ["Exhibition and Posters", "Conference Sessions"] },
        { time: "Afternoon Tea", events: ["Exhibition and Posters", "Exhibitor Bump Out", "Conference Sessions"] },
      ],
    },
    {
      date: "Friday 30 October 2026",
      items: [
        { time: "", events: ["Post-Conference Workshops"] },
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Program Overview</h1>
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

      {/* Content Section */}
      <section className="w-full py-16 px-6 max-w-[1000px] mx-auto flex-grow">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-[24px] font-bold text-gray-700 mb-4">Program Overview</h2>
            <p className="text-[15px] text-gray-600">
              The program overview below is provisional and will be updated as planning proceeds. Please check this page regularly.
            </p>
          </div>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-gray-50 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            PRINT
          </button>
        </div>

        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Schedule */}
        <div className="flex flex-col gap-12">
          {schedule.map((day, dayIdx) => (
            <div key={dayIdx}>
              <h3 className="text-[22px] font-bold text-gray-700 mb-6 pl-0 md:pl-12 lg:pl-48">{day.date}</h3>
              <div className="flex flex-col gap-4">
                {day.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col md:flex-row border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="w-full md:w-48 font-bold text-gray-800 text-[14px] shrink-0 mb-2 md:mb-0">
                      {item.time}
                    </div>
                    <div className="flex flex-col gap-2 text-[14px] text-gray-600">
                      {item.events.map((event, eventIdx) => (
                        <span key={eventIdx}>{event}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Website Sponsor Section */}
      <section className="w-full py-12 flex flex-col items-center justify-center bg-white border-t border-gray-100 mt-8">
        <h3 className="text-[20px] font-bold text-gray-800 mb-8 tracking-wide">Website Sponsor</h3>
        <a href="https://www.unilab.com.au" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
          <img 
            src="https://conference.eresearch.edu.au/wp-content/uploads/2026/05/2026-eResearch-Website-Sponsor-Banner.png" 
            alt="Unilab Website Sponsor" 
            className="h-[120px] w-auto object-contain"
          />
        </a>
      </section>

      {/* Floating Scroll to Top Button */}
      <button 
        className="fixed bottom-6 right-6 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      <Footer />
    </main>
  );
}
