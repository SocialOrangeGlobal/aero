import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-blue overflow-hidden">
      {/* Mobile Image (inline to preserve aspect ratio) */}
      <div className="w-full md:hidden pt-20">
        <img 
          src="https://conference.eresearch.edu.au/wp-content/uploads/2025/12/2026-eResearch-Website.jpg" 
          alt="eResearch Australasia 2026 Background" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <img 
          src="https://conference.eresearch.edu.au/wp-content/uploads/2025/12/2026-eResearch-Website.jpg" 
          alt="eResearch Australasia 2026 Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Invisible container to maintain height on desktop */}
      <div className="hidden md:block relative z-10 w-full max-w-[1400px] mx-auto px-8 h-screen min-h-[700px]">
      </div>
    </section>
  );
}
