"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

const packages = [
  { name: "Platinum Sponsor (SOLD)", price: "$38,500 inc. GST" },
  { name: "Gold Sponsor (SOLD)", price: "$26,000 inc. GST" },
  { name: "Silver Sponsor – (SOLD)", price: "$16,000 inc. GST" },
  { name: "Bronze Sponsor – One Remaining", price: "$8,000 inc. GST" },
  { name: "Exhibition Packages – Two Remaining", price: "From $3,250 inc. GST" },
  { name: "Juice Cart Sponsor – Exclusive", price: "$9,000 inc. GST" },
  { name: "Coffee Cart Sponsor (SOLD)", price: "$7,500 inc. GST" },
  { name: "Welcome Reception Sponsor (SOLD)", price: "$6,000 inc. GST" },
  { name: "Networking Night Sponsor – Three Available", price: "$7,500 inc. GST" },
  { name: "Website Sponsors – Exclusive (SOLD)", price: "$5,000 inc. GST" },
  { name: "Name Badge and Lanyard Sponsor (SOLD)", price: "$4,000 inc. GST" },
  { name: "Printed Program Sponsor – Exclusive", price: "$4,000 inc. GST" },
  { name: "App Sponsor – Exclusive", price: "$3,000 inc. GST" },
  { name: "Day Catering Sponsor – Three Available", price: "$3,000 inc. GST" },
  { name: "Advertising Opportunities", price: "Various" }
];

export default function SponsorsExhibitorsOpportunities() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800 font-sans">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[220px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[34px] font-bold tracking-wide">Sponsors & Exhibitors Opportunities</h1>
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
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex-grow flex flex-col lg:flex-row gap-12">

        {/* Left Column: Invitation and Enquiries */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6 text-[14px] leading-relaxed text-gray-600 font-light">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2 font-sans">Invitation</h2>

          <p>
            On behalf of the Organising Committee, we warmly invite your organisation to sponsor or exhibit at the
            <strong> eResearch Australasia 2026 Conference.</strong>
          </p>

          <p>
            The conference runs 26–30 October 2026 at the iconic Melbourne Cricket Ground (MCG) and will bring together
            around 450 national and international delegates—leaders transforming research through cutting-edge information technology.
          </p>

          <p>
            Delegates span diverse ICT disciplines and include Australasia’s top researchers, practitioners, and educators
            from the private, government, and education sectors.
          </p>

          <p>
            Sponsorship puts your brand in the spotlight, aligning with innovation and leadership while giving you prime
            visibility among key decision-makers. Major sponsors enjoy exclusive promotional and presentation
            opportunities—think of it as a winning shot straight to the centre of the action.
          </p>

          <p>
            Exhibiting gives you a front-row seat to showcase your products and services to a highly engaged audience
            actively seeking the latest research solutions. Connect with potential clients, collaborators, and sector leaders in
            a dynamic, high-impact environment.
          </p>

          <p>
            The exhibition runs Tuesday 27 – Thursday 29 October and features:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Networking functions hosted on the exhibition floor at the close of the first day’s sessions</li>
            <li>Poster displays throughout the exhibition space</li>
            <li>All catering and conference breaks hosted in the exhibition area</li>
          </ul>

          <p>
            Packages can be tailored to your goals, ensuring a meaningful return on investment.
          </p>

          <p>
            Join us at the MCG to score big in shaping the future of eResearch. We look forward to welcoming your
            organisation as a vital part of this game-changing conference.
          </p>

          <p className="mt-4 font-semibold text-gray-800">
            General Chairs, eResearch Australasia 2026 Conference<br />
            Luc Betbeder-Matibet & Rebecca Farrington
          </p>

          <div className="mt-8">
            <h2 className="text-[26px] font-semibold text-gray-700 mb-4 font-sans">Enquiries</h2>
            <p className="mb-1">Please contact Conference Design to discuss supporting the conference.</p>
            <p className="mb-1">+61 3 6231 2999</p>
            <a href="mailto:mail@conferencedesign.com.au" className="text-blue-600 hover:underline">
              mail@conferencedesign.com.au
            </a>
          </div>
        </div>

        {/* Right Column: Package Overview and Buttons */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-6 font-sans">Package Overview</h2>

          <div className="flex flex-col border-b border-gray-100">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`flex justify-between py-3 px-2 border-t border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                <span className="text-[13.5px] font-semibold text-gray-800 w-3/5 pr-4">{pkg.name}</span>
                <span className="text-[13.5px] text-gray-600 w-2/5 text-left font-light">{pkg.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm">
              Book Your Package Here
            </button>
            <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm">
              Live Floorplan
            </button>

            <div className="mt-2">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-5 rounded text-[13px] flex items-center gap-2 transition-colors w-fit">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                PRINT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section (e.g. Platinum Sponsor) */}
      <section className="w-full px-6 max-w-[1200px] mx-auto pb-20">
        <div className="w-full bg-white rounded-lg p-0">

          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Platinum Sponsor – Sold</h2>
          <p className="text-gray-500 text-sm mb-8">$38,500 inc. GST</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibition Booth */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibition Booth</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) 6m x 3m exhibition booth in a prime location, including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>White panel shell scheme booth</li>
                    <li>Fascia board with your company name</li>
                    <li>Your choice of two (2) furniture packages</li>
                    <li>Two (2) spotlights</li>
                    <li>One (1) 4-amp power outlet</li>
                    <li>One (1) wastepaper basket</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Six (6) exhibitor registrations including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verbal acknowledgement as Platinum Sponsor</li>
                <li>Logo and acknowledgement on all conference materials (print, PDFs, emails)</li>
                <li>Logo and hyperlink on the conference website and app</li>
                <li>400-word company profile on the conference website and app</li>
                <li>Five (5) PDF brochures/flyers available for download</li>
                <li>Two (2) promotional videos on the conference website and app</li>
                <li>Logo in the printed program</li>
                <li>16:9 advert included in rolling slides of all sessions (sponsor to provide artwork)</li>
                <li>Logo displayed on an individual sponsor slide in the plenary hall</li>
                <li>Two (2) pull-up banners displayed in the plenary hall</li>
                <li>Three (3) app push notifications – one per day</li>
                <li>Booth included in the "App Game"</li>
                <li>Lead management software</li>
                <li>Opt-in delegate list (first name, last name, organisation, state, email)</li>
              </ul>
            </div>

            {/* Keynote Presentation */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Keynote Presentation</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>30-minute keynote at the conference</li>
                <li>Logo & hyperlink with the presentation on the website and app</li>
                <li>Logo in the printed program</li>
                <li>Verbal acknowledgement as Speaker Sponsor at the start</li>
                <li>Logo displayed on a slide during the presentation</li>
                <li>One pull-up banner on-stage (Sponsor to supply)</li>
                <li>
                  <strong>Deadline for program inclusion: 29 June 2026</strong>
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Presentation title</li>
                    <li>Abstract (up to 250 words)</li>
                    <li>Speaker name(s) & affiliation(s)</li>
                    <li>Biography</li>
                  </ul>
                </li>
                <li className="list-none mt-4 font-semibold text-gray-800">
                  Speaker: <span className="font-light text-gray-600">Member of your organisation or nominated industry leader. Sponsor responsible for registration, travel, and accommodation.</span>
                </li>
                <li className="list-none mt-4 italic">
                  Subject to organising committee approval and availability.
                </li>
              </ul>
            </div>

            {/* Half-Day Pre/Post-Conference Workshop */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Half-Day Pre/Post-Conference Workshop</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Host a half-day workshop on Monday (pre) or Friday (post) conference</li>
                <li>Venue hire (half-day) at the conference venue</li>
                <li>Standard audio-visual</li>
                <li>Morning or Afternoon Tea</li>
                <li>Included in delegate registration portal; registration handled by conference managers</li>
                <li>Included in the conference program</li>
                <li>Two (2) pull-up banners displayed (sponsor to supply)</li>
                <li>Logo & hyperlink on the website and app</li>
                <li>Logo in the printed program</li>
                <li>
                  <strong>Deadline for program inclusion: 29 June 2026</strong>
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Workshop title</li>
                    <li>Facilitator/s names & affiliation</li>
                    <li>Overview and learning outcomes</li>
                    <li>Prerequisites, software or preparation required</li>
                  </ul>
                </li>
                <li className="list-none mt-4 font-semibold text-gray-800">
                  Attendance: <span className="font-light text-gray-600">Limited to 40 delegates</span>
                </li>
                <li className="list-none mt-4 italic">
                  Sponsor responsible for all facilitator/speaker arrangements and associated costs.
                </li>
              </ul>
            </div>

            {/* Sponsor Boardroom */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sponsor Boardroom</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>5 hours complimentary use during conference days (Tuesday – Thursday)</li>
                <li>Equipped with water, mints, pads, pens, and boardroom set for 10 people</li>
                <li>Additional hours: $100 per hour</li>
                <li className="list-none mt-4 italic">Subject to availability</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Gold Sponsor – Sold</h2>
          <p className="text-gray-500 text-sm mb-8">$26,000 inc. GST</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibition Booth */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibition Booth</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) 6m x 3m exhibition booth in a prime location, including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>White panel shell scheme booth</li>
                    <li>Fascia board with your company name</li>
                    <li>Your choice of two (2) furniture packages</li>
                    <li>Two (2) spotlights</li>
                    <li>One (1) 4-amp power outlet</li>
                    <li>One (1) wastepaper basket</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Four (4) exhibitor registrations including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verbal acknowledgement as Gold Sponsor</li>
                <li>Logo & acknowledgement on all materials, website, app, printed program</li>
                <li>400-word company profile, four (4) PDF brochures, two (2) promotional videos</li>
                <li>16:9 advert on rolling slides</li>
                <li>One (1) pull-up banner in plenary hall</li>
                <li>Three (3) app push notifications</li>
                <li>Booth included in App Game, lead management software, opt-in delegate list</li>
              </ul>
            </div>

            {/* 60-Minute BoF Session */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">60-Minute BoF Session</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>60-minute session in the conference program</li>
                <li>Logo & hyperlink on website and app</li>
                <li>Logo in printed program</li>
                <li>One pull-up banner on-stage (Sponsor to supply)</li>
                <li>
                  <strong>Deadline for program inclusion: 29 June 2026</strong>
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Session title, speakers, overview, objectives, attendee prerequisites</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Sponsor Boardroom */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sponsor Boardroom</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>3 hours complimentary use (additional $100/hour)</li>
                <li className="list-none mt-4 italic">Subject to availability</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Silver Sponsor – Sold</h2>
          <p className="text-gray-500 text-sm mb-8">$16,000 inc. GST</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibition Booth */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibition Booth</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) 6m x 3m exhibition booth in a prime location, including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>White panel shell scheme booth</li>
                    <li>Fascia board with your company name</li>
                    <li>Your choice of two (2) furniture packages</li>
                    <li>Two (2) spotlights</li>
                    <li>One (1) 4-amp power outlet</li>
                    <li>One (1) wastepaper basket</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Three (3) exhibitor registrations including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verbal acknowledgement as Silver Sponsor</li>
                <li>Logo & acknowledgement on all materials, website, app, printed program</li>
                <li>400-word company profile, three (3) PDF brochures, two (2) promotional videos</li>
                <li>Two (2) app push notifications</li>
                <li>Booth included in App Game, lead management software, opt-in delegate list</li>
              </ul>
            </div>

            {/* 15-Minute Presentation */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">15-Minute Presentation</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>15-minute presentation in main conference program</li>
                <li>Logo & hyperlink on website and app</li>
                <li>Logo in printed program</li>
                <li>One pull-up banner on-stage (Sponsor to supply)</li>
                <li>
                  <strong>Deadline for program inclusion: 29 June 2026</strong>
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Presentation title, abstract (250 words), speaker name(s) & biography</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Sponsor Boardroom */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sponsor Boardroom</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>2 hours complimentary use (additional $100/hour)</li>
                <li className="list-none mt-4 italic">Subject to availability</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Bronze Sponsor – One Remaining</h2>
          <p className="text-gray-500 text-sm mb-8">$8,000 inc. GST</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibition Booth */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibition Booth</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) 3m x 3m exhibition booth in a prime location, including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>White panel shell scheme booth</li>
                    <li>Fascia board with your company name</li>
                    <li>Your choice of two (2) furniture packages</li>
                    <li>Two (2) spotlights</li>
                    <li>One (1) 4-amp power outlet</li>
                    <li>One (1) wastepaper basket</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Two (2) exhibitor registrations including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verbal acknowledgement as Bronze Sponsor</li>
                <li>Logo & acknowledgement on materials, website, app, printed program</li>
                <li>400-word company profile, two (2) PDF brochures, one (1) promotional video</li>
                <li>One (1) app push notification</li>
                <li>Booth included in App Game, lead management software, opt-in delegate list</li>
              </ul>
            </div>

            {/* Sponsor Boardroom */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sponsor Boardroom</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>1 hour complimentary use (additional $100/hour)</li>
                <li className="list-none mt-4 italic">Subject to availability</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="w-full mt-24">
          <h2 className="text-[28px] font-semibold text-gray-700 mb-10">Exhibition Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Commercial Exhibitor */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Commercial Exhibitor – $4,250</h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Inclusions</h4>

              <div className="flex flex-col gap-6 text-[14px] text-gray-600 font-light leading-relaxed">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Exhibition Booth</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      One (1) 3m x 2m exhibition booth in a prime location, including:
                      <ul className="list-[circle] pl-6 mt-2 space-y-2">
                        <li>White panel shell scheme booth</li>
                        <li>Fascia board with your company name</li>
                        <li>Your choice of two (2) furniture packages</li>
                        <li>Two (2) spotlights</li>
                        <li>One (1) 4-amp power outlet</li>
                        <li>One (1) wastepaper basket</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Two (2) exhibitor registrations including:
                      <ul className="list-[circle] pl-6 mt-2 space-y-2">
                        <li>Access to all conference sessions</li>
                        <li>Tickets to the social functions are available to purchase</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Logo & hyperlink on conference app</li>
                    <li>50-word profile on app, one (1) PDF brochure</li>
                    <li>Booth included in App Game, lead management software</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* New Commercial Exhibitor */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">New Commercial Exhibitor – $3,250</h3>
                <p className="text-[14px] text-gray-600 font-light mt-4">For new participants qualifying for commercial category (approval required)</p>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Inclusions</h4>

              <div className="flex flex-col gap-6 text-[14px] text-gray-600 font-light leading-relaxed">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Exhibition Booth</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      One (1) 3m x 2m exhibition booth in a prime location, including:
                      <ul className="list-[circle] pl-6 mt-2 space-y-2">
                        <li>White panel shell scheme booth</li>
                        <li>Fascia board with your company name</li>
                        <li>Your choice of two (2) furniture packages</li>
                        <li>Two (2) spotlights</li>
                        <li>One (1) 4-amp power outlet</li>
                        <li>One (1) wastepaper basket</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Two (2) exhibitor registrations including:
                      <ul className="list-[circle] pl-6 mt-2 space-y-2">
                        <li>Access to all conference sessions</li>
                        <li>Tickets to the social functions are available to purchase</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Logo & hyperlink on conference app</li>
                    <li>50-word profile on app, one (1) PDF brochure</li>
                    <li>Booth included in App Game, lead management software</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* eResearch/NCRIS Exhibitor */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">eResearch/NCRIS Exhibitor – $3,250<br />NCRIS Alley – New for 2026!</h3>
                <p className="text-[14px] text-gray-600 font-light mt-4">For universities, NCRIS projects, non-commercial research organisations (approval required)</p>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Inclusions</h4>

              <div className="flex flex-col gap-6 text-[14px] text-gray-600 font-light leading-relaxed">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Exhibition Booth</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      One (1) 3m x 2m exhibition booth in a prime location, including:
                      <ul className="list-[circle] pl-6 mt-2 space-y-2">
                        <li>White panel shell scheme booth</li>
                        <li>Fascia board with your company name</li>
                        <li>Your choice of two (2) furniture packages</li>
                        <li>Two (2) spotlights</li>
                        <li>One (1) 4-amp power outlet</li>
                        <li>One (1) wastepaper basket</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Two (2) exhibitor registrations including:
                      <ul className="list-[circle] pl-6 mt-2 space-y-2">
                        <li>Access to all conference sessions</li>
                        <li>Tickets to the social functions are available to purchase</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Logo & hyperlink on conference app</li>
                    <li>50-word profile on app, one (1) PDF brochure</li>
                    <li>Booth included in App Game, lead management software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Juice Cart Sponsor – Exclusive</h2>
          <p className="text-gray-500 text-sm mb-8">$9,000 inc. GST</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Juice cart with attendant serving 250 drinks/day (additional drinks at cost)</li>
                <li>Cart branding, verbal acknowledgement, logo & acknowledgement on all materials</li>
                <li>Logo & hyperlink on website and app, 200-word profile, two (2) PDF brochures</li>
                <li>Logo in printed program, joint sponsor slide in plenary hall</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Coffee Cart Sponsor */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Coffee Cart Sponsor – Sold</h2>
          <p className="text-gray-500 text-sm mb-8">$7,750 inc. GST</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">
            <p>
              The cafe will have a barista serving coffee, hot chocolate and tea from morning tea to afternoon tea each day of the conference. The cafe includes a barista, cafe style furniture, assorted ottomans and up to 300 coffees per day.
            </p>

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verbal acknowledgement, logo & acknowledgement on materials</li>
                <li>Logo & hyperlink on website and app, 200-word profile, two (2) PDF brochures</li>
                <li>Logo in printed program, joint sponsor slide in plenary hall</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Welcome Reception Sponsor */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Welcome Reception Sponsor – Sold</h2>
          <p className="text-gray-500 text-sm mb-8">$6,000 inc. GST</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
                <li>Three (3) additional complimentary function tickets</li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Opportunity to address delegates (5 minutes)</li>
                <li>Verbal acknowledgement, logo & acknowledgement on all materials</li>
                <li>Logo & hyperlink on website and app, 200-word profile, two (2) PDF brochures</li>
                <li>Logo in printed program, four (4) pull-up banners (sponsor to supply)</li>
                <li>Logo displayed in conference program and joint sponsor slide</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Networking Night Sponsor */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Networking Night Sponsor – NEW for 2026 (Three Opportunities)</h2>
          <p className="text-gray-500 text-sm mb-8">$7,500 inc. GST</p>

          <div className="flex flex-col gap-4 text-[14px] text-gray-600 font-light leading-relaxed mb-8">
            <p>Create a memorable experience for your clients while celebrating 20 years of eResearch Australasia.</p>
            <p>We are thrilled to introduce a new package for 2026, providing you with the opportunity to host a dedicated networking function conveniently in one of the unique spaces at the Melbourne Cricket Ground (MCG). Available on Wednesday and Thursday Evening during the conference program.</p>
            <p>This package has been designed to enhance your engagement with delegates, and showcase your brand in a relaxed, yet iconic and world-class setting.</p>
            <p>Choose from one of the following options:</p>
            <ul className="list-none space-y-1 ml-4 text-gray-700">
              <li>1. The Deck</li>
              <li>2. Founders Bar</li>
              <li>3. Robert Flower Terrace</li>
              <li>4. Players Changerooms</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Each Networking Sponsorship Night includes */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Each Networking Sponsorship Night includes:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exclusive hire of the selected MCG event space for up to 3 hours</li>
                <li>Advertisement on the conference website</li>
                <li>Canape and beverage service for 3 hours for up to 30 people</li>
                <li>Basic AV for speeches or presentations</li>
                <li>Naming rights to your event</li>
              </ul>
            </div>

            {/* Additional Information */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Additional Information</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Venue theming and any expenditure beyond the Canape and beverage package will be billed to the sponsor post-conference.</li>
                <li>Catering beyond the package can be arranged at the sponsor's discretion (additional costs apply).</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Website Sponsors */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Website Sponsors – Exclusive (Sold)</h2>
          <p className="text-gray-500 text-sm mb-8">$5,000 inc. GST</p>

          <div className="flex flex-col gap-4 text-[14px] text-gray-600 font-light leading-relaxed mb-8">
            <p>Sponsoring the conference website provides extensive online visibility, reaching a global audience and enhancing brand recognition, credibility, and engagement within the eResearch community.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Logo and hyperlink on <strong>every page</strong> of the conference website</li>
                <li>Logo and acknowledgement as Website Sponsor on all conference materials (print, PDFs, broadcast emails)</li>
                <li>Verbal acknowledgement as Website Sponsor during the conference</li>
                <li>Logo and hyperlink on the conference app</li>
                <li>200-word company profile on the website and app</li>
                <li>Two (2) PDF brochures/flyers available for download</li>
                <li>Logo in the printed program</li>
                <li>Logo displayed on a joint sponsors slide at the conference</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Name Badge and Lanyard */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Name Badge and Lanyard – Sold</h2>
          <p className="text-gray-500 text-sm mb-8">$4,000 inc. GST</p>

          <div className="flex flex-col gap-4 text-[14px] text-gray-600 font-light leading-relaxed mb-8">
            <p>This high-visibility sponsorship ensures your brand is prominently displayed on every delegate, creating a lasting impression while demonstrating your support for the conference.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Logo printed on each delegate name badge and lanyard</li>
                <li>Logo and acknowledgement as Name Badge and Lanyard Sponsor on all conference materials (print, PDFs, broadcast emails)</li>
                <li>Verbal acknowledgement during the conference</li>
                <li>Logo and hyperlink on the website and app</li>
                <li>200-word company profile on the website and app</li>
                <li>One (1) PDF brochure/flyer available for download</li>
                <li>Logo in the printed program</li>
                <li>Logo displayed on a joint sponsors slide at the conference</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Pocket Program Sponsor */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Pocket Program Sponsor – Exclusive</h2>
          <p className="text-gray-500 text-sm mb-8">$4,000 inc. GST</p>

          <div className="flex flex-col gap-4 text-[14px] text-gray-600 font-light leading-relaxed mb-8">
            <p>Sponsor the printed program and gain prominent visibility to every delegate while demonstrating your support for industry advancement.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verbal acknowledgement during the conference</li>
                <li>Logo displayed on a joint sponsors slide at the conference</li>
                <li>Logo and acknowledgement as Printed Program Sponsor on all materials (print, PDFs, emails)</li>
                <li>Logo and hyperlink on the website and app</li>
                <li>200-word company profile on the website and app</li>
                <li>One (1) PDF brochure/flyer available for download</li>
              </ul>
            </div>

            {/* Conference Visibility – Printed Program */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility – Printed Program</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Logo on the <strong>front cover</strong> of the printed program</li>
                <li>Logo on <strong>every page</strong> of the printed program</li>
                <li>Advertisement on the <strong>back cover</strong> of the program</li>
              </ul>
            </div>

          </div>
        </div>

        {/* App Sponsor */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">App Sponsor – Exclusive</h2>
          <p className="text-gray-500 text-sm mb-8">$3,000 inc. GST</p>

          <div className="flex flex-col gap-4 text-[14px] text-gray-600 font-light leading-relaxed mb-8">
            <p>Increase your brand visibility and engage directly with delegates through the official conference app.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Logo and acknowledgement as App Sponsor on all materials (print, PDFs, emails)</li>
                <li>Verbal acknowledgement during the conference</li>
                <li>Logo and hyperlink on the website and app</li>
                <li>200-word company profile on the website and app</li>
                <li>Logo in the printed program</li>
                <li>Logo displayed on a joint sponsors slide</li>
                <li>One (1) PDF brochure/flyer available for download</li>
              </ul>
            </div>

            {/* Conference Visibility – Conference App */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility – Conference App</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Logo and hyperlink on the <strong>app homepage</strong> and main menu</li>
                <li>Dedicated conference app page for your organisation</li>
                <li>Option to include up to <strong>five (5) products</strong> with dedicated pages and images.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Day Catering Sponsor */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Day Catering Sponsor – Three Available</h2>
          <p className="text-gray-500 text-sm mb-8">$3,000 inc. GST</p>

          <div className="flex flex-col gap-4 text-[14px] text-gray-600 font-light leading-relaxed mb-8">
            <p>Position your brand as a gracious host, creating a positive and memorable experience for delegates during one day of catering sponsorship (Tuesday, Wednesday, or Thursday).</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">Inclusions</h3>

          <div className="flex flex-col gap-8 text-[14px] text-gray-600 font-light leading-relaxed">

            {/* Exhibitor Registrations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Exhibitor Registrations</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  One (1) exhibitor registration including:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Access to all conference sessions</li>
                    <li>Access to all social functions</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Conference Visibility */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Conference Visibility</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verbal acknowledgement as Day Catering Sponsor on your specific day of the conference</li>
                <li>Logo and acknowledgement on all conference materials (print, PDFs, emails)</li>
                <li>Logo and hyperlink displayed with your day's catering breaks in the program</li>
                <li>Logo on signage at catering stations</li>
                <li>Logo in the printed program next to your day's catering breaks</li>
                <li>Logo displayed on an individual sponsor slide in the plenary hall on your day</li>
                <li>200-word company profile on the website and app</li>
                <li>One (1) PDF brochure/flyer available for download</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Advertising Enhancements */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-6">Advertising Enhancements</h2>

          <div className="flex flex-col gap-6 text-[14px] text-gray-600 font-light leading-relaxed">
            <p>Enhance your sponsorship or participation with targeted advertising:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Printed program advert – sponsor to provide copy – <strong>$1,000</strong></li>
              <li>Brochure/flyer/video on conference website and app – <strong>$500</strong></li>
              <li>Signage at the conference (standard pull-up banner, sponsor to supply) – <strong>$600 per sign</strong></li>
            </ul>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="w-full bg-white rounded-lg p-0 mt-20">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-6">Terms and Conditions</h2>

          <div className="flex flex-col gap-6 text-[14px] text-gray-600 font-light leading-relaxed mb-10">
            <p>
              These terms and conditions apply to organisations and their staff (you, your organisation, your group) participating in this event (the event) being organised by Conference Design Pty Ltd on behalf of the Host (us, we, Conference Design, the Host). By participating in the event, you are deemed to have agreed to these terms and conditions. It is your responsibility to ensure all your staff participants are aware of these terms and conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 text-[12px] text-gray-600 font-light leading-relaxed">

            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Acceptance</h4>
                <p>Acceptance of all applications is subject to our approval and we reserve the right to decline any application.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Payment</h4>
                <p>Payment is required within 7-days of Conference Design issuing your tax invoice. Sponsorship and exhibition entitlements, including the allocation of exhibition space, do not commence until payment has been received.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Currency and GST</h4>
                <p>All prices are quoted in Australian Dollars (AUD$) and include GST, unless otherwise stated.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Confirmation of Bookings and Tax Invoice</h4>
                <p>Once you have completed an online booking, you will be sent a confirmation email with a PDF Tax Invoice.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Point of Contact & Conference Updates</h4>
                <p>You will provide a single point of contact when booking to coordinate your participation. All information and updates will be sent via email to your point of contact.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">EFT Payments</h4>
                <p className="mb-4">Please include the EFT Reference shown on your Tax Invoice when submitting an EFT and email Conference Design the details including date, amount and your bank's reference.</p>
                <ul className="list-disc pl-5 space-y-4">
                  <li>BSB: 017 010</li>
                  <li>Account #: 1085 82575</li>
                  <li>Account Name: Conference Design Pty Ltd</li>
                  <li>Bank: ANZ Bank, 61 Liverpool Street, Hobart 7000</li>
                  <li>Swift Code: ANZBAU3M</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Credit Card Payments</h4>
                <p>Credit card charges appear as Conference Design Pty Ltd on your card statement. When using the online payment system credit card transactions will be processed directly by ANZ eGate and Conference Design does not store or transmit your credit card details. ANZ eGate is a secure and PCI compliant platform.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Attendee Numbers</h4>
                <p>We will promote the event to maximise participation, but we do not guarantee a minimum number of attendees either onsite or online.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Package Inclusions & Associated Costs</h4>
                <p>Refer to the sponsor and exhibitor prospectus for inclusions for each package. All costs associated with your inclusions in the event will be borne solely by you and we shall have no liability for any costs unless we have explicitly agreed in writing.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">No Cancellation of your Booking</h4>
                <p>All payments are non-refundable once an application has been accepted. If you are no longer able to attend the event, please contact Conference Design to discuss your participation.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cancellation or Postponement of an In-person Event</h4>
                <p className="mb-4">We do not accept any liability for losses incurred, including but not limited to travel, accommodation, exhibition and displays, or any other costs or expenses, if the in-person Event is cancelled or postponed due to unforeseen circumstances or any occurrence that renders performance of the Event inadvisable, illegal, impracticable or impossible in our sole opinion. An unforeseen event could include, but is not limited to, an infectious disease outbreak; industrial disruptions; service provider failures; governmental restrictions or regulations; war or apparent act of war; terrorism or apparent act of terrorism; disaster; civil disorder, disturbance, and/or riots; curtailment, suspension or restriction on transportation; or any other emergency.</p>
                <p>If an in-person conference is cancelled or postponed, refunds will not be issued but available funds will be credited towards an online conference or an in-person conference.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Moving to an Entirely Online Event</h4>
                <p>If we believe, at our sole discretion, that a hybrid or in-person event needs to be held entirely online, all bookings will be transferred to the online event. The package fees will be revised to reflect an online format and you will be refunded any difference between the in-person and online package fees. Full refunds of sponsor and exhibitor bookings will not be available due to an event moving online.</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Changes</h4>
                <p>We reserve the right to change any and all aspects of the event, including but not limited to, the name, themes, content, program, speakers, format, performers, hosts, moderators, venues, and times. We reserve the right to amend or remove any sponsorship package, exhibition package or exhibition floor plan.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Disclaimer</h4>
                <p>Every effort has been made to present all the information accurately, however, we do not accept any liability for any inaccuracies in any published information. We will correct any published information as soon as possible and advise you accordingly.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Code of Conduct and Disruptive Behaviour</h4>
                <p>You agree your representatives will abide by the Conference Code of Conduct.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Codes of Practice</h4>
                <p>Where relevant, we urge you to observe and follow the Codes of Practice of the <strong>Medical Technology Association of Australia (MTAA)</strong> which are available at www.mtaa.org.au. This includes sponsors and exhibitors who may not be members of the MTAA. We also encourage sponsors and exhibitors to adhere to the <strong>Medicines Australia Code of Conduct</strong> and associated guidelines available at https://medicinesaustralia.com.au/code-of-conduct/.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Revocation of Participation</h4>
                <p>We may revoke an agreement with you, if we believe, in our sole opinion, the participation of an organisation is prejudicial to the interests and objectives of the event Host.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Product or Service Endorsement</h4>
                <p>Your participation in the event or sponsorship of any activity does not indicate endorsement of your products or services and must not be stated or inferred in any way.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Exhibition Floor Plan</h4>
                <p>The exhibition floor plan is subject to change without notice. The floor plan is not to an exact scale but accurately represents the position and sizes of exhibition spaces at in-person conferences.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Allocation of Exhibition Space</h4>
                <p>Exhibition spaces are selected when booking online. We may revise allocated spaces after taking into account an organisation's sponsorship, the date of application, preferences, proximity to competitors and any other matters deemed relevant by us.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Insurance</h4>
                <p className="mb-4">No insurance is provided.</p>
                <p>All sponsors and exhibitors must have adequate insurance for the period of the conference, including public and product liability cover and professional indemnity insurance. You will need to provide a certificate of currency to confirm your participation onsite.</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Indemnity</h4>
                <p>You shall indemnify the Host and Conference Design for any loss, damage to property or injury to persons suffered as a result of your participation in the conference, except where the Host or Conference Design are found to be negligent.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Supply of Goods and Services</h4>
                <p>The supply of any goods, services, samples or advice is entirely at your own risk.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Security</h4>
                <p>Valuable items should NOT be left unattended at your exhibition space at any time and especially not overnight. No responsibility is accepted for any loss or damage to equipment and display materials.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Representatives</h4>
                <p>Anyone from your organisation attending the conference or guests you wish to invite to the conference must register with Conference Design before the conference. An official name badge will be required to access the in-person meeting and exhibition areas.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Registration Terms and Conditions</h4>
                <p>All terms and conditions listed on the Registration page apply to your representatives.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Custom Stands</h4>
                <p>All custom stands must fit within the purchased exhibition space. Custom stands must not exceed 3.0 metres high. If you have any questions please email us a floor plan and elevations of your proposed stand.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Opt-in Delegate List</h4>
                <p>The opt-in delegate list will be supplied to eligible sponsors and exhibitors prior to the conference and will include name, organisation, state and email address. The list provided will exclude the names of delegates who have not provided their consent.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Interactive Exhibitions</h4>
                <p>Whilst we encourage you to develop entertaining and interactive displays to attract delegates, please be mindful not to disturb other exhibitors or delegates.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Signage at the venue</h4>
                <p>Your signage should be free standing to allow for easy placement and should be contained with your exhibition space.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Dismantling Displays</h4>
                <p>Due to safety requirements you will not be able to dismantle your display before the published closing time.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Damage to the Venue</h4>
                <p>You indemnify us from all liability for damage to the venue deemed to have been caused by your staff, contractors, agents or guests. The cost of repairs will be the sole responsibility of your organisation.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Unilab Website Sponsor Banner */}
        <div className="w-full mt-24 mb-10 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-8">Website Sponsor</h3>
          <img
            src="https://conference.eresearch.edu.au/wp-content/uploads/2026/05/2026-eResearch-Website-Sponsor-Banner.png"
            alt="Unilab Website Sponsor"
            className="max-w-[700px] w-full h-auto object-contain"
          />
        </div>

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
