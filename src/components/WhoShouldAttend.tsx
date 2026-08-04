export default function WhoShouldAttend() {
  return (
    <section className="w-full bg-white py-12 pb-24 md:py-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl text-brand-text font-bold mb-12">Who Should Attend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Research & Academic Professionals */}
          <div>
            <h3 className="font-bold text-brand-text mb-6">Research & Academic Professionals</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-text/80 text-sm">
              <li>Researchers & Scientists from all disciplines</li>
              <li>Research Computing Specialists</li>
              <li>Research Managers</li>
              <li>University Representatives</li>
            </ul>
          </div>

          {/* Government & Policy Representatives */}
          <div>
            <h3 className="font-bold text-brand-text mb-6">Government & Policy Representatives</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-text/80 text-sm">
              <li>Government Representatives</li>
              <li>Representatives from Publicly Funded Research Agencies</li>
              <li>National Collaborative Research Infrastructure Strategy (NCRIS) Project Members</li>
            </ul>
          </div>

          {/* eResearch & Data Specialists */}
          <div>
            <h3 className="font-bold text-brand-text mb-6">eResearch & Data Specialists</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-text/80 text-sm">
              <li>eResearch Analysts</li>
              <li>Data Analysts & Data Managers</li>
              <li>High-Performance Computing (HPC) Managers & Specialists</li>
              <li>Research Software Engineers & Developers</li>
              <li>Software & App Engineers</li>
            </ul>
          </div>

          {/* Library & Information Science Professionals */}
          <div>
            <h3 className="font-bold text-brand-text mb-6">Library & Information Science Professionals</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-text/80 text-sm">
              <li>Librarians</li>
              <li>Digital Preservation & Open-Access Advocates</li>
            </ul>
          </div>

          {/* IT & Infrastructure Professionals */}
          <div>
            <h3 className="font-bold text-brand-text mb-6">IT & Infrastructure Professionals</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-text/80 text-sm">
              <li>Chief Information Officers (CIOs)</li>
              <li>IT Managers & Directors</li>
              <li>Technology, Hardware, Storage, and Infrastructure Suppliers</li>
              <li>Programmers</li>
            </ul>
          </div>

          {/* Research Support & Administration */}
          <div>
            <h3 className="font-bold text-brand-text mb-6">Research Support & Administration</h3>
            <ul className="list-disc pl-5 space-y-2 text-brand-text/80 text-sm">
              <li>Project Managers</li>
              <li>Professionals in Associated Disciplines</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
