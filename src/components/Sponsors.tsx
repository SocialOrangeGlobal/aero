export default function Sponsors() {
  const tiers = [
    {
      name: "Platinum Sponsor",
      sponsors: [
        { name: "Dell Technologies", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/04/dell-250x220.jpg" },
        { name: "Macquarie Cloud Services", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Macquarie-250x220.png" }
      ]
    },
    {
      name: "Gold Sponsor",
      sponsors: [
        { name: "Fujitsu", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/04/fuji.jpg" }
      ]
    },
    {
      name: "Silver Sponsor",
      sponsors: [
        { name: "Digital Science", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Picture2-250x220.png" },
        { name: "AARNet", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/aarnet-250x220.png" },
        { name: "IBM", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/2026-IBM-245x220.png" },
        { name: "AMD", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/AMD-245x220.png" }
      ]
    },
    {
      name: "Bronze Sponsor",
      sponsors: [
        { name: "DDN", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/04/2025-eResearch-DDN-1-250x220.png" },
        { name: "DoItNow", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/DoItNow-250x220.png" },
        { name: "XENON", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/XENON-NVIDIA-WEKA_2026_0716-250x220.png" }
      ]
    },
    {
      name: "Coffee Cart Sponsor",
      sponsors: [
        { name: "OneTeam IT", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/04/2025-eResearch-OneTeam-IT-1-250x220.png" }
      ]
    },
    {
      name: "Name Badge and Lanyard Sponsor",
      sponsors: [
        { name: "CDC", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/CDC-250x220.png" }
      ]
    },
    {
      name: "Website Sponsor",
      sponsors: [
        { name: "Unilab", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Unilab-250x220.png" }
      ]
    },
    {
      name: "Networking Night Sponsor",
      sponsors: [
        { name: "Fujitsu", img: "https://conference.eresearch.edu.au/wp-content/uploads/2026/04/fuji.jpg" }
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 border-t border-brand-gray/50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl text-brand-text font-bold mb-12">Sponsors</h2>
        
        <div className="flex flex-wrap gap-8">
          {tiers.map((tier, tIdx) => (
            tier.sponsors.map((sponsor, sIdx) => (
              <div 
                key={`${tIdx}-${sIdx}`} 
                className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.33rem)] lg:w-[calc(25%-1.5rem)] flex flex-col items-center justify-between bg-white border border-gray-100 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex-1 flex items-center justify-center w-full h-40 mb-6">
                  <img 
                    src={sponsor.img} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-400 text-xs text-center uppercase tracking-wider">{tier.name}</p>
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  );
}
