"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp, Printer, FileText } from "lucide-react";
import Link from "next/link";

export default function ExhibitorsManual() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800 font-sans">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[220px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[34px] font-bold tracking-wide">Sponsors & Exhibitors Manual</h1>
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

        {/* Left Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10 text-[14px] leading-relaxed text-gray-600 font-light">

          <div>
            <h2 className="text-[22px] font-semibold text-gray-700 mb-4">Welcome to the eResearch Australasia 2026 Exhibitor & Sponsor Manual</h2>
            <p className="mb-4">
              We're excited to have you joining us at the MCG. This guide contains everything you'll need to prepare for the conference, from key deadlines and marketing opportunities through to exhibition logistics and bump-in information.
            </p>
            <p className="mb-6">
              If you can't find what you're looking for, our team is always happy to help.
            </p>
            <p>
              Conference Design<br />
              <a href="mailto:mail@conferencedesign.com.au" className="text-[#1e8bc3] hover:underline">mail@conferencedesign.com.au</a><br />
              +61 3 6231 2999
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Venue Access & Parking</h2>
            <p>
              Melbourne Cricket Ground (MCG)<br />
              Brunton Ave, Richmond VIC 3002, Australia<br />
              The exhibition precinct encompasses both the Betty Cuthbert Lounge and Bar area as well as Jim Stynes Room
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-6">Key Contacts</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Venue – MCG</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>All queries and information for the venue must come through Conference Design.</li>
                <li>
                  <a href="mailto:eresearch@conferencedesign.com.au" className="text-[#1e8bc3] hover:underline">eresearch@conferencedesign.com.au</a><br />
                  03 6231 2999
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Exhibition Supply Company – Moreton Hire</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  Natalie Blauberg<br />
                  <a href="mailto:natalie.blauberg@moreton.net.au" className="text-[#1e8bc3] hover:underline">natalie.blauberg@moreton.net.au</a>
                </li>
              </ul>
              <p className="mb-2">Contact the exhibition supply company for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Exhibition booth and furniture</li>
                <li>Fascia signage</li>
                <li>Lighting & power</li>
                <li>Ordering additional items for your stand such as signage, printed panels, audio visual, plants, and furniture</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Freight Forwarder – GEL Events</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Colin Smith</li>
                <li><a href="mailto:colin@gelevents.com.au" className="text-[#1e8bc3] hover:underline">colin@gelevents.com.au</a></li>
                <li><a href="https://www.gelevents.com.au" target="_blank" rel="noopener noreferrer" className="text-[#1e8bc3] hover:underline">www.gelevents.com.au</a></li>
              </ul>
              <p className="mb-2">Contact the freight forwarder for:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Delivery and collection coordination:</strong> The venue does not have onsite storage, and deliveries are only permitted on Monday 26 October 2026 between 7am – 2pm, and collections on Thursday 29 October 2026 between 4:30pm – 6pm. The appointed freight handler can manage deliveries and collections outside these dates.</li>
                <li><strong>Direct freight services:</strong> To and from venue, with direct delivery to the Exhibition Hall.</li>
              </ul>
              <button className="bg-[#198ab7] hover:bg-[#1571a1] text-white font-medium py-3 px-6 rounded text-sm transition-colors shadow-sm">
                Book Freight Forwarding Services Here
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-6">Exhibition Open Hours</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">When Arriving at the Venue</h3>
              <p className="mb-4">
                Go straight to your stand and begin setting up. Conference staff will deliver your name badges and an exhibitor pack to your stand.
              </p>
              <p>
                Bring a high-vis vest as the venue requires one to be worn during bump-in if the stand build is still in progress.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Build, Set-Up and Pack Down Times</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Custom Stand Build</strong><br />
                  Monday, 26 October 06:30
                </li>
                <li>
                  <strong>Exhibitor Set-up Access</strong><br />
                  Monday, 26 October 15:00
                </li>
                <li>
                  <strong>Exhibitor Set-up Completed By</strong> <em>(including the removal of packing materials)</em><br />
                  Monday, 26 October 18:00
                </li>
                <li>
                  <strong>Exhibitor Pack Down Start</strong><br />
                  Thursday, 29 October 16:00
                </li>
                <li>
                  <strong>Exhibitor Pack Down Completed By</strong><br />
                  Thursday, 29 October 17:45
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Exhibition Open Hours</h3>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                <li>Tuesday, 27 October 08:00 – 19:00</li>
                <li>Wednesday, 28 October 08:30 – 19:00</li>
                <li>Thursday, 29 October 08:30 – 16:10</li>
              </ul>
              <p className="italic text-gray-500">Times may change – check the program page for updates.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Freight, Deliveries & Collections</h2>
            <p className="mb-8">Exhibitors and sponsors are responsible for all freight arrangements to and from the conference venue.</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Deliveries</h3>
              <p className="mb-4">Late and missing deliveries are the main problem for sponsors and exhibitors when arriving onsite for a conference.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Deliveries will only be accepted from 7am – 2pm, Monday, 26 2026</strong></li>
                <li>Use the delivery label provided by the venue</li>
                <li>Confirm directly with your courier that the delivery has been made <strong>before</strong> you arrive</li>
                <li>Have your courier contact details, consignment number, and delivery date with you when you arrive onsite</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Onsite Storage</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exhibitors cannot leave boxes and packing materials in the exhibition area during the conference</li>
                <li>There is no onsite storage, so please make alternative arrangements for any excess items and materials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Collections</h3>
              <p className="mb-4">Your staff need to ensure all steps are completed before leaving the exhibition.</p>
              <p className="mb-4">Sensitive and over-sized freight must be removed on the bump-out day.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>All goods must be collected by Thursday 29 October</strong></li>
                <li>Pack and label all materials</li>
                <li>Add your courier's consignment note and/or number as required</li>
                <li>Leave the items on your stand for collection by venue staff</li>
                <li>Arrange for your courier to collect the items from the loading dock</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10">

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Mandatory Forms</h2>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                Moreton Hire Exhibitor Form - 3m x 2m booths
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                Moreton Hire Exhibitor Form - 3m x 3m booths
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                Moreton Hire Exhibitor Form - 6m x 3m booths
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                MCG Safety Induction
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Quick Links</h2>
            <div className="flex flex-col gap-3 mb-6">
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                Exhibitor Portal
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                Live Exhibition Floorplan
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                Exhibition Schedule
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                Deliveries
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                MCG Delivery Form
              </button>
              <button className="w-full bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-4 rounded text-sm transition-colors shadow-sm text-center">
                MCG Collection Form
              </button>
            </div>

            <div className="flex gap-4">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded text-[13px] flex items-center gap-2 transition-colors">
                <Printer size={16} /> PRINT
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded text-[13px] flex items-center gap-2 transition-colors">
                <FileText size={16} /> PDF
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-[32px] font-semibold text-gray-700 mb-4">Exhibition Package</h2>
            <p className="text-[14px] text-gray-600 font-light mb-4">The standard exhibition package includes:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] text-gray-600 font-light">
              <li>A white panel shell scheme booth</li>
              <li>Fascia sign with your company name</li>
              <li>Your choice of two furniture packages</li>
              <li>2 x spotlights</li>
              <li>1x 4 amp power outlet</li>
              <li>1 x wastepaper basket</li>
              <li>Two registrations</li>
              <li>A 50-word profile in the conference app</li>
              <li>1 x PDF for download in the conference app</li>
              <li>Lead management software for use during the conference</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Exhibition Booths</h2>
            <img
              src="https://conference.eresearch.edu.au/wp-content/uploads/2025/04/Standard-Booth-Image-450x450.jpg"
              alt="Standard Exhibition Booth"
              className="w-full max-w-[400px] h-auto rounded border border-gray-100 mb-10"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Registrations</h2>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              Register your representatives 90 – 60 days before the conference. Accommodation bookings can be made when registering. A registration is required to access the exhibition area.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              Register via the link provided in your confirmation email.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600 font-light leading-relaxed">
              <li>Sponsors: Refer to the prospectus for the number of registrations included in your package</li>
              <li>Exhibitors: Two full registrations per booth</li>
              <li>
                Additional registrations:
                <ul className="list-[circle] pl-6 mt-2 space-y-2">
                  <li>Full Registration: $500</li>
                  <li>Day Pass: $300</li>
                  <li>Additional Welcome Function Tickets: $75</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Lead Management</h2>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              The conference app provides an integrated lead capture feature, allowing exhibitors to scan attendee badges and collect contact details seamlessly.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed">
              For detailed instructions, refer to the Lead Management web page.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">App Game & Prizes</h2>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              The app game is designed to encourage delegates to visit and engage with exhibitors. All sponsors and exhibitors will be issued a unique QR code for the game. Delegates must scan each code using the conference app to participate.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              You may choose to display your code prominently to reduce interruptions or keep it hidden to encourage direct interaction. To be eligible for the draw, delegates must scan all sponsor and exhibitor QR codes. The winner will be announced during the closing session.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              <strong>Sponsors and exhibitors are welcome to donate prizes for the game.</strong> To contribute, please contact <a href="mailto:mail@conferencedesign.com.au" className="text-[#1e8bc3] hover:underline">mail@conferencedesign.com.au</a>.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed">
              Prizes can either be brought to the conference or sent directly to the winner afterward. Your prize and organisation name will be acknowledged in the conference app.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-[22px] font-semibold text-gray-700 mb-4">Car Parking</h2>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              Car park entry is via Entrance A off Brunton Avenue. Vehicles over 1.2m in height will be directed to Entrance E.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              Scan your parking pass* at the security gate, then park near Lifts 9–11 (Red Lift Wall) or Goods Lift 8 for larger bump-in/bump-out items.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
              Take the lifts to Level 2 and follow the signage to the Betty Cuthbert Lounge.
            </p>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-6">
              * To receive your parking pass please complete the form below by <strong>Monday 7 September</strong>. Please note: 1 pass per exhibitor. Limited passes available.
            </p>
            <button className="bg-[#1e8bc3] hover:bg-[#1571a1] text-white font-medium py-3 px-6 rounded text-sm transition-colors shadow-sm">
              Parking Pass Form
            </button>
          </div>

        </div>

      </section>

      {/* Marketing and Advertising Section */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto border-t border-gray-100">
        <h2 className="text-[26px] font-semibold text-gray-700 mb-4">Marketing and Advertising</h2>
        <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-12">
          <strong><a href="#" className="text-[#1e8bc3] hover:underline">Refer to the prospectus</a></strong> to confirm the advertising and marketing benefits included with your package.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10 text-[14px] leading-relaxed text-gray-600 font-light">

            <div>
              <h3 className="text-[20px] font-semibold text-gray-700 mb-4">Organisation Profiles</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Sponsors – See the prospectus for your profile word limit</li>
                <li>Exhibitors – 50 words</li>
                <li>Due Date: On Booking</li>
                <li>Upload via the Exhibitor Portal</li>
              </ul>
              <p>
                We recommend including a contact email address, web address and phone number in your profile so customers can get in touch.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-gray-700 mb-4">Push Notifications</h3>
              <p className="mb-6">
                Short alerts sent via the conference app and online conference platform (eligible sponsors only).
              </p>
              <p className="mb-6">
                Include a brief message highlighting your booth, special offers, prize draws, session times, or key info delegates shouldn't miss. Aim for concise, action-oriented language.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Heading text maximum 10 words</li>
                <li>Body text maximum 30 words</li>
                <li>Due Date: 2 weeks before the conference</li>
                <li>Email to <a href="mailto:mail@conferencedesign.com.au" className="text-[#1e8bc3] hover:underline">mail@conferencedesign.com.au</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-gray-700 mb-4">Program Advertisements</h3>
              <p className="mb-6">Included for eligible sponsors and available for purchase.</p>
              <p className="mb-6">
                The design and supply of print-ready artwork by the due date is the responsibility of the advertiser.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Format: High-resolution, print-optimised PDF</li>
                <li>Colour: Full colour</li>
                <li>Size: A5 portrait</li>
                <li>Full page: 210mm (H) x 148mm (W)</li>
                <li>Bleed: Add 3mm bleed on all sides</li>
                <li>Marks: Include trim marks in the supplied file</li>
                <li>Due Date: 30 days before the conference</li>
                <li>Email to <a href="mailto:mail@conferencedesign.com.au" className="text-[#1e8bc3] hover:underline">mail@conferencedesign.com.au</a></li>
              </ul>
            </div>

          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10 text-[14px] leading-relaxed text-gray-600 font-light">

            <div>
              <h3 className="text-[20px] font-semibold text-gray-700 mb-4">eSatchel Inserts – PDF</h3>
              <p className="mb-6">Inserts will be linked to the eSatchel section of the conference app.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Eligibility:
                  <ul className="list-[circle] pl-6 mt-2 space-y-2">
                    <li>Sponsors – See your package for inclusions</li>
                    <li>Exhibitors – One PDF per exhibitor</li>
                  </ul>
                </li>
                <li>Additional inserts are available for purchase</li>
                <li>Format: High-resolution, full-colour PDF</li>
                <li>Orientation & Size: A4 portrait (210mm x 297mm)</li>
                <li>File Size: Maximum 500KB</li>
                <li>File Setup: No bleed or crop marks</li>
                <li>Delivery: PDFs will be uploaded as received</li>
                <li>Due Date: 30 days before the conference</li>
                <li>Upload via the Exhibitor Portal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-gray-700 mb-4">eSatchel Inserts – Video</h3>
              <p className="mb-6">Included for eligible sponsors and available for purchase.</p>
              <p className="mb-6">Videos will be linked to the eSatchel section of the conference app.</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Sponsors: See your package for inclusions</li>
                <li>Video Format: Vimeo or YouTube link</li>
                <li>Due Date: 30 days before the conference</li>
                <li>Upload via the Exhibitor Portal</li>
              </ul>
              <p>
                Note: Please ensure your video is publicly viewable or set to unlisted so it can be accessed without restriction.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-gray-700 mb-4">Satchel Inserts</h3>
              <p className="mb-6 text-gray-800">
                <strong>Please note that satchels inserts will not be offered at the conference.</strong>
              </p>
              <p>
                This approach is intended to reduce waste and promote sustainability, while also encouraging delegates to engage directly with exhibitors. Attendees are invited to visit display booths to collect any materials or promotional items they may need.
              </p>
            </div>

          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="w-full mt-24 mb-16">
          <h2 className="text-2xl md:text-[26px] font-semibold text-gray-700 mb-4">Terms and Conditions</h2>
          <p className="text-[14px] text-gray-600 font-light leading-relaxed">
            You can find the full sponsors and exhibitors <Link href="/sponsors-exhibitors-opportunities" className="text-[#1e8bc3] hover:underline">Terms and Conditions</Link> on the sponsors and exhibitors opportunities page.
          </p>
        </div>

        {/* Unilab Website Sponsor Banner */}
        <div className="w-full mb-10 flex flex-col items-center justify-center">
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
