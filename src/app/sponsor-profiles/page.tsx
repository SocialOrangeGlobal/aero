"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainTiers = [
  {
    title: "Platinum Sponsor",
    sponsors: [
      { name: "Dell Technologies", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Dell-250x220.png" },
      { name: "Macquarie Cloud Services", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Macquarie-250x220.png" }
    ]
  },
  {
    title: "Gold Sponsor",
    sponsors: [
      { name: "Fujitsu", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Fujitsu-250x220.png" },
      { name: "AWS", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/08/AWS-250x220.png" }
    ]
  },
  {
    title: "Silver Sponsor",
    sponsors: [
      { name: "Digital Science", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Picture2-250x220.png" },
      { name: "aarnet", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/aarnet-250x220.png" }
    ]
  },
  {
    title: "Bronze Sponsor",
    sponsors: [
      { name: "IBM", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/2026-IBM-245x220.png" },
      { name: "AMD", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/AMD-245x220.png" },
      { name: "DDN", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/04/2025-eResearch-DDN-1-250x220.png" },
      { name: "DoItNow", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/DoItNow-250x220.png" },
      { name: "XENON", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/XENON-NVIDIA-WEKA_2026_0716-250x220.png", spanFull: true }
    ]
  }
];

const bottomTiers = [
  {
    title: "Coffee Cart Sponsor",
    sponsor: { name: "OneTeamIT", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/OneTeam-250x220.png" }
  },
  {
    title: "Website Sponsor",
    sponsor: { name: "Unilab", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Unilab-250x220.png" }
  },
  {
    title: "Welcome Reception Sponsor",
    sponsor: { name: "AWS", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/08/AWS-250x220.png" }
  },
  {
    title: "Name Badge and Lanyard Sponsor",
    sponsor: { name: "CDC", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/CDC-250x220.png" }
  }
];

const networkingNightSponsor = {
  title: "Networking Night Sponsor",
  sponsor: { name: "Fujitsu", image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/06/Fujitsu-250x220.png", spanFull: true }
};

const sponsorDetails: Record<string, React.ReactNode> = {
  "Dell Technologies": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Dell Technologies is a core technology platform across higher education and research in the region, backed by a large team of specialists, engineers and technologists who support the broader AERO ecosystem..</p>
      <p>Dell supports higher education and research institutions globally with the infrastructure, expertise and partnerships needed to advance discovery at scale. In the region, Dell is a core technology platform across the broader AERO ecosystem, supported by specialists, engineers and technologists who work closely with universities and research organisations.</p>
      <p>As the largest provider of infrastructure globally to the sector, with hundreds of thousands of devices, petabytes of storage and the largest HPC/AI footprint supported in the region, Dell underpins much of what Universities and researchers work on, interact and create outcomes with.</p>
      <p>As a global leader in digital transformation, Dell helps universities modernise AI, HPC and data-intensive research environments, turning complex technology into practical outcomes for researchers, faculty and students. Across engineering, biomedical, science and business engagements, Dell brings together technical depth, sector experience and hands-on collaboration to help institutions validate designs, solve common challenges and build secure, scalable environments for long-term research impact.</p>
      <p>Working as a national team, Dell partners with CAUDIT Cloud, AERO and other national providers, supporting institutions through Very Technical Briefings, proof-of-concept activity, campus residency and focused collaboration. For eResearch, Dell shows up as more than a vendor, working alongside universities across the research lifecycle to support discovery, collaboration and innovation.</p>
    </div>
  ),
  "Macquarie Cloud Services": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Macquarie Cloud Services, part of ASX-listed Macquarie Technology Group, is Australia’s most recommended cloud service provider, with an industry-leading Net Promoter Score (NPS) of 95+.</p>
      <p>For more than 30 years, we’ve helped Australian businesses transform with cloud, data, AI, cyber security and disaster recovery services. We’re Australia’s only truly sovereign cloud, hosted in Tier III certified data centres that we own, operate and support locally in Australia. For customers, this means world-class service that reduces their risk and saves them money.</p>
    </div>
  ),
  "Fujitsu": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p className="font-semibold text-gray-800">Powering the Future of Research Through Tri-Compute</p>
      <p>Fujitsu is a global technology company committed to making the world more sustainable by building trust in society through innovation. Operating in over 100 countries, Fujitsu partners with organisations across research, academia, government, and industry to address complex, data-intensive challenges. Fujitsu is advancing a “tri-compute” model, bringing together High Performance Computing (HPC), Artificial Intelligence (AI), and quantum computing as a unified foundation for next-generation research and innovation. In this model, HPC provides the computational backbone for simulation and modelling, AI enables insight and optimisation, and quantum computing serves as a specialised accelerator for solving problems beyond classical limits.</p>
      <p>In collaboration with NVIDIA and NetApp, Fujitsu delivers integrated AI and HPC solutions that combine accelerated computing with high-performance data management. This includes the AI Test Drive, providing access to a production-grade environment to explore, validate, and scale advanced workloads. Through this approach, Fujitsu supports organisations in accelerating discovery, reducing complexity, and delivering secure, high-performance outcomes across the research lifecycle.</p>
    </div>
  ),
  "AWS": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Since launching in 2006, Amazon Web Services has been providing world-leading cloud technologies that help any organisation and any individual build solutions to transform industries, communities, and lives for the better.</p>
      <p>As part of Amazon, we strive to be Earth’s most customer-centric company. We work backwards from our customers’ problems to provide them with cloud infrastructure that meets their needs, so they can reinvent continuously and push through barriers of what people thought was possible.</p>
      <p>Across the education and research sector, AWS empowers universities, research institutions, and educators to accelerate discovery, modernise learning experiences, and unlock insights from vast datasets. From genomics and climate modelling to artificial intelligence and high-performance computing, researchers around the world rely on AWS to scale their most ambitious work.</p>
      <p>Whether they are entrepreneurs launching new businesses, established companies reinventing themselves, universities advancing groundbreaking research, or governments seeking to serve their citizens more effectively—our customers trust AWS with their livelihoods, their goals, their ideas, and their data.</p>
      <p>Here’s a link to our research page:<br /><a href="https://aws.amazon.com/government-education/research-and-technical-computing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://aws.amazon.com/government-education/research-and-technical-computing/</a></p>
    </div>
  ),
  "Digital Science": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Digital Science drives global research progress by solving some of the research community’s biggest challenges through innovative, AI-powered technology.</p>
      <p>We believe research is the single most powerful transformational force for the long-term improvement of society. That’s why we empower organizations with insights, analytics and tools that help them solve complex challenges, turn findings into action and make decisions that deliver real impact.</p>
      <p>By working in partnership with governments, universities, funders, industry, and publishers, we can accelerate research that benefits society, because when we solve problems together, we drive progress for all.</p>
    </div>
  ),
  "aarnet": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p className="font-semibold text-gray-800">AARNet – Australia’s Academic and Research Network (AARNet)</p>
      <p>AARNet is Australia’s national research and education network, a critical national asset that enables Australian researchers to safely access institutional, national and international e-Infrastructure including the public Internet and software tools and resources such as scientific instruments, data storage, high performance computing, content and service providers.</p>
      <p>AARNet provides ultra-high-speed, high-quality and resilient broadband interconnections between instruments, facilities, campuses and institutions using dedicated national and international digital infrastructure. Through partnerships with other national research and education networks (NRENs), AARNet connects the Australian research sector with the global research sector.</p>
      <p>We also provide a range of services tailored to meet the needs of researchers and research institutions, including Globus data management, Zoom video and phone and Eduroam Wi-Fi.</p>
      <p>Collaboration is at the heart of what we do. We partner with research groups across the sciences and humanities on range of projects and help resolve complex technical challenges to remove barriers to data sharing and discovery.</p>
      <p>Our powerful network infrastructure, expertise and services enable Australia’s participation at the forefront of teaching, learning and research on a global scale and are fundamental to driving innovation in today’s digital economy.</p>
    </div>
  ),
  "IBM": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>IBM is a global leader in computing, data, and AI, helping universities and research institutions accelerate discovery through trusted technology. Working with organisations such as The University of Queensland, IBM enables researchers to securely capture, manage, govern, and analyse research data—accelerating AI-driven insights at scale. From high-performance computing, storage, and hybrid cloud to data governance and enterprise AI, IBM helps institutions build resilient, future-ready research environments that foster collaboration, protect valuable research data, and accelerate scientific breakthroughs. From medical research and genomics to climate science and AI, IBM is helping turn data into discovery.</p>
    </div>
  ),
  "AMD": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Advanced Micro Devices (AMD) is a global leader in high-performance and adaptive computing, delivering the processors, accelerators and software technologies that power modern research, artificial intelligence, cloud, data centre and supercomputing environments.</p>
      <p>Across the global research community, AMD technology supports some of the world’s most advanced high-performance computing systems, including leading exascale platforms used for scientific discovery, simulation, modelling, data analytics and AI. AMD EPYC™ server processors provide a scalable foundation for research computing, cloud and data-intensive workloads, while AMD Instinct™ accelerators are designed to support the growing convergence of HPC and AI across scientific and academic disciplines. AMD ROCm™ software provides an open software platform for GPU-accelerated computing, supporting HPC and supercomputing applications across areas such as energy, molecular dynamics, physics, computational chemistry and climate research.</p>
      <p>AMD’s relevance to the eResearch community is grounded in a simple idea: access to advanced compute is becoming central to research competitiveness. As research institutions manage growing demand for simulation, modelling, AI, machine learning and data-intensive workflows, AMD is focused on helping provide efficient, open and scalable computing platforms that can support diverse research environments without locking institutions into a single technology pathway. In Australia, AMD technology already underpins major national research infrastructure. The Pawsey Supercomputing Research Centre’s Setonix system is built on AMD EPYC CPUs and AMD Instinct MI250X GPUs and is described by Pawsey as the most powerful research computer in the Southern Hemisphere and one of the world’s most energy-efficient supercomputers. Setonix supports large-scale research computing across disciplines and represents a major step forward in Australia’s sovereign supercomputing capability.</p>
      <p>AMD is also supporting the next generation of university research computing in Australia. The University of Queensland’s Bunya Phase 4.0 upgrade includes AMD EPYC 9005 series CPUs and AMD Instinct MI355X GPUs, with UQ describing the expansion as its most significant supercomputing investment and a platform designed to support simulation, data processing, exploratory research, machine learning and generative AI. UQ has also stated that the upgrade will be available to all UQ researchers with a Bunya HPC account once online. More broadly, many Australian higher education and research organisations are already using AMD-based compute within research and infrastructure environments, particularly through EPYC-based HPC, cloud and data centre platforms. As AI becomes more deeply embedded in research workflows, institutions are increasingly exploring AMD Instinct accelerators and ROCm as part of a more open, heterogeneous approach to AI and HPC infrastructure. This aligns with discussions AMD is having across the university sector around research computing, ROCm enablement, future Instinct opportunities and the importance of supporting mixed environments rather than forcing a single-platform model.</p>
      <p>Through AMD EPYC, AMD Instinct, AMD Ryzen™, ROCm and the AMD University Program, AMD works with researchers, universities, research infrastructure providers and technology partners to help accelerate discovery, improve infrastructure efficiency and expand access to advanced computing. For eResearch Australasia, AMD’s focus is on supporting the community’s broader mission: enabling researchers to collaborate, analyse, discover and reuse information through sustainable, high-performance and open digital research infrastructure. The conference itself is positioned as a leading forum for researchers, data specialists, research infrastructure providers, technologists, software developers, policy makers and industry partners working to advance eResearch across Australasia</p>
    </div>
  ),
  "DoItNow": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Do IT Now provides advanced supercomputing services for scientists and engineers. We offer our clients turnkey solutions and technologies for dealing with the most complex problems in High Performance Computing (HPC). Our Do IT Now team of professionals have wide experience in multiple fields, we provide the best service in areas such as cluster design, supercomputer administration, user support and much more.</p>
      <p>Learn more about the Do IT Now group<br /><a href="https://www.doitnowgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.doitnowgroup.com</a></p>
    </div>
  ),
  "XENON": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Researchers have been advancing their work with high performance computing, artificial intelligence, and the tools of data science for decades now. XENON has been there every step of the way, providing the foundation in compute and data storage infrastructure which enables scientists to solve larger problems, faster.</p>
      <p>XENON works closely as a technology partner with universities and research institutes to provide solutions which solve the complex compute issues required for modern research. XENON provides HPC design, delivery and on-going support of compute and data storage. The XENON Cluster Stack™ provides a modern, containerised framework for managing HPC and is available for clusters supplied by XENON and can be retrofit into existing clusters with XENON Managed Services.</p>
    </div>
  ),
  "Unilab": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>Powering scientific innovation, UniLab develops advanced cloud-based solutions that enable research teams, universities, and laboratories to operate more efficiently, securely, and collaboratively. From managing complex lab operations and compliance to streamlining research workflows, UniLab provides the tools needed to accelerate discovery and innovation.</p>
      <p><a href="https://www.unilab.com.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.unilab.com.au/</a></p>
    </div>
  ),
  "CDC": (
    <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed font-light">
      <p>CDC Data Centres is Australia’s leading sovereign provider of highly secure, connected data centre campuses, purpose-built to support the evolving needs of the Education and Research sector. Since 2007, CDC has enabled universities, research institutions and innovation organisations to securely host and scale mission-critical workloads, from high-performance computing and AI to data-intensive research and collaboration platforms.</p>
      <p>Designed for the demands of modern research, CDC’s facilities support ultra-high-density deployments, advanced liquid cooling, and seamless access to cloud and research networks, enabling institutions to process, store and share data at scale. This capability allows researchers to accelerate discovery while maintaining strict control over sensitive intellectual property, research datasets and sovereign data requirements. CDC’s campuses foster a secure, connected ecosystem where education providers, government agencies and industry partners can collaborate efficiently, unlocking new opportunities for cross-institutional innovation. By eliminating the need for costly on-premise infrastructure and providing flexible, scalable capacity, CDC empowers organisations to focus investment on research outcomes rather than facilities.</p>
      <p>Backed by a strong commitment to sustainability and customer outcomes, CDC delivers future-ready infrastructure that underpins Australia’s research capability, supporting the next generation of scientific discovery, education and innovation.</p>
    </div>
  )
};

const Divider = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 my-8 w-full">
    <div className="flex-grow h-[1px] bg-indigo-200"></div>
    <h3 className="text-gray-700 font-semibold text-[15px] whitespace-nowrap">{title}</h3>
    <div className="flex-grow h-[1px] bg-indigo-200"></div>
  </div>
);

const SponsorCard = ({ sponsor, isHalf = false, onOpen }: { sponsor: any, isHalf?: boolean, onOpen: (name: string) => void }) => (
  <div className={`flex flex-col items-center gap-6 w-full ${sponsor.spanFull ? 'col-span-1 md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
    <div className="w-full aspect-[16/8] md:aspect-[16/7] bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-center p-8 transition-transform hover:-translate-y-1 duration-300">
      <img src={sponsor.image} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
    </div>
    <button onClick={() => onOpen(sponsor.name)} className="bg-[#db3d44] hover:bg-[#c2343a] text-white text-[11px] font-bold px-8 py-3 rounded-full tracking-wider transition-colors shadow-md">
      COMPANY PROFILE
    </button>
  </div>
);

export default function SponsorProfilesPage() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const handleOpen = (name: string) => {
    // Only open if we have details for it
    if (sponsorDetails[name]) {
      setSelectedCompany(name);
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-[#fafafa] text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Sponsor Profiles</h1>
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

      {/* Main Content Area */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex-grow flex flex-col items-center">
        
        <div className="w-full text-left mb-4">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-4">Sponsor Profiles</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            eResearch and the Conference Organising Committee gratefully acknowledge the support of our sponsors.
          </p>
        </div>

        {/* Main Sponsor Tiers */}
        <div className="w-full flex flex-col gap-4">
          {mainTiers.map((tier, idx) => (
            <div key={idx} className="w-full flex flex-col">
              <Divider title={tier.title} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <SponsorCard key={sIdx} sponsor={sponsor} onOpen={handleOpen} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Split Tiers (Coffee Cart & Website, etc) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
          {bottomTiers.map((tier, idx) => (
            <div key={idx} className="w-full flex flex-col">
              <Divider title={tier.title} />
              <SponsorCard sponsor={tier.sponsor} isHalf={true} onOpen={handleOpen} />
            </div>
          ))}
        </div>

        {/* Networking Night Sponsor */}
        <div className="w-full flex flex-col mt-4">
          <Divider title={networkingNightSponsor.title} />
          <SponsorCard sponsor={networkingNightSponsor.sponsor} onOpen={handleOpen} />
        </div>

      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCompany && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[85vh] overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-sm text-gray-700">Company Profile</h2>
                <button onClick={() => setSelectedCompany(null)} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto flex-1 text-[13px] text-gray-600 leading-relaxed font-light">
                {sponsorDetails[selectedCompany]}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
