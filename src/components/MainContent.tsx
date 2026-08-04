export default function MainContent() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
        
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl text-brand-text font-bold mb-8">Invitation to Attend</h2>
          <div className="text-brand-text/80 space-y-6 text-lg leading-relaxed">
            <p>Dear Colleagues,</p>
            <p>
              We are delighted to invite you to join us for the 2026 eResearch Australasia Conference, taking place for the first time at the iconic Melbourne Cricket Ground (MCG) from 26–30 October 2026, in Melbourne, Australia. Marking the 20th anniversary of the conference, this milestone event will be held under the theme <strong>Celebrating our Past — Shaping our Future</strong>, reflecting on two decades of progress while looking ahead to the next era of eResearch.
            </p>
            <p>
              Hosted by Australasian eResearch Organisations (AeRO) Inc., the conference is the leading forum for everyone involved in enabling, supporting and advancing eResearch — from researchers, data specialists and research infrastructure providers, to technologists, librarians, policy makers, software developers and industry partners.
            </p>
            <p>
              The conference offers a vibrant and inclusive space to connect, share and explore new ideas, practical solutions and real-world exemplars. Together, we will examine how evolving digital technologies and information-centric approaches are transforming the way research is conducted — enabling collaboration, data stewardship, analysis, discovery and reuse across disciplines and sectors.
            </p>
            <p>
              By attending, you will be inspired by national and international experts, build meaningful connections with peers from across the eResearch ecosystem, and engage with industry leaders shaping the tools and platforms that support research excellence.
            </p>
            <p>
              Pre- and post-conference workshops will be held on Monday and Friday, with the main conference program running from Tuesday to Thursday, offering multiple opportunities to learn, contribute and connect.
            </p>
            <p>
              We warmly invite participants from all areas of eResearch to be part of this exciting event. Please save 26–30 October 2026 in your calendar — we look forward to welcoming you to Melbourne and to an unforgettable conference experience at the MCG.
            </p>
            
            <div className="pt-8">
              <p className="font-semibold text-brand-text">2026 eResearch Conference Co-Chairs</p>
              <p>Luc Betbeder-Matibet and Rebecca Farrington</p>
              
              <div className="flex flex-wrap gap-6 md:gap-8 mt-6">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0">
                  <img 
                    src="https://conference.eresearch.edu.au/wp-content/uploads/2024/01/1-200x200.png" 
                    alt="Luc Betbeder-Matibet" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0">
                  <img 
                    src="https://conference.eresearch.edu.au/wp-content/uploads/2026/04/2024-co-chair-photos-200x200.jpg" 
                    alt="Rebecca Farrington" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="flex flex-col gap-12">
          {/* Registration Block */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-4">Registration</h3>
            <p className="text-brand-text/80 mb-4">
              Registration and accommodation bookings are now open. Take advantage of our Early Bird rates and save up to $300 by registering before the deadline.
            </p>
            <p className="text-brand-text/80 mb-6">
              Early Bird Registration closes on Friday, 4 September. Secure your place today and enjoy the best available rates.
            </p>
            <button className="w-full bg-brand-purple text-white py-4 rounded-md font-semibold hover:bg-brand-purple/90 transition-colors">
              Registration
            </button>
          </div>

          {/* Presenter Guidelines Block */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-4">Presenter Guidelines</h3>
            <p className="text-brand-text/80 mb-6">
              Presentation slides and poster PDFs due – Wednesday 14 October
            </p>
            <button className="w-full bg-brand-purple text-white py-4 rounded-md font-semibold hover:bg-brand-purple/90 transition-colors">
              Presenter Guidelines
            </button>
          </div>

          {/* Program Overview Block */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-4">Program Overview</h3>
            <p className="text-brand-text/80 mb-6">
              Held over five days including Pre-Conference Workshops on Monday, 26 October and Post-Conference Workshops on Friday, 30 October.
            </p>
            <button className="w-full bg-brand-purple text-white py-4 rounded-md font-semibold hover:bg-brand-purple/90 transition-colors">
              Program
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
