"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import React from "react";

export default function SpeakerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  // Mock data for speakers based on the ID
  const speakersData: Record<string, any> = {
    "dr-stephanie-russo-carroll": {
      name: "Dr Stephanie Russo Carroll",
      title: "Associate Professor – University of Arizona",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/S.carroll-Pic-300-x-300-650x650.jpg",
      bio: "Dr. Stephanie Russo Carroll (she/her) is Ahtna, a citizen of the Native Village of Kluti-Kaah in Alaska, and of Sicilian-descent. Based at the University of Arizona (UA), she is Associate Professor, Public Health and American Indian Studies Graduate Interdisciplinary Program; Associate Research Professor, Udall Center for Studies in Public Policy and its Native Nations Institute; and Affiliate Faculty in the College of Law. Stephanie co-directs the Indigenous Data Alliance and directs the interdisciplinary research group the Collaboratory for Indigenous Data Governance which develops research, policy, and practice innovations for Indigenous Data Sovereignty. Her research, teaching, and engagement seek to transform institutional governance and ethics for Indigenous control of Indigenous data, particularly within open science, open data, and big data contexts. Stephanie co-edited the book Indigenous Data Sovereignty and Policy and led the publication of the CARE Principles for Indigenous Data Governance. Stephanie co-founded the US Indigenous Data Sovereignty Network and co-founded and chairs the Global Indigenous Data Alliance (GIDA), the International Indigenous Data Sovereignty Interest Group at the Research Data Alliance, and the Indigenous Data Working Group for the IEEE P2890 Recommended Practice for Provenance of Indigenous Peoples' Data. Stephanie is a founding board member for the Copper River Tribal College in Chitina, Alaska. Stephanie received her AB from Cornell University and MPH and DrPH from the UA. Stephanie's research explores the links between Indigenous governance, data, the environment, and community wellness. Stephanie offers Indigenous women-led mentoring of undergraduate students through junior faculty and research staff with the goal of producing policy-relevant research through skill and knowledge acquisition that forefront Indigenous ways of knowing and being."
    },
    "professor-ross-d-king": {
      name: "Professor Ross D. King",
      title: "Professor of Machine Intelligence – Chalmers Institute of Technology",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Professor-Ross-D.-King.png",
      bio: "Ross D.King started his PhD at the Turing Institute forty years ago, the subject was the first application of machine learning to predict protein structure. As a postdoc he developed one of the first applications of machine learning to drug design. He is now one of the most experienced AI researchers in Europe. He has joint positions at the University of Cambridge (Biotechnology), and is Professor of Machine Intelligence at Chalmers Institute of Technology, Sweden. His main research interest is AI for science. He originated the idea of a ‘Robot Scientist’ (aka self-driving lab): integrating AI and laboratory robotics to physically implement closed-loop scientific discovery. His Robot Scientist ‘Adam’ was the first machine to autonomously discover scientific knowledge. ‘Eve’ is currently searching for drugs against neglected tropical diseases. He is building ‘Genesis’ aRobot Scientist designed to automate eukaryotic systems biology. He is currently excited by the use of LLMs to formalise all the knowledge in the scientific literature, and automate the validation of this knowledge. He is a founder of the Nobel Turing Challenge: to build a machine able to do Nobel prize quality scientific research autonomously."
    }
  };

  const speaker = speakersData[resolvedParams.id];

  if (!speaker) {
    return (
      <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
        <Navbar variant="light" />
        <section className="w-full py-24 flex justify-center items-center flex-grow">
          <h1 className="text-2xl font-bold">Speaker not found</h1>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">{speaker.name}</h1>
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
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex-grow">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Image */}
          <div className="w-full max-w-[260px] md:max-w-[300px] mx-auto md:mx-0 flex-shrink-0">
            <img 
              src={speaker.image} 
              alt={speaker.name}
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />
          </div>
          
          {/* Text Details */}
          <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-800 mb-2">{speaker.name}</h2>
            <h3 className="text-[16px] font-semibold text-gray-700 mb-8">{speaker.title}</h3>
            
            <p className="text-[15px] text-gray-600 leading-[1.8] text-justify max-w-[900px]">
              {speaker.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Website Sponsor Section */}
      <section className="w-full py-12 flex flex-col items-center justify-center bg-white border-t border-gray-100">
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
