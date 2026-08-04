import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-brand-blue flex items-center overflow-hidden">
      {/* Left side graphics (The concentric circles with stadium) */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
          {/* Teal Outer Arc */}
          <path
            d="M 50 5 A 45 45 0 1 1 5 50"
            fill="none"
            stroke="#1DB2AF"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Purple Middle Arc */}
          <path
            d="M 50 15 A 35 35 0 1 1 15 50"
            fill="none"
            stroke="#674293"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Teal Inner Arc */}
          <path
            d="M 50 25 A 25 25 0 1 1 25 50"
            fill="none"
            stroke="#1DB2AF"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        {/* Stadium Image Masked in a circle */}
        <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full overflow-hidden border-4 border-brand-blue">
          <img
            src="https://images.unsplash.com/photo-1540324883447-7389db220556?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Melbourne Cricket Ground"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 flex justify-end">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            eResearch <br /> Australasia
          </h1>
          <h2 className="text-brand-teal text-3xl md:text-4xl font-semibold mt-4">
            2026 CONFERENCE
          </h2>
          <h3 className="text-brand-purple text-2xl md:text-3xl font-semibold">
            26 - 30 OCTOBER
          </h3>
          <p className="text-white text-lg md:text-xl font-medium mt-2">
            MELBOURNE CRICKET GROUND, <br /> VICTORIA
          </p>
          <div className="mt-8 text-white text-6xl font-bold tracking-tighter flex items-center">
            {/* AeRO logo placeholder */}
            AeR<span className="inline-block w-[1em] h-[1em] border-8 border-dashed border-white rounded-full ml-1"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
