"use client";


export default function ConferenceInfo() {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-brand-gray/50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {/* Important Dates */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-6">Important Dates</h3>
            <ul className="space-y-4 text-brand-text/80 text-sm">
              <li>
                <strong>Registration Open</strong><br />
                April 2026
              </li>
              <li>
                <strong>Call for Abstracts Open</strong><br />
                June 2026
              </li>
              <li>
                <strong>Call for Abstracts Close</strong><br />
                Wednesday, 24 June 2026
              </li>
              <li>
                <strong>Early Bird & Group Registration Closes</strong><br />
                Friday, 4 September 2026
              </li>
              <li>
                <strong>Pre-Conference Workshops</strong><br />
                Monday, 26 October 2026
              </li>
              <li>
                <strong>Conference Starts</strong><br />
                Tuesday, 27 October 2026
              </li>
              <li>
                <strong>Conference Closes</strong><br />
                Thursday, 29 October 2026
              </li>
              <li>
                <strong>Post-Conference Workshops</strong><br />
                Friday, 30 October 2026
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-6">Connect</h3>
            <p className="text-brand-text/80 mb-4">Follow us on LinkedIn.</p>
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B0B6C0] text-white hover:bg-brand-purple transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Mailing List */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-6">Mailing List</h3>
            <p className="text-brand-text/80 mb-6">Join our mailing list to receive conference updates.</p>

            <form className="space-y-4 max-w-sm">
              <h4 className="text-xl font-bold mb-2">Subscribe</h4>
              <p className="text-xs text-red-500 text-right mb-2">* indicates required</p>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" className="border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-brand-purple" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">First Name</label>
                <input type="text" className="border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-brand-purple" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Last Name</label>
                <input type="text" className="border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-brand-purple" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Organisation</label>
                <input type="text" className="border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-brand-purple" />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-sm font-bold mt-4 hover:bg-gray-800 transition-colors uppercase text-sm tracking-wide"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-brand-gray/50">
          {/* Venue */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-6">Venue</h3>
            <h4 className="text-xl font-bold mb-2 text-brand-text/90">Melbourne Cricket Ground (MCG)</h4>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-4">
              120 Brunton Avenue,<br />
              East Melbourne, VIC 300<br />
              Website link — <a href="https://mcgevents.com.au/" className="text-brand-purple hover:underline">https://mcgevents.com.au/</a>
            </p>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-6">
              Nestled within one of Australia's most iconic landmarks, the Melbourne Cricket Ground (MCG) offers a truly distinctive conference and events setting overlooking the hallowed turf and Melbourne's sporting precinct. Blending world-class facilities with rich history and expansive views, the MCG provides a memorable and uniquely Melbourne backdrop that elevates any conference experience.
            </p>
            <div className="w-full h-96 rounded-sm overflow-hidden mt-6">
              <img
                src="https://conference.eresearch.edu.au/wp-content/uploads/2025/12/MCG-1-1-800x524.jpg"
                alt="Melbourne Cricket Ground"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Conference Host */}
          <div>
            <h3 className="text-2xl text-brand-text font-bold mb-6">Conference Host</h3>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-6">
              Australasian eResearch Organisations (AeRO) Inc is the industry association focused on eResearch in Australasia. We play a critical coordination role for our members, who are actively transforming research via Information Technology.
            </p>

            <div className="mt-4">
              <img
                src="https://conference.eresearch.edu.au/wp-content/uploads/2025/08/AeRO_Logo_CMYK.png"
                alt="AeRO Logo"
                className="w-64 h-auto"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-brand-purple transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
}
